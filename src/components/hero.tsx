import HeroImg from "@/assets/images/hero.png";
import Image from "next/image";
import Line from "@/assets/icons/line.svg";
import BackgroundGraphic from "@/assets/images/background-graphic-desktip.png";
import { plantinMTPro } from "@/fonts/fonts";
import UnderLine from "@/assets/icons/mobileUnderlineHero.svg";

const Hero = () => {

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
        backgroundImage: `url(${BackgroundGraphic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex md:flex-row flex-col relative  gap-[40px] justify-center pt-[40px] md:pt-[84px]  pb-[100px] md:pb-[259px] px-[20px] md:px-20"
    >
      <div>
        <h1
          className={`text-[50px] leading-[60px] md:text-[70px] ${plantinMTPro.variable} font-serif  md:leading-[80px] font-bold text-primary`}
        >
          Advanced Non-
          <br className="hidden md:block" />{" "}
          <span className="relative ">
            <span className="z-20 relative"> Surgical Spine</span>
            <span className="absolute md:block hidden z-10 pb-5 -bottom-8 left-0">
              {" "}
              <Line />
            </span>
            <span className="absolute md:hidden block z-10 pb-5 -bottom-8 left-0">
              {" "}
              <UnderLine />
            </span>
          </span>{" "}
          <br className="hidden md:block" /> care that works
        </h1>
        <p className="text-primary pt-[20px]  font-source-sans text-xl">
          Pioneering breakthrough treatments for disc injuries, helping <br />
          thousands avoid surgery and return to a pain-free life.
        </p>

        <div className="grid pt-[46px] grid-cols-1 md:grid-cols-2 gap-x-[41px] gap-y-[30px]">
          {data.map((item, i) => (
            <div className="bg-white hero_shadow rounded-lg p-[20px]" key={i}>
              <h3 className="text-[18px] font-source-sans font-bold text-secondary">
                {item.title}
              </h3>
              <p className="text-[18px] font-source-sans  text-[#1B365D]">
                {item.desc}
              </p>
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
