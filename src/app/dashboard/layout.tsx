import { PropsWithChildren } from 'react'
import { DASHBOARD_NAVIGATION } from '@/config/dashboard'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          {DASHBOARD_NAVIGATION.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
