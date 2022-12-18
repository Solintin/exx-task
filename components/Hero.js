import faucet from "../assets/Svg/faucet.svg";
import exx_overview from "../assets/Svg/exx_overview.svg";
import Image from "next/image";
function Hero() {
  return (
    <div className="pt-10 text-center">
      <h1 className="font-bold text-5xl">
        Start building apps with
        <span className="text-exx_blue mx-1">useful cases</span>
      </h1>
      <div className="flex flex-col justify-center items-center mt-4 max-w-4xl mx-auto">
        <div className="max-w-xl">
          <h3 className="text-[#00000099] text-base mt-10">
            Welcome to the EXX Developer’s Guide. Now you can begin building
            your first DApp on EXX.
          </h3>
        </div>
        <div className="flex justify-center space-x-3 max-w-2xl mt-3">
          <button className="rounded-[10px] py-3 text-white bg-exx_blue px-14 font-semibold">
            Get Started
          </button>
          <button className="rounded-[10px] py-3 px-14 border text-exx_blue border-blue-500 flex justify-center items-center space-x-2">
            <span>Faucet</span> <Image src={faucet} />
          </button>
        </div>
        <div className="">
          <Image src={exx_overview} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
