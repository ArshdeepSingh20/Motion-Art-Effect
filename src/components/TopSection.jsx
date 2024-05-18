import React from "react";

function TopSection() {
  return (
    <div className="flex flex-col md:flex-row mt-16 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/4 text-center md:text-start md:justify-start flex items-center justify-center flex-col">
        <h2 className="title text-xl font-sora max-w-36">
          Transform <span>Your Website</span>
        </h2>
        <div className="mt-3">
          <p className="text-[#EEE5FF] text-xl font-outfit md:max-w-36">
            With Motion Art Effect
          </p>
        </div>
      </div>

      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-[36px] md:text-[65px] font-sora font-semibold text-[#EEE5FF] leading-tight max-w-2xl tracking-wide">
          Attract Your Visitors Attention With Colorful
          <span className="title"> Motion Art Effect</span>
        </h1>

        <p className="text-[#EEE5FFBD] mt-6 md:mt-12 text-lg max-w-xl font-outfit">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
}

export default TopSection;
