/* eslint-disable react/no-unescaped-entities */
import MainImg from "@/assets/images/pathToReliefImage.png";
import DotIcon from "@/assets/icons/dot.svg";
import Image from "next/image";
import LeftArrow from "@/assets/icons/leftArrow.svg";
import { font_platinPro } from "@/fonts/fonts";

const PathToRelief = () => {
  const points = [
    "Disc bulges or herniations",
    "Sciatica pain",
    "Chronic neck or back pain",
    "Numbness or tingling",
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse justify-center gap-10 md:gap-20 items-center max-w-[1300px] mx-auto bg-primary rounded-[0px] md:rounded-[40px] pl-0 px-0 md:pl-[110px] md:pr-[134px]">
        <div className="md:px-0 px-10 md:pb-0 pb-10">
          <h2 className={`${font_platinPro} text-[34px] md:text-[40px] text-white font-bold`}>
            Discover your path to relief
          </h2>
          <p className=" font-source-sans text-[18px] mt-[20px] leading-[28px] text-[#F5F7F9]">
            Take our comprehensive spine assessment to find out if the DOSAE™{" "}
            <br /> method could help you avoid surgery
          </p>
          <div>
            <h4 className={`${font_platinPro} pt-[41px] font-bold text-[20px]  md:text-[24px] text-[#7C9885]`}>
              Whether you're experiencing:
            </h4>
            <ul className="pt-[10px] space-y-[10px]">
              {points.map((item, key) => (
                <li key={key} className="flex items-center gap-x-[10px]">
                  <DotIcon />
                  <p className="font-semibold  font-source-sans text-[#F5F7F9]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[48px]">
            <button className="rounded-full font-source-sans font-bold text-white flex items-center justify-center gap-x-[12px] px-[20px] py-[13px] bg-[#D4AA4F]">
              Start Your Free Assessment <LeftArrow />
            </button>
            <p className="font-semibold  font-source-sans mt-[16px] text-[14px] text-[#7C9885]">
              Our assessment will help determine your best treatment path.
            </p>
          </div>
        </div>
        <Image className="h-full" src={MainImg} alt="" />
      </div>
    </div>
  );
};

export default PathToRelief;
