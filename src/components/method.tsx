import Image from "next/image";
import Image1 from "@/assets/images/method/image-1.png";
import Image2 from "@/assets/images/method/image2.png";
import Image3 from "@/assets/images/method/image3.png";
import { font_platinPro } from "@/fonts/fonts";

const Method = () => {
  const methodData = [
    {
      letter: "D",
      title: "Decompressive Oscillation",
      bulletPoints: [
        "Reactivates natural disc healing",
        "Restores proper nutrient flow",
        "Targets specific problem areas",
      ],
      bgColor: "bg-[#7C9885]",
    },
    {
      letter: "O",
      title: "Optimal Spine Alignment",
      bulletPoints: [
        "Precise vertebral positioning",
        "Balanced pressure distribution",
        "Long-term stability focus",
      ],
      bgColor: "bg-[#D4AA4F]",
    },
    {
      letter: "S",
      title: "Specific Exercise Protocol",
      bulletPoints: [
        "Customized strengthening",
        "Core stabilization",
        "Prevention-focused movement",
      ],
      bgColor: "bg-[#7C9885]",

    },
    {
      letter: "A",
      title: "Advanced Analysis",
      bulletPoints: [
        "Comprehensive imaging review",
        "Precise diagnosis",
        "Targeted treatment planning",
      ],
      bgColor: "bg-[#D4AA4F]",
    },
    {
      letter: "E",
      title: "Essential Nutrients",
      bulletPoints: [
        "Natural healing support",
        "Inflammation management",
        "Nerve health optimization",
      ],
      bgColor: "bg-[#7C9885]",
    },
  ];
  const images = [
    {
      src: Image1,
      alt: "DOSAE Method illustration",
    },
    {
      src: Image2,
      alt: "Spine treatment visualization",
    },
    {
      src: Image3,
      alt: "Treatment process diagram",
    },
    // {
    //   src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/36c1bd45eca677745538ab2bf9dfe91c9d6fec0c8197b221a324a3b2f63b2d49?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c',
    //   alt: 'Treatment results visualization'
    // }
  ];
  return (
    <div className=" py-[60px] md:py-[150px]">
      <div className="max-w-[1277px] px-4 mx-auto">
        <div className="flex flex-col items-center rounded-none">
          <h2 className={`${font_platinPro} z-10 text-[34px] md:text-4xl font-bold leading-[40px] md:leading-10 text-center text-primary max-md:max-w-full`}>
            The DOSAE™ Method:
            <br className="md:block hidden" />A revolutionary approach to Spine care
          </h2>
          <p className={`mt-3  md:text-start text-center font-source-sans text-lg leading-[22px] text-[#1B365D]`}>
            Where others mask symptoms, we target the root cause.
          </p>
          <div className="self-stretch mt-[40px] md:mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex  gap-5 md:flex-row flex-col-reverse">
              <div className="flex space-y-4 flex-col w-[35%] max-md:ml-0 max-md:w-full">
                {methodData.map((method, index) => (
                  <MethodSection
                    key={index}
                    letter={method.letter}
                    title={method.title}
                    bulletPoints={method.bulletPoints}
                    bgColor={method.bgColor}
                  />
                ))}
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-2 w-full max-md:mt-10 max-md:max-w-full">
                  <Image
                    loading="lazy"
                    src={images[0].src}
                    alt={images[0].alt}
                    className="object-contain w-full rounded-none aspect-[1.99] max-md:max-w-full"
                  />
                  <div className="mt-[16px] md:mt-8 max-md:max-w-full">
                    <div className="flex gap-5 ">
                      <div className="flex flex-row md:flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Image
                          loading="lazy"
                          src={images[1].src}
                          alt={images[1].alt}
                          className="object-contain grow w-full rounded-none aspect-[0.97] "
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <Image
                          loading="lazy"
                          src={images[2].src}
                          alt={images[2].alt}
                          className="object-contain grow w-full rounded-none aspect-[0.97]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;

const MethodSection = ({
  letter,
  title,
  bulletPoints,
  bgColor,
}: {
  letter: string;
  title: string;
  bulletPoints: string[];
  bgColor: string;
}) => (
  <div className="flex flex-col">
    <div className="flex gap-4 items-start">
      <div
        className={`${font_platinPro} mt-1 flex justify-center items-center leading-0 w-10 h-10 text-2xl font-bold leading-loose text-center whitespace-nowrap ${bgColor} rounded-full shadow-[4px_4px_14px_rgba(146,158,198,0.2)] text-slate-100`}
      >
        {letter}
      </div>
      <div className="flex flex-col ">
        <h3 className={` ${font_platinPro} text-[22px] md:text-2xl font-bold leading-loose text-primary`}>
          {title}
        </h3>
        <div className="flex flex-col gap-1 mt-2">
          {bulletPoints.map((text, index) => (
            <BulletPoint key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BulletPoint = ({ text }: { text: string }) => (
  <div className="flex items-center gap-x-4">
    <div className="flex shrink-0 w-2 h-2 bg-[#D4AA4F] rounded-full" />
    <p className="w-full  font-source-sans text-base  text-[#1B365D]">{text}</p>
  </div>
);
