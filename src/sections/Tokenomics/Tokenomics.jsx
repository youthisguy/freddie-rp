import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-[#F46023] -mt-[35px] sm:-mt-[60px]">
      <div className="sm:pt-36 pt-16 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000] z-10">
        TOKENOMICS
      </div>
      <div className="pt-3 relative">
        <img
          src="./Tokenomics-FDV.png"
          alt="Tokenomics-FDV"
          className="w-[500px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-auto md:h-auto mx-auto object-cover transition-transform duration-300 ease-in-out"
          loading="lazy"
        />
        {/* token address */}
        <div className="border-t-amber-500 w-auto justify-center text-center sm:-mt-[20rem] sm:-mr-70 absolute sm:ml-[39rem] ml-[10.5rem] ">

        
        <div className="hidden sm:flex flex-col items-center justify-center text-center">
          <p className="chillax-text text-[#E45421] pb-3 sm:text-2xl text-sm text-nowrap sm:-mt-44 -mt-2">
            TOKEN ADDRESS
          </p>
          <p className="chillax-text text-[#000] text-xs sm:text-base">
            DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
          </p>
        </div>

        {/* total supply */}
        <div className="sm:flex flex-col items-center justify-center text-center mt-[20px]">
          <p className="chillax-text text-[#E45421] pb-3 sm:text-2xl text-nowrap w-full mt-[10px] text-lg sm:w-full ">
            TOTAL SUPPLY
          </p>
          <p className="chillax-text text-[#000] text-sm sm:text-xl text-nowrap">
            1,000,000,000 $FDV
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
