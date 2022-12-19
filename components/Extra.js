import discord_logo from "../assets/Svg/discord_logo.svg";
import join from "../assets/Svg/join.jpg";

import Image from "next/image";
import Link from "next/link";

function Steps() {
  const solidity = "{solidity}";
  const stack = "{next} {react}";
  const tools = "{web3.js} {ethers.js} ";
  return (
    <div>
      <div className="md:pt-14  md:mt-20">
        <div className="mx-auto max-w-6xl mb-8 mt-8 bg-white p-10 ">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="">
              <h1 className="text-blue-400 text-2xl font-bold list">01</h1>
              <h1 className="text-[#2C3131] font-bold mb-4">Documentation </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Everything needed to build on Exx{" "}
              </h1>
              <Link
                href="#"
                className="underline font-light text-sm text-exx_blue"
              >
                View docs
              </Link>
            </div>
            <div className="">
              <h1 className="text-blue-400 text-2xl font-bold list">02</h1>
              <h1 className="text-[#2C3131] font-bold mb-4">Watch & Learn </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Solidity made easy with recordings
              </h1>
              <Link
                href="#"
                className="underline font-light text-sm text-exx_blue"
              >
                Watch now
              </Link>
            </div>
            <div className="">
              <h1 className="text-blue-400 text-2xl font-bold list">03</h1>
              <h1 className="text-[#2C3131] font-bold mb-4">
                Blockchain Explorer{" "}
              </h1>
              <h1 className="text-exx_gray mb-2 text-sm">
                Explore transactions on Exx
              </h1>
              <Link
                href="#"
                className="underline font-light text-sm text-exx_blue"
              >
                Explore now{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 md:px-0 mt-10 max-w-[900px]">
          <div className=" join  border-2 border-[#174AFF] text-white grid md:grid-cols-2 overflow-x-hidden">
            <div className="pl-6 py-8 space-y-4">
              <h1 className="text-4xl"> Join our developer community</h1>
              <p className="text-xs text-gray-500">
                Join our community of developers from diverse backgrounds where
                you can work collaboratively, develop projects, ask questions
                and grow your career.
              </p>
              <button className="rounded-[10px] py-3  px-14 bg-exx_blue  flex justify-center items-center space-x-2">
                <Image src={discord_logo} />
                <span> Join the community</span>
              </button>
            </div>
            <div className=" flex justify-self-end transform  translate-x-6 ">
              <Image src={join} className="md:h-[320px] md:w-[400px] h-[220px] w-[260px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
