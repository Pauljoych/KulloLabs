import { useContractRead, useContractWrite } from "wagmi";
import ABI from "./abi/token.json";

const Mint = () => {
  const mint = useContractWrite(
    {
      addressOrName: "0xF3780f8A8554906f388E8B2F58733b0Ed1a3831e",
      contractInterface: ABI,
    },
    "privateMint"
  );

  return (
    <div className="items-center p-8 w-96 cursor-pointer rounded-3xl shadow-lg bg-white transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Mint NFTs</h3>
      </div>
      <div className="text-center">
        <button
          onClick={mint.write as any}
          className="rounded-xl font-bold bg-[#0d76fd] px-24 py-2 text-white"
        >
          {mint.isLoading ? "Loading..." : "Mint"}
        </button>
      </div>
    </div>
  );
};

export default Mint;
