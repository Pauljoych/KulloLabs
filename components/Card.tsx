import React from 'react'
import { useMoralis } from 'react-moralis'

const Card = () => {
  const isAuthenticated = true

  return (
    <div className="items-center p-8 w-96 cursor-pointer rounded-3xl shadow-lg bg-white transition duration-400 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <div className="text-center">
        <h3 className="text-4xl font-bold">NFTs Staking</h3>
      </div>
      <div className="py-6">
        <input
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-gray-100 bg-clip-padding
            border border-solid border-gray-400
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          type="text"
          placeholder="Enter Token ID"
        />
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

export default Card
