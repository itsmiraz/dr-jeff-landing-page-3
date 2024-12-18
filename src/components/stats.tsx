import Image from "next/image";
import React from "react";
import VerticalDivider from "@/assets/images/devider.png";
import horizontalDivider from "@/assets/images/horizontalDiverd.png";
import { font_platinPro } from "@/fonts/fonts";
const Stats = () => {
  const statisticsData = [
    { value: "10,000+", label: "Patients Treated" },
    { value: "90%", label: "Success Rate" },
    { value: "22+", label: "Years Experience" },
    { value: "#1", label: "Featured Spine Expert" },
  ];
  const dividerImages = [VerticalDivider, VerticalDivider, VerticalDivider];
  const hdividerImages = [horizontalDivider, horizontalDivider, horizontalDivider];

  return (
   <div className="px-[20px]">
     <div className="max-w-[1300px] py-[40px] stats_shadows px-[43px] md:px-[80px] flex justify-center items-center mx-auto  -translate-y-[0px] md:-translate-y-[100px] md:h-[200px] bg-[#FFFFFF] rounded-[20px] ">
      <div className="flex  md:flex-row flex-col w-full justify-between flex-wrap gap-[16px]  md:gap-10 items-center font-bold text-center rounded-none">
        {statisticsData.map((stat, index) => (
          <React.Fragment key={index}>
            <StatisticItem value={stat.value} label={stat.label} />
            <div className="md:block hidden">
            {index < dividerImages.length && (
              <Divider  imageUrl={dividerImages[index].src} />
            )}
            </div>
            <div className="md:hidden w-full mx-auto justify-center flex  ">
            {index < hdividerImages.length && (
              <HDivider  imageUrl={hdividerImages[index].src} />
            )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Stats;

const StatisticItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <h2 className="self-center font-source-sans  text-[50px] md:text-5xl leading-none text-accent max-md:text-4xl">
        {value}
      </h2>
      <p className={`mt-[10px] md:mt-7 text-lg  ${font_platinPro} leading-none text-primary`}>{label}</p>
    </div>
  );
};

const Divider = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      loading="lazy"
      src={imageUrl}
      width={29}
      height={132}
      alt=""
      className="object-contain shrink-0 self-stretch aspect-[0.22] w-[29px]"
    />
  );
};

const HDivider = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      loading="lazy"
      src={imageUrl}
      width={132}
      height={29}
      alt=""
      className="object-contain shrink-0 self-stretch"
    />
  );
};
