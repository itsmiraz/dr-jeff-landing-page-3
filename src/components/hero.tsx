import HeroImg from "@/assets/images/hero.png";
import Image from "next/image";
import Line from "@/assets/icons/line.svg";
import BackgroundGraphic from "@/assets/images/background-graphic-desktip.png";
import MobileBackgroundGraphic from "@/assets/images/background-graphic-desktip.png";
import { useState } from "react";
import { plantinMTPro } from "@/fonts/fonts";
const Hero = () => {
  const [isMobile, setisMobile] = useState(false);

  const data = [
    {
      title: "Creator of the DOSAE™ Method",
      desc: "Innovative Spine Treatment ",
    },
    {
      title: "High Success Rate",
      desc: "Without Surgery ",
    },
    {
      title: "22+ Years of Clinical Excellence",
      desc: "Proven Expertise ",
    },
    {
      title: "Advanced Trained",
      desc: "Non-Surgical Disc Specialist",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${
          isMobile ? MobileBackgroundGraphic.src : BackgroundGraphic.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex relative  gap-x-[40px] justify-center pt-[84px] pb-[259px] px-20"
    >
      <div>
        <h1 className={`text-[70px] ${plantinMTPro.variable} font-serif  leading-[80px] font-bold text-primary`}>
          Advanced Non-
          <br />{" "}
          <span className="relative ">
            <span className="z-20 relative"> Surgical Spine</span>
            <span className="absolute z-10 pb-5 -bottom-8 left-0">
              {" "}
              <Line />
            </span>
          </span>{" "}
          <br /> care that works
        </h1>
        <p className="text-primary  font-source-sans text-xl">
          Pioneering breakthrough treatments for disc injuries, helping <br />
          thousands avoid surgery and return to a pain-free life.
        </p>

        <div className="grid pt-[46px] grid-cols-2 gap-x-[41px] gap-y-[30px]">
          {data.map((item, i) => (
            <div className="bg-white hero_shadow rounded-lg p-[20px]" key={i}>
              <h3 className="text-[18px] font-source-sans font-bold text-secondary">
                {item.title}
              </h3>
              <p className="text-[18px] font-source-sans  text-[#1B365D]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[635px]">
        <Image src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
