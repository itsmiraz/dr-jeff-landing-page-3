import Phone from "@/assets/icons/phone.svg";
import Location from "@/assets/icons/location.svg";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="bg-[#1B365D] py-1">
        <div className="flex max-w-[1300px] mx-auto px-10  gap-x-6 text-white justify-end items-center">
          <div className="flex items-center gap-x-2">
            <Phone /> <span>1-260-250-4303</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Location /> <span>Midwest Disc Clinic, Shipshewana</span>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex max-w-[1300px] py-4  mx-auto px-10   justify-between items-center">
          <Image src={Logo} className="max-w-[90px]" alt="logo" />
          <div className="">
            <ul className="flex items-center gap-x-6">
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Home
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Non-Surgical disc repair therapy
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Health Matters video podcast
                </p>
              </li>
              <li>
                <p className="hover:font-bold cursor-pointer font-normal hover:underline text-[16px]">
                  Reviews
                </p>
              </li>
            </ul>
          </div>
          <button className="py-[10px] bg-secondary text-white px-[21px] rounded-full text-[14px] font-bold">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
