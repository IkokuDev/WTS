import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  Settings,
  BadgeDollarSign
} from 'lucide-react'

export const DASHBOARD_NAVIGATION = [
  {
    label: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: ShoppingCart,
  },
  {
    label: 'Products',
    href: '/dashboard/products',
    icon: Package,
  },
  {
    label: 'Transactions',
    href: '/dashboard/transactions',
    icon: BadgeDollarSign,
  },
  {
    label: 'Customers',
    href: '/dashboard/customers',
    icon: Users,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
] as const

export type DashboardNavigationItem = (typeof DASHBOARD_NAVIGATION)[number] 