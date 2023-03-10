import connect_arrow from "../assets/Svg/connect_arrow.svg";
import Image from "next/image";
import Link from "next/link";

function Links() {
  return (
    <div className="bg-black py-10 px-4 transform md:-translate-y-[178px] -translate-y-16">
      <div className="max-w-4xl flex flex-wrap gap-6 md:grid md:grid-cols-3  justify-center mx-auto text-sm md:text-base">
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Connect wallet</span>
            <Image alt="arrow" src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60] text-[12px]">EXX seamless swap portal</h1>
        </div>
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Exx Incubator</span>
            <Image alt="arrow" src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60] text-[12px]">Launch with EXX platform</h1>
        </div>
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Video Tutorial</span>
            <Image alt="arrow" src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60] text-[12px]">Earn seamlessly with EXX</h1>
        </div>
      </div>
    </div>
  );
}

export default Links;
