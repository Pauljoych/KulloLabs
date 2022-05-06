import React from 'react'
import { useMoralis } from 'react-moralis'

const Mint = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  return (
    <div className="items-center p-8 w-96 cursor-pointer rounded-3xl shadow-lg bg-white transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Mint NFTs</h3>
      </div>
      <div className="text-center">
        {!isAuthenticated ? (
          <button className="rounded-xl bg-blue-400 px-24 py-2 text-white">
            Disconected
          </button>
        ) : (
          <button className="rounded-xl bg-blue-600 hover:bg-blue-700 px-24 py-2 text-white">
            Stake
          </button>
        )}
      </div>
    </div>
  )
}

export default Mint
