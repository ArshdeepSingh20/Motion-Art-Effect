import React from "react";

function BrowserSupport() {
  return (
    <div className="py-20">
      <div className="flex flex-col md:p-0 p-10 justify-center items-center apply-card w-full h-72 border-2 border-[#FFFFFF10] rounded-3xl">
      <h2 className="text-[#EEE5FF] text-center font-sora font-semibold text-2xl mb-6">
        Supported by All Popular Browsers
      </h2>
      <p className="text-[#EEE5FFBD] text-center font-outfit  text-lg md:max-w-[430px] mb-6">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>

      <div className="">
        <img
          src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png"
          alt=""
        />
      </div>
    </div>
    </div>
  );
}

export default BrowserSupport;
