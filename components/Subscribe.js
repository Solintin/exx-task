import connect_arrow from "../assets/Svg/connect_arrow.svg";
import Image from "next/image";
import Link from "next/link";

function Subscribe() {
  return (
    <div className="bg-black py-12 ">
      <div className="max-w-6xl text-white grid md:grid-cols-2 mx-auto">
        <div className="">
          <h1 className="font-bold text-2xl mb-4">Stay Updated</h1>
          <p className="font-bold">
            Subscribe to our newsletter. We only send important updates.
          </p>
        </div>
        <div className=" flex gap-4">
          <div className="w-9/12">
            <input type="text" className="text-xl rounded-xl p-3 flex-1 w-full bg-transparent border border-[#FFFFFF7A]" placeholder="Your email address" />
          </div>
          <div className="w-3/12">
            <button className="bg-exx_blue text-white rounded-[10px] p-3 w-full flex items-center space-x-2">
              <span className=" text-sm font-bold">Subscribe</span>
              <Image src={connect_arrow} className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
