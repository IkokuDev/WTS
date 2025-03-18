'use client'

import { Product } from '../../payload-types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { PRODUCT_CATEGORIES } from '@/config'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Checkbox } from '@/components/ui/checkbox'

const productFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.string().min(1, 'Price is required'),
  category: z.enum(['solid_minerals', 'agric_products', 'raw_materials', 'petrol_gas']),
  priceUnit: z.enum(['per_ton', 'per_kg', 'per_litre', 'per_cubic_meter']),
  status: z.enum(['active', 'draft', 'out_of_stock']).default('active'),
  vendor: z.string().optional(),
  inventory: z.object({
    quantity: z.string().min(1, 'Quantity is required'),
    lowStockThreshold: z.string().min(1, 'Low stock threshold is required'),
    trackingEnabled: z.boolean().default(true),
    allowBackorders: z.boolean().default(false),
    reservedQuantity: z.string().default('0'),
  }),
  images: z.array(z.object({
    image: z.string()
  })).optional(),
  minimumOrder: z.object({
    quantity: z.number(),
    unit: z.enum(['tons', 'kg', 'litres', 'm3'])
  }).optional(),
  ncx: z.object({
    listed: z.boolean().default(false),
    warehouseId: z.string().optional(),
    qualityTestingId: z.string().optional(),
    marketPrice: z.string().optional(),
    featured: z.boolean().default(false),
  }).default({
    listed: false,
    featured: false,
  }),
  paystar: z.object({
    insuranceRequired: z.boolean().default(false),
    insuranceCoverage: z.string().optional(),
    creditFacility: z.boolean().default(false),
    creditAmount: z.string().optional(),
    commissionRate: z.string().optional(),
  }).default({
    insuranceRequired: false,
    creditFacility: false,
  }),
})

type ProductFormValues = z.infer<typeof productFormSchema>

interface ProductFormProps {
  initialData?: Product | null
  isEditing?: boolean
}

const ProductForm = ({ initialData, isEditing }: ProductFormProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: initialData?.name ?? '',
      description: initialData?.description ? JSON.stringify(initialData.description) : '',
      price: initialData?.price?.toString() ?? '',
      category: initialData?.category ?? 'solid_minerals',
      priceUnit: initialData?.priceUnit ?? 'per_ton',
      status: initialData?.status ?? 'active',
      inventory: {
        quantity: initialData?.inventory?.quantity?.toString() ?? '0',
        lowStockThreshold: initialData?.inventory?.lowStockThreshold?.toString() ?? '10',
        trackingEnabled: true,
        allowBackorders: false,
        reservedQuantity: '0',
      },
      ncx: {
        listed: false,
        featured: false,
      },
      paystar: {
        insuranceRequired: false,
        creditFacility: false,
      }
    }
  })

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setIsLoading(true)

      const payload = {
        ...data,
        price: parseFloat(data.price),
        description: [{ type: 'paragraph', children: [{ text: data.description }] }],
        inventory: {
          ...data.inventory,
          quantity: parseInt(data.inventory.quantity),
          lowStockThreshold: parseInt(data.inventory.lowStockThreshold),
          reservedQuantity: parseInt(data.inventory.reservedQuantity || '0'),
        }
      }

      if (isEditing && initialData?.id) {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${initialData.id}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
          credentials: 'include',
        })
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`, {
          method: 'POST',
          body: JSON.stringify(payload),
          credentials: 'include',
        })
      }

      router.refresh()
      router.push('/dashboard/products')
      toast.success(isEditing ? 'Product updated.' : 'Product created.')
    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder='Product name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  disabled={isLoading} 
                  placeholder='Product description' 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type='number' disabled={isLoading} placeholder='9.99' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue defaultValue={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PRODUCT_CATEGORIES.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='priceUnit'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Unit</FormLabel>
                <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue defaultValue={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='per_ton'>Per Ton</SelectItem>
                    <SelectItem value='per_kg'>Per KG</SelectItem>
                    <SelectItem value='per_litre'>Per Litre</SelectItem>
                    <SelectItem value='per_cubic_meter'>Per Cubic Meter</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='inventory.quantity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type='number' disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='inventory.lowStockThreshold'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Low Stock Threshold</FormLabel>
                <FormControl>
                  <Input type='number' disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* NCX Integration Section */}
        <div className='space-y-4 border rounded-lg p-4'>
          <h2 className='text-lg font-semibold'>NCX Integration</h2>
          
          <FormField
            control={form.control}
            name='ncx.listed'
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormLabel>List on NCX</FormLabel>
              </FormItem>
            )}
          />

          {form.watch('ncx.listed') && (
            <>
              <FormField
                control={form.control}
                name='ncx.warehouseId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Warehouse ID</FormLabel>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='ncx.qualityTestingId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quality Testing ID</FormLabel>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='ncx.featured'
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormLabel>Featured Listing</FormLabel>
                  </FormItem>
                )}
              />
            </>
          )}
        </div>

        {/* Paystar Integration Section */}
        <div className='space-y-4 border rounded-lg p-4'>
          <h2 className='text-lg font-semibold'>Paystar Integration</h2>
          
          <FormField
            control={form.control}
            name='paystar.insuranceRequired'
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormLabel>Require Insurance</FormLabel>
              </FormItem>
            )}
          />

          {form.watch('paystar.insuranceRequired') && (
            <FormField
              control={form.control}
              name='paystar.insuranceCoverage'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance Coverage Amount</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name='paystar.creditFacility'
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormLabel>Enable Credit Facility</FormLabel>
              </FormItem>
            )}
          />

          {form.watch('paystar.creditFacility') && (
            <FormField
              control={form.control}
              name='paystar.creditAmount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Credit Amount</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name='paystar.commissionRate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commission Rate (%)</FormLabel>
                <FormControl>
                  <Input type='number' disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} type='submit'>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          {isEditing ? 'Save changes' : 'Create product'}
        </Button>
      </form>
    </Form>
  )
}

export default ProductForm 