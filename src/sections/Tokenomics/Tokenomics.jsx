import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-[#F46023]">
      <div className="sm:pt-36 pt-11 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
        TOKENOMICS
      </div>
      <div className="pt-6 relative">
        <img src="./Tokenomics-FDV.png" alt="Tokenomics-FDV" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mr-60">
          <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl w-full -mt-44">
            TOKEN ADDRESS
          </p>
          <p className="chillax-text text-[#000] text-lg sm:text-xl max-full">
            DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
          </p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mr-60">
          <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl w-full -mt-44">
            TOKEN ADDRESS
          </p>
          <p className="chillax-text text-[#000] text-lg sm:text-xl max-full">
            DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump
          </p>
        </div>

        {/* total supply */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-64 -mr-60">
          <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl w-full -mt-44">
            TOTAL SUPPLY
          </p>
          <p className="chillax-text text-[#000] text-lg sm:text-xl max-full">
            1,000,000,000 $FDV
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
