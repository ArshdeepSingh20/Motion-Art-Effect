import React from "react";
import ApplyCard from "./ApplyCard";

function SectionSample() {
  return (
    <div>
      <div className="flex items-center justify-center p-14">
        <h2 className="text-[#EEE5FF] md:text-[40px] text-xl font-semibold text-center leading-snug max-w-xl">
          Apply On Any Section Or Enable For Whole Page
        </h2>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2  p-4">
          <div>
            <ApplyCard
              title={"Apply On Section"}
              description={
                "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
              }
              imgURL={
                "https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2F8e5d1c9acfd14ef7afdd1d4266403075"
              }
            />
          </div>
        </div>
        <div class="w-full md:w-1/2  p-4 mt-24">
          <ApplyCard
            title={"Apply On Page"}
            description={
              "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
            }
            imgURL={
              "https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fc56bf5b914e84082a7af29acb014c72c"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SectionSample;
