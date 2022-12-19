import contract from "../assets/Svg/contract.svg";
import apps from "../assets/Svg/apps.svg";
import dapp from "../assets/Svg/dapp.svg";
import Image from "next/image";
import Link from "next/link";
import connect_arrow from "../assets/Svg/connect_arrow.svg";
import faucet from "../assets/Svg/faucet.svg";

function Extra() {
  const solidity = "{solidity}";
  const stack = "{next} {react}";
  const tools = "{web3.js} {ethers.js} ";
  return (
    <div>
      <div className="bg-exx_blue  md:h-full h-[450px] pt-14 px-6 -mt-16 md:-mt-48">
        <h1 className="md:text-center text-4xl mt-4 text-white font-bold">
          Your journey to developing your first dapp.
        </h1>
        <div className="mx-auto max-w-5xl mt-8 bg-white p-10 steps transform translate-y-16 md:translate-y-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            <div className="">
              <Image alt="contract" src={contract} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Write Smart Contract </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Write instructions via code on the Exx network.
              </h1>
              <h1 className="text-exx_gray text-sm"> {solidity} </h1>
            </div>
            <div className="">
              <Image alt="apps" src={apps} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Build Web Apps </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Build a frontend application for easier interaction
              </h1>
              <h1 className="text-exx_gray text-sm"> {stack} </h1>
            </div>
            <div className="">
              <Image alt="dapps" src={dapp} className="h-8 w-8 mb-3" />
              <h1 className="text-black mb-4">Integrate Dapp </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Connect your contract with your web app.
              </h1>
              <h1 className="text-exx_gray text-sm"> {tools} </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 md:mt-0 mt-[450px] ">
        <div className="mx-auto max-w-4xl mt-12 bg-white md:py-12  px-5 md:px-20 connect">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="">
              <h1 className="text-3xl font-bold">
                Get connected to the EXX Network
              </h1>
              <div className="mt-12 hidden  text-xs md:grid grid-cols-2 gap-2">
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
                <p className="text-gray-500">RPC URL:</p>
                <p>
                  <Link href="#">https://ds2.exx.network</Link>
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Network name:</p>
                <p> Exx Testnet</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Symbol: </p> <p>EXX</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Chain ID: </p> <p>47</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">Block Explorer: </p>
                <p>
                  <Link href="#">https://exxscan.com</Link>
                </p>
              </div>
            </div>
            <div className="md:mt-12 mt-6 md:hidden  text-xs grid md:grid-cols-2 gap-4">
              <button className="bg-exx_blue text-white rounded-[10px] py-4 px-6 flex items-center justify-center space-x-2">
                <span className="font-bold">Add to metamask</span>
                <Image alt="arrow" src={connect_arrow} className="mx-2" />
              </button>
              <button className="rounded-[10px] py-3 w-full border text-exx_blue border-blue-500 flex items-center justify-center space-x-2">
                <span className="font-bold">Learn More</span>
                <Image alt="arrow" src={faucet} className="mx-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
