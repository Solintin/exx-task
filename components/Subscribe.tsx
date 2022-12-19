import connect_arrow from "../assets/Svg/connect_arrow.svg";
import Image from "next/image";

function Subscribe() {
  return (
    <div className="bg-black px-5 md:px-0 py-12 ">
      <div className="max-w-6xl text-white grid md:grid-cols-2 items-center mx-auto">
        <div className="">
          <h1 className="font-bold text-4xl mb-4">Stay Updated</h1>
          <p className="">Subscribe to our newsletter.</p>
          <p className="">We only send important updates. </p>
        </div>
        <div className=" flex flex-col md:flex-row gap-4 md:mt-0 mt-6">
          <div className="md:w-9/12 w-full">
            <input
              type="text"
              className="text-sm rounded-xl p-3 flex-1 w-full bg-transparent border border-[#FFFFFF7A]"
              placeholder="Your email address"
            />
          </div>
          <div className="md:w-3/12 w-full">
            <button className="bg-exx_blue text-white rounded-[10px] p-3 w-full flex items-center justify-center space-x-2">
              <span className=" text-sm font-bold">Subscribe</span>
              <Image alt="arrow" src={connect_arrow} className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
