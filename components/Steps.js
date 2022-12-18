import contract from "../assets/Svg/contract.svg";
import apps from "../assets/Svg/apps.svg";
import dapp from "../assets/Svg/dapp.svg";
import Image from "next/image";
import Link from "next/link";

function Extra() {
  const solidity = "{solidity}";
  const stack = "{next} {react}";
  const tools = "{web3.js} {ethers.js} ";
  return (
    <div>
      <div className="bg-exx_blue pt-14 -mt-48">
        <h1 className="text-center text-4xl mt-4 text-white font-bold">
          Your journey to developing your first dapp.
        </h1>
        <div className="mx-auto max-w-5xl mt-8 bg-white p-10 steps transform translate-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="">
              <Image src={contract} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Write Smart Contract </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Write instructions via code on the Exx network.
              </h1>
              <h1 className="text-exx_gray text-sm"> {solidity} </h1>
            </div>
            <div className="">
              <Image src={apps} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Build Web Apps </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Build a frontend application for easier interaction
              </h1>
              <h1 className="text-exx_gray text-sm"> {stack} </h1>
            </div>
            <div className="">
              <Image src={dapp} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Integrate Dapp </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Connect your contract with your web app.
              </h1>
              <h1 className="text-exx_gray text-sm"> {tools} </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="mx-auto max-w-4xl mt-12 bg-white py-12 px-20 connect">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="">
              <h1 className="text-3xl font-bold">
                Get connected to the EXX Network
              </h1>
              <div className="mt-12 text-xs grid grid-cols-2 gap-2">
                <button className="rounded-[10px] py-3 text-white bg-exx_blue w-full font-semibold">
                  Add to Metamask
                </button>
                <button className="rounded-[10px] py-3 w-full border text-exx_blue border-blue-500 ">
                  Learn More
                </button>
              </div>
            </div>
            <div className="space-y-4 text-sm font-light">
              <div className="flex gap-2">
                <p className="text-gray-500">PRC URL:</p>{" "}
                <p>
                  <Link href="#">https://ds2.exx.network</Link>
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Network name:</p>{" "}
                <p> Exx Testnet</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Symbol: </p> <p>EXX</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Chain ID: </p> <p>47</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Block Explorer: </p>{" "}
                <p>
                  <Link href="#">https://exxscan.com</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
