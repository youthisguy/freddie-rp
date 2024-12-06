import React from "react";

const ContractAddress = () => {
  return (
    <>
      <div className="pt-6">
        <img src="./hero.png" alt="hero" />
      </div>
      <div className="bg-[#EEB678] -mt-4 flex items-center flex-col justify-center">
        <button className="rounded-[30px] mt-8 border-2 text-black bg-white border-black px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:bg-gray-100 transition text-sm sm:text-base md:text-xl break-all max-w-[90%] sm:max-w-none cursor-copy">
          CA: DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
        </button>
        <span className="pt-32 text-left max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">BACKSTORY</span>
        <div />
      </div>
    </>
  );
};

export default ContractAddress;
