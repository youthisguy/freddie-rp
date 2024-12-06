import React from "react";

const HowToBuy = () => {
  return (
    <div className="bg-[#275CFE] sm:mt-56 mt-16 relative">
      <h1 className="sm:pb-32 pb-14 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
        HOW TO BUY
      </h1>



      <div className="flex flex-row relative mx-auto flex-wrap items-center justify-center">
        <div className="relative mx-4 sm:pb-0 pb-5 mt-4">
        <img 
      src="how-to-buy.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="chillax-text text-[#E45421] text-lg sm:text-2xl max-w-48 mt-38">
        Create a Wallet
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
        Download Phantom or your wallet of choice
      </p>
    </div>
        </div>
  
        <div className="relative sm:pb-0 pb-5  mx-4">
        <img 
      src="how-to-buy.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="chillax-text text-[#E45421] text-lg sm:text-2xl max-w-48 mt-38">
        Get Some SOL
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
      You will need some SOL to buy $FDV.
      </p>
    </div>
        </div>

        <div className="relative sm:pb-0 pb-5 mx-4 mb-4">
        <img 
      src="how-to-buy.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="chillax-text text-[#E45421] text-lg sm:text-2xl max-w-48 mt-38">
        Buy $FDV
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
      Connect your wallet and swap some SOL for your first bag of $FDV.
      </p>
    </div>
        </div>
  
    </div>
    <div className="sm:-mt-[34rem]">
      <img src="Rainbow-FDV.png" alt="Rainbow-FDV"/>
    </div>
  </div>
  );
};

export default HowToBuy;
