import Image from "next/image";
import Link from "next/link";
import Dropdown from "../assets/Svg/dropdown.svg";
import connect_arrow from "../assets/Svg/connect_arrow.svg";
function MobileNav( {active, disconnect, connect}: any ) {
  return (
    <div> <div className="fixed inset-0 h-[70vh] bg-white top-14 py-5 px-5">
    <div className="flex flex-col text-sm space-y-4  font-medium">
      <Link
        href="#"
        className="text-[10px] hover:text-exx_blue list sm:text-xs lg:text-base rounded-md   "
      >
        About
      </Link>
      <Link
        href="#"
        className="rounded-md hover:text-exx_blue list text-[10px] sm:text-xs lg:text-base  "
      >
        Developer
      </Link>
      <Link
        href="#"
        className="rounded-md hover:text-exx_blue list text-[10px] sm:text-xs lg:text-base  "
      >
        blog
      </Link>
      <div className="rounded-md text-[10px] flex items-center sm:text-xs lg:text-base  ">
        <span className="list">EN</span>{" "}
        <Image alt="dropdown" src={Dropdown} className="mx-2" />
      </div>

      {active ? (
        <button
          onClick={disconnect}
          className="bg-exx_blue list text-white rounded-[10px] py-4 px-6 flex items-center space-x-2"
        >
          <span className="font-bold">Connected</span>
        </button>
      ) : (
        <button
          onClick={connect}
          className="bg-exx_blue list text-white rounded-[10px] py-2 px-6 w-full flex items-center space-x-2"
        >
          <span className="font-bold">Connect wallet</span>
          <Image alt="arrow" src={connect_arrow} className="mx-2" />
        </button>
      )}
    </div>
  </div> </div>
  )
}

export default MobileNav