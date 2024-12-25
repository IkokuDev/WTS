import { getServerSideUser } from '@/lib/payload-utils'
import { Product, Vendor } from '../../../../payload-types'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ProductsPage = async () => {
  const user = await getServerSideUser()
  
  if (!user) return null

  const products = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?where[vendor][equals]=${user.id}`).then(
    (res) => res.json()
  ) as { docs: Product[] }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Products</h1>
        <Link href='/dashboard/products/new'>
          <Button>
            <Plus className='h-4 w-4 mr-2' />
            Add Product
          </Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.docs.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell className='capitalize'>
                {product.category.replace('_', ' ')}
              </TableCell>
              <TableCell>
                {formatPrice(product.price)} {product.priceUnit}
              </TableCell>
              <TableCell className='capitalize'>
                {product.status}
              </TableCell>
              <TableCell>
                {product.inventory.quantity} {product.priceUnit}
              </TableCell>
              <TableCell className='text-right'>
                <Link href={`/dashboard/products/${product.id}`}>
                  <Button variant='ghost' size='sm'>
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProductsPage 