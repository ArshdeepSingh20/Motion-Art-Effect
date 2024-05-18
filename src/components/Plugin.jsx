import React from "react";
import FeatureCard from "./FeatureCard";

function Plugin() {
  return (
    <div className="py-16">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-center font-sora mb-4 font-semibold text-[#EEE5FF] leading-snug md:text-[40px] text-xl md:max-w-xl">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="text-center font-outfit text-[#EEE5FFBD] max-w-xl">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>

        <div className="flex md:flex-row flex-col justify-between w-full mt-20">
          <div className="w-full md:w-1/3 p-4">
            <FeatureCard
              title={"Light Weight"}
              description={
                "Motion Art for Elementor is designed to be lightweight."
              }
              imageURL={
                "https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2F7322ba8a54d545909e4c08905dcb96d2"
              }
            />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <FeatureCard
              title={"100% Responsive"}
              description={
                "Create a consistent visual experience across all devices."
              }
              imageURL={
                "https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fee1e22bfe1b94ccba7f66374f4f50090"
              }
            />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <FeatureCard
              title={"User Friendly Interface"}
              description={
                "Ensure a smooth experience for both applicants and administrators."
              }
              imageURL={
                "https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fceb06c02c6c4487fbb435ef422e0d5fd"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plugin;
