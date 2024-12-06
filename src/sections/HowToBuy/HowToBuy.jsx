import React from "react";

const HowToBuy = () => {
  return (
    <div className="bg-[#275CFE] bg-custom-blue bg-opacity-0 sm:mt-56 mt-16 relative">
      <h1 className="sm:pb-32 pb-14 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
        HOW TO BUY
      </h1>



      <div className="flex flex-row relative mx-auto flex-wrap items-center justify-center">
        <div className="relative mx-4 sm:pb-0 pb-5 mt-4">
        <img 
      src="how-to-buy2.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl hero-h1 mb-6 text-[#F0B011]">01</h1>
      <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl max-w-48 mt-38">
        Create a Wallet
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
        Download Phantom or your wallet of choice
      </p>
    </div>
        </div>
  
        <div className="relative sm:pb-0 pb-5  mx-4">
        <img 
      src="how-to-buy2.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl hero-h1 mb-6 text-[#F46023]">02</h1>
      <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl max-w-48 mt-38">
        Get Some SOL
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
      To buy $FDV, you'll need SOL. Get SOL via the Phantom app or deposit it from your crypto exchange.
      </p>
    </div>
        </div>

        <div className="relative sm:pb-0 pb-5 mx-4 mb-4">
        <img 
      src="how-to-buy2.png" 
      alt="how-to-buy" 
      className="h-auto w-80 mx-auto"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl hero-h1 mb-6 text-[#275CFE]">03</h1>
      <p className="chillax-text text-[#E45421] pb-5 text-2xl sm:text-2xl first-letter:max-w-48 mt-38">
        Buy $FDV
      </p>
      <p className="chillax-text text-[#000] text-lg sm:text-xl max-w-48">
      Connect your wallet, enter the CA, and swap SOL for your first bag of $FDV.
      </p>
    </div>
        </div>
  
    </div>
    <div className="sm:-mt-[34rem]">
      <img src="Rainbow-FDV3.png" alt="Rainbow-FDV2" className="w-[1000px] h-[500px] sm:w-[500px] sm:h-[350px] md:w-auto md:h-auto mx-auto object-cover transition-transform duration-300 ease-in-out"/>
    </div>
  </div>
  );
};

export default HowToBuy;
