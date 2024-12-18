import Image from "next/image";
import React from "react";
import VerticalDivider from "@/assets/images/devider.png";
import { font_platinPro } from "@/fonts/fonts";
const Stats = () => {
  const statisticsData = [
    { value: "10,000+", label: "Patients Treated" },
    { value: "90%", label: "Success Rate" },
    { value: "22+", label: "Years Experience" },
    { value: "#1", label: "Featured Spine Expert" },
  ];
  const dividerImages = [VerticalDivider, VerticalDivider, VerticalDivider];

  return (
    <div className="max-w-[1300px] stats_shadows px-[80px] flex justify-center items-center mx-auto -translate-y-[100px] h-[200px] bg-[#FFFFFF] rounded-[20px] ">
      <div className="flex w-full justify-between flex-wrap gap-10 items-center font-bold text-center rounded-none">
        {statisticsData.map((stat, index) => (
          <React.Fragment key={index}>
            <StatisticItem value={stat.value} label={stat.label} />
            {index < dividerImages.length && (
              <Divider imageUrl={dividerImages[index].src} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stats;

const StatisticItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <h2 className="self-center font-source-sans text-5xl leading-none text-accent max-md:text-4xl">
        {value}
      </h2>
      <p className={`mt-7 text-lg  ${font_platinPro} leading-none text-primary`}>{label}</p>
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
