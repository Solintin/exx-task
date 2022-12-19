import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Svg/logo.svg";
import Web from "../assets/Svg/web.svg";
import Dropdown from "../assets/Svg/dropdown.svg";
import connect_arrow from "../assets/Svg/connect_arrow.svg";
import hamburger from "../assets/Svg/hamburger.svg";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("wallet", "injected");
    } catch (ex) {
      console.log(ex);
    }
  }
  function disconnect() {
    try {
      deactivate();
      localStorage.removeItem("wallet");
    } catch (ex) {
      console.log(ex);
    }
  }
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (!!wallet) {
      connect();
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="header border-gray-400  max-w-[1920px] mx-auto bg-white flex justify-between py-6 lg:py-6 lg:px-20 px-5 w-full">
        <div>
          <Link href="/">
            <Image src={logo} className="w-11/12 lg:h-14 h-8" alt="" />
          </Link>
        </div>
        <div className="md:flex hidden  text-sm space-x-7 items-center   font-medium">
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
            <Image alt="web" src={Web} className="mx-2" />{" "}
            <span className="mx-1 list">EN</span>{" "}
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
              className="bg-exx_blue list text-white rounded-[10px] py-4 px-6 flex items-center space-x-2"
            >
              <span className="font-bold">Connect wallet</span>
              <Image alt="arrow" src={connect_arrow} className="mx-2" />
            </button>
          )}
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden block "
        >
          <Image src={hamburger} alt="hamburger" />{" "}
        </button>
      </header>

      {isOpen && (
        <MobileNav active={active} disconnect={disconnect} connect={connect} />
      )}
    </div>
  );
}
