import Image from "next/image";
import logo from "../assets/Svg/logo.svg";
import Web from "../assets/Svg/web.svg";
import Dropdown from "../assets/Svg/dropdown.svg";
import connect_arrow from "../assets/Svg/connect_arrow.svg";
import Link from "next/link";
// import { injected } from "./wallet/connectors";
// import { useWeb3React } from '@web3-react/core'


export default function Home() {
  // const { active, account, library, connector, activate, deactivate } =
  //   useWeb3React();
  // async function connect() {
  //   try {
  //     await activate(injected);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }
  return (
    <div>
      <header className="header border-gray-400  max-w-[1920px] mx-auto bg-white flex justify-between py-6 lg:py-6 lg:px-20 px-2 w-full">
        <div>
          <Link href="/">
            <Image src={logo} className="w-11/12 lg:h-14 h-8" alt="" />
          </Link>
        </div>
        <div className="md:flex hidden text-sm space-x-7 items-center   font-medium">
          <Link
            href="#"
            className="text-[10px] sm:text-xs lg:text-base rounded-md   "
          >
            About
          </Link>
          <Link
            href="#"
            className="rounded-md text-[10px] sm:text-xs lg:text-base  "
          >
            Developer
          </Link>
          <Link
            href="#"
            className="rounded-md text-[10px] sm:text-xs lg:text-base  "
          >
            blog
          </Link>
          <Link
            href="#"
            className="rounded-md text-[10px] flex sm:text-xs lg:text-base  "
          >
            <Image src={Web} className="mx-2" />{" "}
            <span className="mx-1">EN</span>{" "}
            <Image src={Dropdown} className="mx-2" />
          </Link>

          {
            true ? (
            <button className="bg-exx_blue text-white rounded-[10px] py-4 px-6 flex items-center space-x-2">
              <span className="font-bold">Connected</span>
        
            </button>
          ) : (
            <button  className="bg-exx_blue text-white rounded-[10px] py-4 px-6 flex items-center space-x-2">
              <span className="font-bold">Connect wallet</span>
              <Image src={connect_arrow} className="mx-2" />
            </button> 
          )
        }
        </div>
      </header>
    </div>
  );
}
