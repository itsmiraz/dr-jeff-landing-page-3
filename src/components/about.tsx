import React from "react";
import LeftArrow from "@/assets/icons/leftArrow.svg";
import DrJeff from "@/assets/images/drjeff.png";
import Image from "next/image";
import Dot from '@/assets/icons/dot.svg'
const About = () => {
  return (
    <div className="mt-[150px]">
      <div className="max-w-[1077px] flex justify-between items-center p-[40px] rounded-[40px] mx-auto bg-[#F5F7F9]">
        <div>
          <h2 className="text-[40px] font-bold text-primary  ">Meet Dr. Jeff Garofalo</h2>
          <p className="text-[16px] text-primary  mt-[20px] leading-[24px] ">
            Advanced trained non-surgical disc specialist with over two decades
            of <br /> experience in innovative spine care. Creator of the DOSAE™
            method, <br /> published author, and recognized expert in non-surgical disc
            treatment.
          </p>
          <p className="text-[#7C9885] font-bold text-xl mt-[20px]">Specializing in:</p>
          <ul className="space-y-1 mt-2">
            <li className="flex items-center gap-x-4">
             <Dot/>
              <p className="text-[#1B365D]  font-semibold text-[20px]">Complex disc cases</p>
            </li>
            <li className="flex items-center gap-x-4">
            <Dot/>
              <p className="text-[#1B365D] font-semibold  text-[20px]">Failed back surgery</p>
            </li>
            <li className="flex items-center gap-x-4">
            <Dot/>
              <p className="text-[#1B365D]  font-semibold text-[20px]">Chronic pain</p>
            </li>
            <li className="flex items-center gap-x-4">
            <Dot/>
              <p className="text-[#1B365D]  font-semibold text-[20px]">Sciatica treatment</p>
            </li>
          </ul>

          <button className="gap-x-[10px] mt-[45px] flex items-center w-fit px-5 py-[13px] bg-secondary rounded-[100px]">
            <div className="grow text-sm font-bold leading-loose text-white">
              Schedule a Consultation
            </div>
            <div>
              <LeftArrow />
            </div>
          </button>
        </div>
        <div>
          <Image className="max-w-[373px]" src={DrJeff}  alt=""/>
        </div>
      </div>
    </div>
  );
};

export default About;
