import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import HeaderImg from '../../public/assets/images/logo.svg';


function Header() {
  return (
    <header className='w-full border-b'>
      <div className=' wrapper flex  items-center justify-between'>
      <Link href='/' className='w-36'>
      <Image src={HeaderImg} width={128} height={38} alt='Evently Logo'/>
      </Link>
      <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs'>
          <NavItems/>
        </nav>
      </SignedIn>

      <div className='flex w-32 justify-end gap-3'>
        <SignedIn>
          <UserButton afterSignOutUrl='/'/>
          <MobileNav/>
        </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button asChild className='rounded-full' size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignInButton>
      </SignedOut>
      </div>
      </div>
    </header>
  )
}

export default Header
