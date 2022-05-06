import React from 'react'
import Logo from './img/logo.svg'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
  const isAuthenticated = true

  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow-xl sm:items-baseline w-full">
      <div className="sm:mb-0 self-center">
        <Image src={Logo} height="53" width="240" alt="Logo" />
      </div>
      <div className="sm:mb-0 self-center">
        <ConnectButton accountStatus="address" />
      </div>
    </nav>
  )
}

export default Navbar
