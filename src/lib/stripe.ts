import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export const getStripeInstance = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing Stripe secret key')
  }
  return stripe
}

// Helper function to format amount to cents
export const formatAmountForStripe = (amount: number, currency: string) => {
  const currencies = ['USD', 'EUR', 'GBP']
  if (!currencies.includes(currency.toUpperCase())) {
    throw new Error('Unsupported currency')
  }
  
  return Math.round(amount * 100)
}

// Helper function to handle Stripe webhook events
export const handleStripeWebhookEvent = async (event: Stripe.Event) => {
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      if (paymentIntent.metadata.type === 'escrow') {
        // Handle escrow payment success
        // Update transaction status
      }
      break
    
    case 'payment_intent.payment_failed':
      // Handle payment failure
      break
    
    case 'charge.dispute.created':
      // Handle new dispute
      break
    
    default:
      console.log(`Unhandled event type ${event.type}`)
  }
} 