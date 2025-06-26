import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react"; // Typo fix: CalendarIcon
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />

      <h1 className="text-5xl md:text-[70px] md:leading-[5rem] font-semibold max-w-xl">
        Guardians <br /> of the Galaxy
      </h1>

      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className="w-[18px] h-[18px]" />
          2018
        </div>

        <div className="flex items-center gap-1">
          <ClockIcon className="w-[18px] h-[18px]" />
          2h 8m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil
        voluptatem qui aliquid rerum consectetur sunt voluptas aperiam
        doloremque neque ipsam veritatis harum officiis, vero numquam ad ut,
        architecto consequuntur?
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <div className="text-white text-3xl bg-black h-screen flex items-center justify-center">
//       Hero Section Is Working!
//     </div>
//   );
// };

// export default HeroSection;
