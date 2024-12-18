/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import DiagnosisIcon from "@/assets/images/iconsImages/diaogonosis.png";
import TreatmentIcon from "@/assets/images/iconsImages/treatment.png";
import ResultsIcon from "@/assets/images/iconsImages/results.png";
import CheckIcon from "@/assets/icons/check.svg";
import { font_platinPro } from "@/fonts/fonts";

const TreatMent = () => {
  const data = [
    {
      icon: DiagnosisIcon.src,
      iconAlt: "Advanced Diagnosis Icon",
      title: "Advanced Diagnosis",
      points: [
        "Expert MRI analysis",
        "Comprehensive spine evaluation",
        "Precise problem identification",
      ],
    },
    {
      icon: TreatmentIcon.src,
      iconAlt: "Revolutionary Treatment Icon",
      title: "Revolutionary Treatment",
      points: [
        "Proprietary DOSAE™ method",
        "Non-surgical approach",
        "Targeted disc therapy",
      ],
    },
    {
      icon: ResultsIcon.src,
      iconAlt: "Lasting Results Icon",
      title: "Lasting Results",
      points: [
        "Root cause treatment",
        "Long-term solutions",
        "Preventive strategies",
      ],
    },
  ];
  return (
    <div>
      <div className="max-w-[1300px] py-[50px] px-[111px] mx-auto rounded-[40px] bg-[#F5F7F9] ">
      <div className="flex flex-col items-center rounded-none">
        <h2 className={`z-10 ${font_platinPro} text-4xl font-bold leading-none text-center text-primary max-md:max-w-full`}>
          Transforming Spine treatment through innovation
        </h2>
        <p className="mt-4 font-source-sans text-lg leading-loose text-center text-primary max-md:max-w-full">
          Combining advanced diagnostics with revolutionary non-surgical
          solutions
        </p>
        <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-[41px] max-md:flex-col">
            {data.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TreatMent;

const FeatureCard = ({
  icon,
  iconAlt,
  title,
  points,
}: {
  icon: any;
  iconAlt: string;
  title: string;
  points: string[];
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pl-[30px] pt-8 pb-12 mx-auto w-full bg-white rounded-[40px] shadow-[10px_50px_80px_rgba(41,46,51,0.06)] max-md:px-5 max-md:mt-10">
        <Image
          loading="lazy"
          src={icon}
          alt={iconAlt}
          width={120}
          height={120}
          className="object-contain self-center w-[100px] h-[100px] rounded-none aspect-square"
        />
        <h3 className={`${font_platinPro}  self-start mt-[0px] text-2xl font-bold leading-loose text-primary`}>
          {title}
        </h3>
        <div className="flex gap-3 items-start mt-[13px]">
          {/* <div className="flex flex-col mt-4">
            {points.map((_, index) => (
              <CheckIcon key={index} />
              // <Image
              //   key={index}
              //   width={16}
              //   height={12}
              //   loading="lazy"
              //   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1919d4b0850787590c95a9f1f9ec3804285b4a5d985b3f36951088b19fa223fd?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c"
              //   alt=""
              //   className="object-contain w-4 aspect-[1.33] mt-7 first:mt-0"
              // />
            ))}
          </div> */}
          <div className=" text-lg leading-10 text-blue-950">
            {points.map((point, index) => (
              <div key={index} className="flex text-[18px] leading-[40px] items-center gap-x-3">
                <CheckIcon/>
                <p className="font-source-sans">
                {point}
                </p>
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
