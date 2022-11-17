import { useState } from "react";
import { useContractWrite } from "wagmi";
import ABI from "./abi/rimbafarm.json";

const Staking = () => {
  const [tokenId, setTokenId] = useState(0);
  const stake = useContractWrite(
    {
      addressOrName: "0x34DA7A50dfA77e8aE0aDc05827bA2387eca7682A",
      contractInterface: ABI,
    },
    "stakeRimba",
    { args: { tokenId } }
  );

  return (
    <div className="items-center p-8 w-96 cursor-pointer rounded-3xl shadow-lg bg-white transition duration-400 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <div className="text-center">
        <h3 className="text-4xl font-bold">NFTs Staking</h3>
      </div>
      <div className="py-6">
        <input
          onChange={(e) => setTokenId(e.target.value as any)}
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
        <button
          onClick={stake.write as any}
          className="rounded-xl font-bold bg-[#0d76fd] px-24 py-2 text-white"
        >
          {stake.isLoading ? "Loading.." : "Stake"}
        </button>
      </div>
    </div>
  );
};

export default Staking;
