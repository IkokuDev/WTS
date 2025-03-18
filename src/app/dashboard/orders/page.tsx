import { getServerSideUser } from '@/lib/payload-utils'
import { formatPrice } from '@/lib/utils'
import { Order, Product, User } from '../../../../payload-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'

interface OrderProduct {
  id: string
  product: Product | string
  quantity: number
}

const OrdersPage = async () => {
  const user = await getServerSideUser()
  
  if (!user) return null

  try {
  const orders = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders?depth=2`
  ).then((res) => res.json()) as { docs: Order[] }

    if (!orders?.docs) {
      return (
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-3xl'>Orders</h1>
          <p>No orders found.</p>
        </div>
      )
    }

    // Filter orders that contain products from this vendor
    const vendorOrders = orders.docs.filter(order => {
      const orderProducts = order.products as OrderProduct[]
      return orderProducts.some(item => {
        const product = item.product as Product
        return product.vendor === user.id
      })
    })

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>Orders</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {vendorOrders.map((order) => {
            const orderUser = order.user as User
              const orderProducts = (order.products as OrderProduct[])
                .filter(item => {
                  const product = item.product as Product
                  return product.vendor === user.id
                })
            
            return (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{orderUser?.email || 'N/A'}</TableCell>
                <TableCell>
                  {orderProducts.map((item) => {
                    const product = item.product as Product
                    return (
                      <div key={item.id} className='text-sm'>
                        {product.name} x {item.quantity}
                      </div>
                    )
                  })}
                </TableCell>
                <TableCell>{formatPrice(order.total)}</TableCell>
                <TableCell>
                  <Badge variant={
                    order.status === 'PENDING' ? 'default' :
                    order.status === 'PROCESSING' ? 'secondary' :
                    order.status === 'COMPLETED' ? 'success' :
                    'destructive'
                  }>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{format(new Date(order.createdAt), 'MMM d, yyyy')}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
  } catch (error) {
    console.error('Error fetching orders:', error)
    return (
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-3xl'>Orders</h1>
        <p className='text-red-500'>Error loading orders. Please try again later.</p>
      </div>
    )
  }
}

export default OrdersPage 