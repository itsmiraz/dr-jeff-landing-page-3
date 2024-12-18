/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Lines from "@/assets/images/horizontal-lines.png";
import Image from "next/image";
import LeftArrow from "@/assets/icons/leftArrow.svg";
import Appointments from "@/assets/icons/appointment.svg";
import UnderLines from "@/assets/icons/smallUnderLines.svg";
import { font_platinPro } from "@/fonts/fonts";

const CTA = () => {
  return (
    <div className="mt-[150px]">
      <div className="bg-[#1B365D] flex justify-between  mx-auto items-center px-[20px] w-full max-w-[2200px]">
        <Image src={Lines} alt="" />
        <div className="pt-[50px] pb-[40px]">
          <h3 className={`${font_platinPro} text-[40px]  text-center font-bold leading-[46px] text-white`}>
            Take the first step toward a{" "}
            <span className="text-[#D4AA4F] relative pb-4 z-30">
              Pain-Free
              <span className="absolute -left-3 bottom-0">
                <UnderLines />
              </span>
            </span>{" "}
            life
          </h3>
          <p className="text-[30px] font-source-sans mt-[20px] text-center  text-white">
            Don't let spine pain control your life any longer
          </p>
          <div className="flex gap-x-[40px] justify-center items-center">
            <button className="gap-x-[10px] font-source-sans mt-[45px] flex items-center w-fit px-5 py-[13px] bg-secondary rounded-[100px]">
              <div className="grow text-sm font-bold leading-loose text-white">
                Take the Free Assessment
              </div>
              <div>
                <LeftArrow />
              </div>
            </button>
            <button className="gap-x-[10px] font-source-sans  mt-[45px] flex items-center w-fit px-5 py-[13px] border-secondary border  rounded-[100px]">
              <div className="grow text-sm font-bold leading-loose text-white">
                Schedule a Consultation
              </div>
              <div>
                <LeftArrow />
              </div>
            </button>
          </div>
          <p className="text-[20px]  font-source-sans underline mt-[40px] gap-x-[12px] flex items-center justify-center font-semibold text-[#A65D57]">
            <Appointments /> Limited appointments available this month
          </p>
        </div>
        <Image src={Lines} alt="" />
      </div>
    </div>
  );
};

export default CTA;
