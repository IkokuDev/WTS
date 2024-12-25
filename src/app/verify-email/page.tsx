'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '@/trpc/client'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'

const VerifyEmailPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery(
    { token: token! },
    {
      enabled: token !== null,
      retry: false,
    }
  )

  useEffect(() => {
    if (data?.success) {
      // Email verified successfully
      router.push('/sign-in?verified=true')
    }
  }, [data, router])

  if (isError) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold text-xl'>There was a problem</h3>
        <p className='text-muted-foreground text-sm'>
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='animate-spin h-8 w-8 text-zinc-300' />
        <h3 className='font-semibold text-xl'>Verifying...</h3>
        <p className='text-muted-foreground text-sm'>
          This won&apos;t take long.
        </p>
      </div>
    )
  }

  return null
}

export default VerifyEmailPage
