import ProductForm from '@/components/ProductForm'

const NewProductPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>Add New Product</h1>
      <ProductForm />
    </div>
  )
}

export default NewProductPage 