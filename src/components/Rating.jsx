import React from "react";
import { GoArrowRight } from "react-icons/go";

function RatingItem({ imageSrc, score, reviews }) {
  return (
    <div className="w-full sm:w-1/3 h-24 sm:h-auto">
      <div className="flex">
        <img src={imageSrc} alt="" className="mr-3" />
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Ff546035eb51345459645d3160b7b9ded"
            alt=""
          />
          <p className="text-[#EEE5FFBD] font-sora mt-3">
            <strong>{score}</strong> Score, {reviews} Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

function Rating() {
  return (
    <div className="mt-12">
      <div className="flex justify-center py-12">
        <h2 className="text-[#EEE5FF] font-outfit text-2xl text-center md:text-start">
          Trusted by thousands of users around the world
        </h2>
      </div>

      <div className="flex flex-wrap py-12">
        <RatingItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2F9de8cff24c294e888c26c068142af290"
          score={4.5}
          reviews={9}
        />
        <RatingItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fbef90be619af41758a4731caff818a0a"
          score={4.5}
          reviews={9}
        />
        <RatingItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2F6eca8cfdb640416daeb6dfdb59a38708"
          score={4.5}
          reviews={9}
        />
      </div>

      <div className="flex flex-wrap py-12">
        <div className="w-full md:w-2/3 p-4 flex items-center md:items-start justify-center flex-col">
          <h2 className="text-[#EEE5FF] md:text-[40px] text-2xl font-semibold leading-snug text-center md:text-start">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h2>
          <p className="text-[#EEE5FFBD] py-6 md:text-lg text-sm text-center md:text-start">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <button className="purchase-button text-white md:text-xl text-sm py-3 px-10 rounded-xl flex items-center font-sora">
            <p className="mr-5">Purchase From Envato </p>
            <GoArrowRight />
          </button>
        </div>

        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            className="md:float-right"
            src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fa323c4fb2b014795b27106782e7e2086"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Rating;
