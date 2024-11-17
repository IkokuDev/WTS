"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const Cart = () => {
    const itemCount = 1
    const fee = 1
  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart
             aria-hidden="true" 
             className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:w-4/5 lg:w-1/2">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle className="text-lg font-semibold">Cart(0)</SheetTitle>
            </SheetHeader>
            {itemCount > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                        {/* Cart List */}Cart Items
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator/>
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1 text-muted-foreground">Shipping</span>
                                <span className="flex-1 text-muted-foreground">{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1 text-muted-foreground">Transaction Fee</span>
                                <span className="flex-1 text-muted-foreground">{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1 text-muted-foreground">Total</span>
                                <span className="flex-1 text-muted-foreground">{formatPrice(fee)}</span>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants({
                                    className: "w-full",
                                })}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (
                <div className="flex h-full w-full items-center justify-center">
                    <div className="text-sl text-muted-foreground font-semibold">No items in cart,</div>
                    <SheetTrigger asChild>
                        <Link href="/products" className={buttonVariants({
                            className: 'text-sm text-muted-foreground',
                            variant: 'link',
                            size: 'sm'
                        })}>Sort that Out?</Link>
                    </SheetTrigger>
                </div>
            )}
        </SheetContent>
    </Sheet>
  )
}

export default Cart

/**1:52:22 */