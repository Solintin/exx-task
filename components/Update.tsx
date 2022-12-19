import update1 from "../assets/Svg/update1.svg";
import update2 from "../assets/Svg/update2.svg";
import update3 from "../assets/Svg/update3.svg";
import Image from "next/image";
import Link from "next/link";

function Update() {
  return (
    <div className="max-w-6xl px-5 md:px-0 mx-auto md:mt-40 mt-10 pb-40">
      <h1 className="mb-5 text-2xl"> Exx Updates </h1>
      <div className="max-w-md">
        <p className="text-gray-400 text-xs">
          Catch up with news, blog posts, events and other happenings within the
          EXX ecosystem.
        </p>
      </div>
      <div className=" grid md:grid-cols-3 gap-5 mx-auto mt-6">
        <div className="bg-[#F5F5F5]  rounded-[20px]">
          <div className="px-3 mt-4 flex justify-between">
            <h1 className="text-xs">Blockchain tips</h1>
            <p className="text-gray-500 text-xs">March 27, 2022</p>
          </div>
          <div className="px-3">
            <h1 className="my-5 font-semibold">
              The design language of the Cross Chain- pekele pekele
            </h1>
          </div>
          <Image alt="update1" src={update1} />
        </div>

        <div className="bg-[#F5F5F5]  rounded-[20px]">
          <div className="px-3 mt-4 flex justify-between">
            <h1 className="text-xs">Blockchain tips</h1>
            <p className="text-gray-500 text-xs">March 27, 2022</p>
          </div>
          <div className="px-3">
            <h1 className="my-5 font-semibold">
              The design language of the Cross Chain- pekele pekele
            </h1>
          </div>
          <Image alt="update2" src={update2} />
        </div>

        <div className="bg-[#F5F5F5]  rounded-[20px]">
          <div className="px-3 mt-4 flex justify-between">
            <h1 className="text-xs">Blockchain tips</h1>
            <p className="text-gray-500 text-xs">March 27, 2022</p>
          </div>
          <div className="px-3">
            <h1 className="my-5 font-semibold">
              The design language of the Cross Chain- pekele pekele
            </h1>
          </div>
          <Image alt="update3" src={update3} />
        </div>
      </div>
    </div>
  );
}

export default Update;
