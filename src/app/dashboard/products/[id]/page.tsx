import ProductForm from '@/components/ProductForm'
import { Product } from '../../../../../payload-types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

const EditProductPage = async ({ params }: PageProps) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${params.id}`
  ).then((res) => res.json()) as Product

  if (!product) return notFound()

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>Edit Product</h1>
      <ProductForm initialData={product} isEditing />
    </div>
  )
}

export default EditProductPage 