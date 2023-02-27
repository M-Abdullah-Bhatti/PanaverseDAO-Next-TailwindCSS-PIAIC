import Image from "next/image";
import React from "react";
import { cardsData } from "../data";

const page = () => {
  // "bg-gray-500 flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5";
  return (
    <div className="text-center ">
      <h2 className="text-[48px] font-normal font-Raleway">
        We Are <span className="text-[#145CEB]">Proud</span>
      </h2>
      <p className="text-[15px] font-normal font-Nunito">
        You don't have to struggle alone, you've got our assistance and help.
      </p>
      <div className=" flex flex-wrap  mt-5 place-content-center">
        {cardsData.map((item) => (
          <div
            key={item.icon}
            // className={product.stock < 1 ? "redColor" : "greenColor"}
            // className={`bg-[${item.bgColor}]flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5`}
            className={`bg-${item.bgColor} flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5`}
          >
            <Image
              className="mx-auto"
              width={60}
              height={60}
              src={item.icon}
              alt="image"
            />
            <span className="text-[34px] font-normal font-Raleway text-black">
              {item.amount}
            </span>
            <p className="text-[15px] opacity-80 text-black">{item.text}</p>
          </div>
        ))}
        {/*         
        <div className="bg-gray-500 flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5">
          <Image
            className="mx-auto"
            width={60}
            height={60}
            src="/assets/IMAGE.png"
            alt="image"
          />
          <span className="text-[34px] font-normal font-Raleway text-white">
            5000
          </span>
          <p className="text-[15px] opacity-80 text-white">Student Enrolled</p>
        </div>
        <div className="bg-gray-500 flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5">
          <Image
            className="mx-auto"
            width={60}
            height={60}
            src="/assets/IMAGE.png"
            alt="image"
          />
          <span className="text-[34px] font-normal font-Raleway text-white">
            5000
          </span>
          <p className="text-[15px] opacity-80 text-white">Student Enrolled</p>
        </div>
        <div className="bg-gray-500 flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5">
          <Image
            className="mx-auto"
            width={60}
            height={60}
            src="/assets/IMAGE.png"
            alt="image"
          />
          <span className="text-[34px] font-normal font-Raleway text-white">
            5000
          </span>
          <p className="text-[15px] opacity-80 text-white">Student Enrolled</p>
        </div>
        <div className="bg-gray-500 flex flex-col place-content-center w-[270px] h-[240px] p-auto rounded mx-10 mt-5">
          <Image
            className="mx-auto"
            width={60}
            height={60}
            src="/assets/IMAGE.png"
            alt="image"
          />
          <span className="text-[34px] font-normal font-Raleway text-white">
            5000
          </span>
          <p className="text-[15px] opacity-80 text-white">Student Enrolled</p>
        </div> 
        */}
      </div>
    </div>
  );
};

export default page;
