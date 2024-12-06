import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-[#F46023]">
      <div className="sm:pt-36 pt-8 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000] z-10">
        TOKENOMICS
      </div>
      <div className="pt-6 relative">
        <img
          src="./Tokenomics-FDV.png"
          alt="Tokenomics-FDV"
          className="w-[500px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-auto md:h-auto mx-auto object-cover transition-transform duration-300 ease-in-out"
        />
        <div className="hidden absolute inset-0 sm:flex flex-col items-center justify-center text-center sm:-mr-60 ml-16">
          <p className="chillax-text text-[#E45421] pb-3 sm:text-2xl break-all text-sm max-w-fit  text-wrap sm:-mt-44 -mt-2">
            TOKEN ADDRESS
          </p>
          <p className="chillax-text text-[#000] text-xs sm:text-base sm:max-full break-all max-w-[50%]">
            DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
          </p>
        </div>

        {/* total supply */}
        <div className="sm:flex absolute inset-0 flex-col items-center justify-center text-center mt-64 ml-44 max-w-fit">
          <p className="chillax-text text-[#E45421] pb-3 sm:text-2xl  w-full -mt-44 text-lg sm:w-full ">
            TOTAL SUPPLY
          </p>
          <p className="chillax-text text-[#000] text-sm sm:text-xl max-full">
            1,000,000,000 $FDV
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
