"use client"

import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

const Page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const origin = searchParams.get('origin')
    const isSeller = searchParams.get('as') === 'seller'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
        onSuccess: async ({ token }) => {
            // Set the cookie
            document.cookie = `payload-token=${token}; path=/; max-age=7200; SameSite=Lax`
            
            toast.success('Signed in successfully')
            
            // Force a hard refresh to ensure the new cookie is used
            window.location.href = origin 
                ? `/${origin}` 
                : isSeller 
                    ? '/sell' 
                    : '/'
        },
        onError: (err) => {
            if (err.data?.code === 'UNAUTHORIZED') {
                toast.error('Invalid email or password')
                return
            }

            toast.error('Something went wrong. Please try again.')
        },
    })

    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
        signIn({ email, password })
    }

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <Icons.logo className="h-40 w-40" />
                    <h1 className="text-2xl font-bold">
                        Sign in to your account
                    </h1>

                    <Link
                        className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                        })}
                        href='/sign-up'>
                        Don&apos;t have an account? Sign up
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className='grid gap-6'>
                    <form onSubmit={handleSubmit(onSubmit)} className='pb-8'>
                        <div className='grid gap-2'>
                            <div className='grid gap-1 py-2'>
                                <label htmlFor='email' className='text-sm font-medium'>
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    className='border-2 border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-md [&:not(:placeholder-shown):invalid]:border-red-500 [&:not(:placeholder-shown):invalid]:ring-red-500'
                                    placeholder='you@example.com'
                                    type='email'
                                    required
                                />
                            </div>

                            <div className='grid gap-1 py-2'>
                                <label htmlFor='password' className='text-sm font-medium'>
                                    Password
                                </label>
                                <input
                                    {...register('password')}
                                    className='border-2 border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-md [&:not(:placeholder-shown):invalid]:border-red-500 [&:not(:placeholder-shown):invalid]:ring-red-500'
                                    placeholder='Password'
                                    type='password'
                                    required
                                    minLength={6}
                                />
                            </div>

                            <button className={buttonVariants()} disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRight className='ml-1.5 h-5 w-5' />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page