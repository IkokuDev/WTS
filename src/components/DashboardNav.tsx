'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Package, Settings, Store } from 'lucide-react'

const DashboardNav = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: 'Products',
      icon: Package,
      href: '/dashboard/products',
      active: pathname === '/dashboard/products',
    },
    {
      label: 'Orders',
      icon: Store,
      href: '/dashboard/orders',
      active: pathname === '/dashboard/orders',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/dashboard/settings',
      active: pathname === '/dashboard/settings',
    },
  ]

  return (
    <nav className='grid items-start gap-2'>
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant={route.active ? 'default' : 'ghost'}
            className='w-full justify-start gap-2'
          >
            <route.icon className='h-4 w-4' />
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default DashboardNav
