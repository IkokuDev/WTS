import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { orderId, amount } = body

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      metadata: {
        orderId,
        type: 'escrow',
      },
    })

    // Create escrow transaction record
    const transaction = await db.transaction.create({
      data: {
        orderId,
        amount,
        status: 'PENDING',
        buyerId: session.user.id,
        escrowId: paymentIntent.id,
        inspectionDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      transactionId: transaction.id,
    })
  } catch (error) {
    console.error('Transaction creation error:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { transactionId, action } = body

    const transaction = await db.transaction.findUnique({
      where: { id: transactionId },
    })

    if (!transaction) {
      return new NextResponse('Transaction not found', { status: 404 })
    }

    // Handle different actions
    switch (action) {
      case 'PASS_INSPECTION':
        // Release funds to seller
        await stripe.paymentIntents.capture(transaction.escrowId)
        await db.transaction.update({
          where: { id: transactionId },
          data: { status: 'INSPECTION_PASSED' },
        })
        break

      case 'DISPUTE':
        // Hold funds and mark as disputed
        await db.transaction.update({
          where: { id: transactionId },
          data: { status: 'DISPUTED' },
        })
        break

      default:
        return new NextResponse('Invalid action', { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Transaction update error:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const userId = session.user.id

    // Get transactions where user is either buyer or seller
    const transactions = await db.transaction.findMany({
      where: {
        OR: [
          { buyerId: userId },
          { sellerId: userId },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(transactions)
  } catch (error) {
    console.error('Transaction fetch error:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
} 