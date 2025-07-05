import React from 'react'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './button'
import { LayoutDashboard, PenBox } from 'lucide-react'
const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

                <Link href="/">
                    <Image src="/logo-2.png"
                        alt="budgetwiseLogo"
                        width={100} // can adjust if needed
                        height={100} // not too tall to affect nav
                        className="h-20 w-auto object-contain" />
                </Link>
              

                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link href="/dashboard"
                        className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden sm:inline">Dashboard</span>
                            </Button>
                        </Link>
                        <Link href="/transactions/create">
                            <Button>
                                <PenBox size={18} />
                                <span className="hidden sm:inline">Add Transaction</span>
                            </Button>
                        </Link>

                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">
                                Login
                            </Button>

                        </SignInButton>


                    </SignedOut>
                    <SignedIn>
                        <UserButton 
                        appearance={
                            {
                                elements:{
                                    avatarBox: "h-10 w-10",
                                    
                                }
                            }
                        }/>
                    </SignedIn>

                </div>





            </nav>

        </div>
    )
}

export default Header                
