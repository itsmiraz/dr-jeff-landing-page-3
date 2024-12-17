/* eslint-disable react/no-unescaped-entities */
import MainImg from "@/assets/images/pathToReliefImage.png";
import DotIcon from "@/assets/icons/dot.svg";
import Image from "next/image";
import LeftArrow from "@/assets/icons/leftArrow.svg";

const PathToRelief = () => {
  const points = [
    "Disc bulges or herniations",
    "Sciatica pain",
    "Chronic neck or back pain",
    "Numbness or tingling",
  ];
  return (
    <div>
      <div className="flex justify-center gap-20 items-center max-w-[1300px] mx-auto bg-primary rounded-[40px] pl-[110px] pr-[134px]">
        <div>
          <h2 className="text-[40px] text-white font-bold">
            Discover your path to relief
          </h2>
          <p className="text-[18px] leading-[28px] text-[#F5F7F9]">
            Take our comprehensive spine assessment to find out if the DOSAE™{" "}
            <br /> method could help you avoid surgery
          </p>
          <div>
            <h4 className="pt-[41px] font-bold text-[24px] text-[#7C9885]">
              Whether you're experiencing:
            </h4>
            <ul className="pt-[10px] space-y-[10px]">
              {points.map((item, key) => (
                <li key={key} className="flex items-center gap-x-[10px]">
                  <DotIcon />
                  <p className="font-semibold text-[#F5F7F9]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[48px]">
            <button className="rounded-full font-bold text-white flex items-center justify-center gap-x-[12px] px-[20px] py-[13px] bg-[#D4AA4F]">
              Start Your Free Assessment <LeftArrow />
            </button>
            <p className="font-semibold mt-[6px] text-[14px] text-[#7C9885]">
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
