import React from "react";

function FeatureCard({ title, description, imageURL }) {
  return (
    <div className="apply-card border-2 rounded-2xl border-[#FFFFFF10] p-4 md:p-9 h-full">
      <div className="flex flex-col h-full justify-between">
        <img className="w-44 mb-4 md:mb-8" src={imageURL} alt="" />
        <div>
          <h1 className="font-semibold text-lg md:text-2xl mb-2 md:mb-7 text-[#EEE5FF]">{title}</h1>
          <p className="font-outfit text-sm md:text-base text-[#EEE5FFBD]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
