'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { trpc } from '@/trpc/client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ImageSlider from '@/components/ImageSlider'
import { PRODUCT_CATEGORIES } from '@/config'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface PageProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: PageProps) => {
  const { data: product, isLoading } = trpc.getProduct.useQuery({
    id: params.id,
  })

  if (isLoading) {
    return (
      <MaxWidthWrapper>
        <div className='h-full w-full flex items-center justify-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900' />
        </div>
      </MaxWidthWrapper>
    )
  }

  if (!product) return notFound()

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  const validUrls = product.images
    .map(({ image }) => (typeof image === 'string' ? image : image.url))
    .filter(Boolean) as string[]

  const renderDescription = (description: any) => {
    if (typeof description === 'string') return description
    if (Array.isArray(description)) {
      return description.map((block: any, idx: number) => {
        if (typeof block === 'string') return <p key={idx}>{block}</p>
        if (block.children) {
          return <p key={idx}>{block.children.map((child: any) => 
            typeof child === 'string' ? child : child.text).join('')}</p>
        }
        return null
      })
    }
    return ''
  }

  return (
    <MaxWidthWrapper className='bg-white'>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          {/* Product Details */}
          <div className='lg:max-w-lg lg:self-end'>
            <div className='mt-4'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {product.name}
              </h1>
            </div>

            <section className='mt-4'>
              <div className='flex items-center'>
                <p className='font-medium text-gray-900'>
                  {formatPrice(product.price)} {product.priceUnit}
                </p>
                <div className='ml-4 border-l border-gray-300 pl-4'>
                  {label}
                </div>
              </div>
            </section>

            {/* Minimum Order Details */}
            <div className='mt-6 text-sm text-gray-700'>
              <p>Minimum Order: {product.minimumOrder?.quantity} {product.minimumOrder?.unit}</p>
            </div>

            {/* Product Specifications */}
            <Accordion type="single" collapsible className='mt-6'>
              <AccordionItem value="specifications">
                <AccordionTrigger>Product Specifications</AccordionTrigger>
                <AccordionContent>
                  <div className='space-y-4'>
                    {product.specifications && (
                      <div>
                        <p className='font-medium'>Dimensions:</p>
                        <p>Length: {product.specifications.dimensions.length}</p>
                        <p>Width: {product.specifications.dimensions.width}</p>
                        <p>Height: {product.specifications.dimensions.height}</p>
                        <p>Weight: {product.specifications.weight}</p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Bulk Pricing */}
              {product.bulkPricing && product.bulkPricing.length > 0 && (
                <AccordionItem value="bulk-pricing">
                  <AccordionTrigger>Bulk Pricing</AccordionTrigger>
                  <AccordionContent>
                    <div className='space-y-2'>
                      {product.bulkPricing.map((tier, index) => (
                        <div key={index} className='flex justify-between'>
                          <span>Minimum {tier.minimumQuantity} {tier.unit}</span>
                          <span>{formatPrice(tier.pricePerUnit)} per {tier.unit}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {/* Shipping Information */}
              {product.shipping && (
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping Information</AccordionTrigger>
                  <AccordionContent>
                    <div className='space-y-4'>
                      {product.shipping?.shippingMethods && product.shipping.shippingMethods.length > 0 ? (
                        <div>
                          <p className='font-medium'>Available Shipping Methods:</p>
                          {product.shipping.shippingMethods.map((method, index) => (
                            <div key={index} className='ml-4'>
                              <p>{method.method}</p>
                              <p className='text-sm text-gray-500'>
                                Estimated delivery: {method.estimatedDays} days
                              </p>
                              <p className='text-sm text-gray-500'>
                                Price: {formatPrice(method.pricePerKm)}/km
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No shipping methods available</p>
                      )}
                      
                      {product.shipping.specialHandling && (
                        <div>
                          <p className='font-medium'>Special Handling Required</p>
                          <p className='text-sm text-gray-500'>
                            {product.shipping.handlingInstructions}
                          </p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {/* Certificates */}
              {product.certificates && product.certificates.length > 0 && (
                <AccordionItem value="certificates">
                  <AccordionTrigger>Certificates</AccordionTrigger>
                  <AccordionContent>
                    <div className='space-y-2'>
                      {product.certificates.map((cert, index) => {
                        // Get the certificate URL safely
                        const certificateUrl = typeof cert.certificate === 'string' 
                          ? cert.certificate 
                          : cert.certificate?.url

                        return (
                          <div key={index}>
                            <p>{cert.certificateType}</p>
                            {certificateUrl && (
                              <a 
                                href={certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-600 hover:underline'
                              >
                                View Certificate
                              </a>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>

          {/* Product images */}
          <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
            <div className='aspect-square rounded-lg'>
              <ImageSlider urls={validUrls} />
            </div>
          </div>

          {/* Product description and add to cart */}
          <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
            <div className='mt-10'>
              <Button className='w-full'>
                Add to cart
                <ShoppingCart className='ml-2 h-4 w-4' />
              </Button>
            </div>

            <div className='mt-6 text-base text-muted-foreground'>
              {renderDescription(product.description)}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default ProductPage