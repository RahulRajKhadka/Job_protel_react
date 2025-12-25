
import React from 'react'
import {Link} from "react-router-dom"
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';


const Header = () => {
  return (
    <div>
    <nav className='py-4 flex justify-between items-center'>
      <Link>
      <img src="./logo.png" className='h-20'>
      </img>
      </Link>
      {/* <button variant="outline">Login</button> */}
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
    </div>
  )
}

export default Header
