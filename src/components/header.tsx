"use client"
import Phone from "@/assets/icons/phone.svg";
import Location from "@/assets/icons/location.svg";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Menu from "@/assets/icons/menu.svg";
import Cross from "@/assets/icons/cross.svg";
import { useState } from "react";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="header_shadow">
      <div className="bg-[#1B365D]  py-1">
        <div className="flex max-w-[1300px] mx-auto px-4 md:px-10  gap-x-6 text-white justify-center md:justify-end items-center">
          <div className="flex  text-[14px] font-source-sans  items-center gap-x-2">
            <Phone /> <span>1-260-250-4303</span>
          </div>
          <div className="flex  text-[14px]  font-source-sans items-center gap-x-2">
            <Location /> <span>Midwest Disc Clinic, Shipshewana</span>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="flex max-w-[1300px]  py-4  mx-auto px-2 md:px-10   justify-between items-center">
          <Image src={Logo} className="max-w-[90px]" alt="logo" />
          <div className="">
            <ul className={` z-30 transform duration-200 ease-in-out ${IsOpen ? 'top-28 header_shadow':" top-[-400px] "} md:block left-0 md:justify-center justify-start  absolute flex md:flex-row flex-col items-start bg-white w-full p-5 md:items-center gap-x-6`}>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Home
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Non-Surgical disc repair therapy
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Health Matters video podcast
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Reviews
                </p>
              </li>
              <li className="mt-4">
                <button className="py-[10px] md:hidden block bg-secondary text-white px-[21px] rounded-full text-[14px] font-bold">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <button className="py-[10px] md:block hidden bg-secondary text-white px-[21px] rounded-full text-[14px] font-bold">
            Contact
          </button>

          <div>
            <button onClick={() => setIsOpen(!IsOpen)}>
              {IsOpen ? <Cross /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
