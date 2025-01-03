import { getServerSideUser } from "@/lib/payload-utils"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from './ui/button'
import Cart from "./Cart"
import { Menu } from 'lucide-react'
import UserAccountNav from "./UserAccountNav"

const Navbar = async () => {
    const user = await getServerSideUser()
    
    console.log('Navbar user:', user)

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-12 w-20' />
                                </Link>
                            </div>

                            <div className='flex lg:hidden'>
                                <button
                                    type='button'
                                    className='text-gray-400 hover:text-gray-500'
                                >
                                    <Menu className='h-6 w-6' />
                                </button>
                            </div>

                            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-between'>
                                <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                    <NavItems />
                                </div>
                                
                                <div className='ml-auto flex items-center'>
                                    <div className='hidden lg:flex lg:items-center lg:justify-end lg:space-x-6'>
                                        {user ? (
                                            <UserAccountNav user={user} />
                                        ) : (
                                            <>
                                                <Link 
                                                    href='/sign-in' 
                                                    className={buttonVariants({
                                                        variant: 'ghost',
                                                        size: 'sm'
                                                    })}
                                                >
                                                    Sign In
                                                </Link>
                                                <Link 
                                                    href="/sign-up" 
                                                    className={buttonVariants({
                                                        variant: 'ghost',
                                                        size: 'sm'
                                                    })}
                                                >
                                                    Sign Up
                                                </Link>
                                            </>
                                        )}

                                        <div className="ml-4">
                                            <Cart/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar
