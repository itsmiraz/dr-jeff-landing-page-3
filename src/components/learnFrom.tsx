import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/learningFrom/image-1.png";
import Image2 from "@/assets/images/learningFrom/image2.png";
import Image3 from "@/assets/images/learningFrom/image3.png";
import Image4 from "@/assets/images/learningFrom/image4.png";
import Image5 from "@/assets/images/learningFrom/image5.png";
import Image6 from "@/assets/images/learningFrom/image6.png";
import HorizontalLine from "@/assets/icons/horizontalLine.svg";
import LoadMore from "@/assets/icons/leftArrow.svg";
import { font_platinPro } from "@/fonts/fonts";
const topContent = [
  {
    type: "Article",
    title: "Understanding Spinal disc health",
    imageSrc: Image1.src,
  },
  {
    type: "Video",
    title: "Why traditional treatments often fail",
    imageSrc: Image2.src,
  },
  {
    type: "Podcast",
    title: "The truth about back surgery",
    imageSrc: Image3.src,
  },

  {
    type: "Video",
    title: "Patient success stories: John's journey",
    imageSrc: Image4.src,
  },
  {
    type: "Article",
    title: "Treatment explanations",
    imageSrc: Image5.src,
  },
  {
    type: "Webinar",
    title: "Educational series",
    imageSrc: Image6.src,
  },
];

const LearnFrom = () => {
  return (
    <div className="flex mt-[60px] md:mt-[150px] px-6 flex-col items-center rounded-none">
      <h1 className={`${font_platinPro} text-[34px] md:text-4xl font-bold leading-none text-center text-primary max-md:max-w-full`}>
        Learn from a leading Spine expert
      </h1>
      <div className="flex mt-[6px] justify-center items-center">
        <HorizontalLine />
      </div>
      <div className="max-w-[1320px] mt-[40px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {topContent.map((item, i) => (
          <ContentCard key={i} {...item} />
        ))}
      </div>
    

      <button
        className="flex mt-10 gap-3 px-5 py-[13px]  items-center max-w-full text-sm font-bold leading-loose text-white bg-secondary rounded-[100px]"
        tabIndex={0}
      >
        <span>Load More</span>
        <LoadMore />
      </button>
    </div>
  );
};

export default LearnFrom;

const ContentCard = ({
  type,
  title,
  imageSrc,
}: {
  type: string;
  title: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex pt-[20px] pb-[25px] px-[20px]  rounded-[30px] md:rounded-[40px] bg-[#F5F7F9] flex-col w-full">
      <div className="flex flex-col grow items-start font-bold ">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          width={373}
          height={220}
          className=" self-stretch rounded-none w-full"
        />
        <p className="mt-3.5  font-source-sans text-base text-secondary">{type}</p>
        <h3 className={`mt-[4px] ${font_platinPro} text-xl leading-relaxed text-primary`}>
          {title}
        </h3>
      </div>
    </div>
  );
};
