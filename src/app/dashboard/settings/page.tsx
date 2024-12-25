'use client'

import { getServerSideUser } from '@/lib/payload-utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const settingsFormSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'ZIP code is required'),
  }),
})

type SettingsFormValues = z.infer<typeof settingsFormSchema>

const SettingsPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: async () => {
      const user = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/vendors/me`, {
        credentials: 'include',
      }).then((res) => res.json())

      return {
        businessName: user.businessName,
        registrationNumber: user.registrationNumber,
        address: user.address,
      }
    },
  })

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setIsLoading(true)

      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/vendors/me`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        credentials: 'include',
      })

      router.refresh()
      toast.success('Settings updated.')
    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>Settings</h1>

      <div className='grid gap-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='businessName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='registrationNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='space-y-4'>
              <h2 className='text-xl font-semibold'>Business Address</h2>

              <div className='grid gap-4'>
                <FormField
                  control={form.control}
                  name='address.street'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='grid grid-cols-3 gap-4'>
                  <FormField
                    control={form.control}
                    name='address.city'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input disabled={isLoading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='address.state'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input disabled={isLoading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='address.zip'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input disabled={isLoading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button disabled={isLoading} type='submit'>
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Save changes
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SettingsPage 