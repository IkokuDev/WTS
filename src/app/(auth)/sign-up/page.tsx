"use client"

import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

const Page = () => {

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const {mutate, isLoading} = trpc.auth.createPayloadUser.useMutation({})

    const onSubmit = ({email, password}: TAuthCredentialsValidator) => {
        mutate({email, password})
    }

  return <>
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <Icons.logo className="h-40 w-40"/>
                <h1 className="text-2xl font-bold">
                    Create an account
                </h1>

                <Link className={buttonVariants({
                    variant: "link",
                    className: "gap-1.5"
                    })} href='/sign-in'>
                    Already have an account? Sign in
                    <ArrowRight className="h-4 w-4"/>
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
                                name='email'
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
                                name='password'
                                placeholder='Password'
                                type='password'
                                required
                                minLength={6}
                            />
                        </div>

                        <button className={buttonVariants()}>
                            Sign up
                            <ArrowRight className='ml-1.5 h-5 w-5' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </>
}

export default Page