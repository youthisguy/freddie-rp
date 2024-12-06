import React from "react";
import "@fontsource/knewave";
import "@fontsource/knewave/400.css";

const Hero = () => {
  // Scroll handler function
  const handleScroll = () => {
    window.scrollBy({
      top: 900, 
      behavior: "smooth",
    });
  };
  return (
    <div className="relative sm:mx-auto sm:pt-5 mx-6 max-w-screen-lg sm:max-w-screen-md">
      <h1 className="text-left max-w-prose leading-relaxed mt-10 sm:leading-relaxed mx-auto hero-h1 text-[#F46023] text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#fff,_2px_-2px_0_#fff,_-2px_2px_0_#fff,_2px_2px_0_#fff]">
        <span className="text-5xl sm:text-6xl">Hi!</span> I'm Freddie Da Vinci
      </h1>
      <h4 className="chillax-text text-left text-base font-semibold sm:text-lg md:text-xl max-w-prose leading-relaxed sm:leading-relaxed mx-auto pt-6 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
        but my friends call me FDV for short. <br />
        <span className="chillax-text block mt-4">
          You've seen coins with sky-high fully diluted valuations, where VCs and
          early investors hold all the power, dumping on everyone else.{" "}
          <span className="chillax-text block mt-4">
            FDV is different. I'm 100% non-VC-backed, and my mission is simple:
            start a paradigm shift that changes the game on how crypto has gone
            since the start.
          </span>
          <span className="chillax-text block mt-4">
            Every coin has a FDV. We are all FDV.
          </span>
        </span>
      </h4>
      <button
        onClick={handleScroll}
        className="absolute rounded-[30px] -ml-4 mt-10 mb-2 hero-h1 text-[#F46023] left-4 bg-white border-[3px] border-black px-8 py-2 shadow-md hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner transition-all duration-300 ease-in-out"
      >
        Learn More
      </button>
    </div>
  );
};

export default Hero;
