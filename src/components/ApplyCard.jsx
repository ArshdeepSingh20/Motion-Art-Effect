import React from "react";

function ApplyCard({ title, description, imgURL }) {
  return (
    <div className="apply-card border-2 rounded-2xl border-[#FFFFFF10] p-8">
      <h2 className="text-[#EEE5FF] text-2xl font-semibold mb-5 font-sora">
        {title}
      </h2>
      <p className="text-[#EEE5FFBD] font-outfit mb-5">{description}</p>
      <img src={imgURL} alt="card" />
    </div>
  );
}

export default ApplyCard;
