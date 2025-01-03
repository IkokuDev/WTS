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
  spinner: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}