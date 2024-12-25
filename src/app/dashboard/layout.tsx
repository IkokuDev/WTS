import { redirect } from 'next/navigation'
import { getServerSideUser } from '@/lib/payload-utils'
import DashboardNav from '@/components/DashboardNav'

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const user = await getServerSideUser()
  
  if (!user) {
    redirect('/sign-in?origin=/dashboard')
  }

  return (
    <div className='flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 max-w-7xl mx-auto p-8'>
      <aside className='sm:w-64'>
        <DashboardNav />
      </aside>
      <main className='flex-1'>{children}</main>
    </div>
  )
}

export default DashboardLayout
