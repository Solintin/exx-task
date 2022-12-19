
import Link from "next/link";

function Footer() {
  return (
    <div className="max-w-6xl px-5 md:px-0 mx-auto mt-40 pb-20">
      <div className=" grid md:grid-cols-12 gap-5 mx-auto mt-6 py-4  border-b">
        <div className="col-span-4">
          <h1 className="mb-5 text-2xl text-[#1D2A65] "> EXX Blockchain </h1>
          <div className="max-w-md">
            <div className="text-gray-400 font-light">
              <p> EXX builds on the efficacy of Ethereum,</p>
              <p> it is faster, powerful and more secured</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 flex flex-col">
          <h1 className="text-xl font-bold">General</h1>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Contact us
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Brand Kits
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            News & Updates
          </Link>
        </div>
        <div className="col-span-2 space-y-8 flex flex-col">
          <h1 className="text-xl font-bold">Explore</h1>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Documentation{" "}
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Block Explorer{" "}
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Github{" "}
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Community{" "}
          </Link>
        </div>
        <div className="col-span-2 space-y-8 flex flex-col">
          <h1 className="text-xl font-bold">Apply</h1>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Dev. Incubator
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Career{" "}
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Ambassador
          </Link>
        </div>
        <div className="col-span-2 space-y-8 flex flex-col">
          <h1 className="text-xl font-bold">Follow us</h1>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Medium
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Telegram
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Discord
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center mt-4">
        <div className="flex md:space-x-4 md:divide-x">
          <Link
            href="#"
            className="text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="pl-4 text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Terms & Conditions{" "}
          </Link>
          <Link
            href="#"
            className="pl-4 text-sm hover:text-exx_blue font-light text-gray-400"
          >
            Disclaimer
          </Link>
        </div>

        <div className="text-sm font-light mt-5 md:mt-0 text-gray-400">
          With love 💙 from Exxample, Inc
        </div>
      </div>
    </div>
  );
}

export default Footer;
