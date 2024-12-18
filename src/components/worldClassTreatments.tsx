import React from "react";
import HorizontalLine from "@/assets/icons/horizontalLine.svg";
import LeftArrow from "@/assets/icons/leftArrow.svg";
import { font_platinPro } from "@/fonts/fonts";

const WorldClassTreatments = () => {
  const localPatientPoints = [
    "Comprehensive evaluation",
    "Advanced diagnostic imaging",
    "Personalized treatment",
    "Insurance accepted",
  ];

  const travelPatientPoints = [
    "Specialized treatment plans",
    "Accommodation assistance",
    "Travel-friendly scheduling",
    "Remote follow-up care",
  ];

  return (
    <div className="mt-[150px]">
      <div className="flex  px-[20px] justify-center max-w-[1300px] mx-auto  flex-col rounded-none">
        <h2 className={`${font_platinPro}  self-center ml-5 text-[34px] md:text-4xl font-bold leading-none text-center text-primary max-md:max-w-full`}>
          World-Class treatment available now
        </h2>
        <div className="pt-[6px] mx-auto">
          <HorizontalLine />
        </div>
        <div className="flex md:flex-row flex-col gap-[30px] pt-[40px]" >
          <PatientSection
            title="Local Patients"
            description="Visit our state-of-the-art clinic in Shipshewana, Indiana:"
            bulletPoints={localPatientPoints}
            actionBtnText={'Schedule Your Visit: 260-768-4712'}
          />
          <PatientSection
            title="Travel Patients"
            description="Patients travel from across the country and Canada for our unique approach:"
            bulletPoints={travelPatientPoints}
            actionBtnText={'Learn About Our Travel Program'}
          />
        </div>
        
      </div>
    </div>
  );
};

export default WorldClassTreatments;

const ActionButton = ({ text }: { text: string }) => (
  <button className="gap-x-[10px] font-source-sans flex items-center w-fit px-5 py-[13px] bg-secondary rounded-[100px]">
    <span className="grow text-xs md:text-sm font-bold leading-loose text-white">
      {text}
    </span>
    <span>
      <LeftArrow />
    </span>
  </button>
);

const PatientSection = ({
  title,
  description,
  bulletPoints,
  actionBtnText
}: {
  title: string;
  actionBtnText:string,
  description: string;
  bulletPoints: string[];
}) => (
  <div className="h-fit md:h-[471px] p-0 md:p-[30px] rounded-[30px]  bg-transparent md:bg-[#F5F7F9] max-w-[635px] ">
   <div 
   
   className="bg-white drop-shadow-xl h-full pt-[50px] pb-[20px] px-[20px] rounded-[30px] flex flex-col flex-1 max-md:max-w-full">
   <h2 className={`${font_platinPro} whitespace-nowrap self-start text-[34px] md:text-4xl font-bold leading-none text-[#7C9885]`}>
      {title}
    </h2>
    <p className=" font-source-sans mt-4 text-[18px] md:text-xl leading-[28px] text-[#1B365D] max-md:max-w-full">
      {description}
    </p>
    <div className="mt-[15px]">
      {bulletPoints.map((point, index) => (
        <BulletPoint key={index} text={point} />
      ))}
    </div>
    <div className="pt-[50px]">
    <ActionButton text={actionBtnText} />
    </div>

   </div>
  </div>
);

const BulletPoint = ({ text }: { text: string }) => (
  <div className="flex gap-4">
    <div className="flex flex-col self-start mt-3">
      <div className="flex shrink-0 w-2 h-2 bg-secondary rounded-full" />
    </div>
    <p className="w-64 text-base leading-7 font-source-sans text-primary">{text}</p>
  </div>
);
