import React from "react";

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between py-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fa3527f456f1248c289a08e2da8733d47"
        alt="motion-art"
        className="cursor-pointer w-48 md:w-60"
      />
      <button className="hidden md:block bg-[#FFFFFF] cursor-pointer text-[#0D051F] border-2 border-[#FFFFFF] py-3 px-9 rounded-md font-outfit hover:bg-transparent hover:text-[#FFFFFF]">
        Purchase Now
      </button>
    </div>
  );
}

export default Header;
