import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Walking The Sahel',
  description: 'Discover fresh groceries from your neighborhood stores delivered right to your doorstep. Explore our wide selection and shop local with Digital Dash.',
  keywords: 'local groceries, online grocery delivery, neighborhood stores, fresh produce, convenient shopping, Digital Dash',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn('relative h-full font-sans antialiased', inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
          <Providers>
            <Navbar/>
            <div className='flex-grow flex-1'>{children}</div>  
          </Providers>
        </main>
      </body>
    </html>
  )
}
