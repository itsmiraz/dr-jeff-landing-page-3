/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/testimonail/image1.png";
import HorizontalLine from "@/assets/icons/horizontalLine.svg";
import RoundedArrow from '@/assets/icons/roundedArrow.svg'
import RoundedArrowRight from '@/assets/icons/roundedArrowRight.svg'
import Image2 from "@/assets/images/testimonail/image2.png";
const Results = () => {
  const testimonials = [
    {
      imageSrc: Image1.src,
      name: "Tony R., Verified Patient",
      text: "From wheelchair to walking in weeks. The DOSAE™ method gave me my life back when surgery seemed like the only option.",
    },
    {
      imageSrc: Image2.src,
      name: "Sarah M., Verified Patient",
      text: "After trying everything for my sciatica, Dr. Jeff's approach finally provided lasting relief.",
    },
  ];
  return (
    <div>
      <div className="flex max-w-[1300px] mx-auto py-[50px] px-[111px]  rounded-[40px] bg-[#F5F7F9] flex-col items-center">
        <h2 className="z-10 text-4xl font-bold leading-none text-center text-blue-950 max-md:max-w-full">
          Real results, Real people
        </h2>

        <div className="pt-[6px]">
          <HorizontalLine />
        </div>
        <div className="self-stretch mt-10 w-full max-md:max-w-full">
          <div className="flex gap-[30px] max-md:flex-col">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-[60px] gap-x-[127px] justify-center items-center">
          <div>
            <RoundedArrow/>
          </div>
          <StatisticItem value="90%" label="Success Rate" />
          <StatisticItem value="8/10" label="Patients avoid surgery" />
          <StatisticItem value="85%" label="Average pain reduction" />
          <div>
            <RoundedArrowRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

const StatisticItem = ({
  value,
  label,
}: //   iconSrc,
{
  value: string;
  label: string;
  //   iconSrc: string;
}) => {
  return (
    <div className="flex flex-col font-bold text-center">
      <div className="self-center text-5xl leading-none text-[#7C9885] max-md:text-4xl">
        {value}
      </div>
      <div className="mt-[10px] w-full text-lg  whitespace-nowrap leading-none text-primary">{label}</div>
    
    </div>
  );
};

const TestimonialCard = ({
  imageSrc,
  name,
  text,
}: {
  imageSrc: any;
  name: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col grow items-center px-11 py-9 w-full text-xl font-bold text-center bg-white rounded-[40px] shadow-[10px_50px_80px_rgba(41,46,51,0.06)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <Image
        loading="lazy"
        src={imageSrc}
        width={80}
        height={80}
        alt={`Profile picture of ${name}`}
        className="object-contain w-20 rounded-none aspect-square"
      />
      <div className="mt-5 leading-tight text-gray-500">{name}</div>
      <p className="self-stretch mt-4 leading-[30px] text-blue-950 max-md:max-w-full">
        {text}
      </p>
    </div>
  );
};
