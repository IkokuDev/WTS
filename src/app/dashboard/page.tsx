import { getServerSideUser } from '@/lib/payload-utils'
import { formatPrice } from '@/lib/utils'
import { Product, User, Vendor } from '../../../payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const DashboardPage = async () => {
  const user = await getServerSideUser()
  
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>
        Welcome back, {(user as Vendor)?.businessName || 'Vendor'}
      </h1>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {formatPrice(0)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage
