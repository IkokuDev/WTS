import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const DriveWithUsPage = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Partner with us as a{' '}
          <span className='text-blue-600'>Fleet Owner</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Join our network of fleet owners and help deliver goods across the country. Register your vehicles and start earning today.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/fleet-registration' className={buttonVariants()}>
            Register Your Fleet
          </Link>
          <Link href='/fleet-requirements' className={buttonVariants({ variant: 'ghost' })}>
            Learn More
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default DriveWithUsPage