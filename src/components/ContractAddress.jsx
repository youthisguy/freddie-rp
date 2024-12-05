import React from "react";

const ContractAddress = () => {
  return (
    <>
      <div className="pt-6">
        <img src="./hero.png" alt="hero" />
      </div>
      <div className="bg-[#EEB678] -mt-4 flex items-center flex-col justify-center">
        <button className="rounded-[30px] mt-8 border-2 text-black bg-white border-black px-6 py-3 shadow-md hover:bg-gray-100 transition">
          CA: DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
        </button>
        <span className="pt-32 text-left max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-5xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
          BackStory
        </span>
        <div />
      </div>
    </>
  );
};

export default ContractAddress;
