import React from 'react'
import { useMoralis } from 'react-moralis'
import Logo from './img/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({})
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user!.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const logOut = async () => {
    await logout()
    console.log('logged out')
  }

  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow-xl sm:items-baseline w-full">
      <div className="sm:mb-0 self-center">
        <Image src={Logo} />
      </div>
      <div className="sm:mb-0 self-center">
        {!isAuthenticated ? (
          <button
            onClick={login}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={logOut}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300"
          >
            Disconect
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
