import React from "react";

const Socials = () => {
  return (
    <div className="dual-bg bg-cover bg-center">
      {" "}
      <div className="sm:pt-36 pt-11 text-center max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
        OUR SOCIALS
      </div>
      <div className="flex justify-center items-center gap-6 mt-8">
    <a
      href="https://x.com/FDVonsol"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 hover:rotate-3"
    >
      <img src="./twitter.png" alt="Twitter" className="w-16 h-16" loading="lazy"/>
    </a>
    <a
      href="https://t.me/FDVonsol"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110 hover:-rotate-3"
    >
      <img src="./tg.png" alt="Telegram" className="w-16 h-16" loading="lazy"/>
    </a>
  </div>
      <img src="./SOCIALS.png" alt="Background" loading="lazy"/>
    </div>
  );
};

export default Socials;
