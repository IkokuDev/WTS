import Image from 'next/image'
import { LucideProps } from 'lucide-react'
import { ImageProps } from 'next/image'

export const Icons = {
  logo: (props: Partial<ImageProps>) => (
    <Image
      src="/wts-logo.png"
      alt="WTS Logo"
      width={170}
      height={400}
      priority
      className="object-contain"
      {...props}
    />
  ),
}