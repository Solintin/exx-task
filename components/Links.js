import connect_arrow from "../assets/Svg/connect_arrow.svg";
import Image from "next/image";
import Link from "next/link";

function Links() {
  return (
    <div className="bg-black py-10  transform -translate-y-[178px]">
      <div className="max-w-4xl grid md:grid-cols-3 mx-auto">
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Connect wallet</span>
            <Image src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60]">EXX seamless swap portal</h1>
        </div>
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Exx Incubator</span>
            <Image src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60]">Launch with EXX platform</h1>
        </div>
        <div className="">
          <Link href="#" className="text-white rounded-[10px] py-2 flex items-center space-x-2">
            <span className="font-bold">Video Tutorial</span>
            <Image src={connect_arrow} className="mx-2" />
          </Link>
          <h1 className="text-[#FFFFFF60]">Earn seamlessly with EXX</h1>
        </div>
      </div>
    </div>
  );
}

export default Links;
