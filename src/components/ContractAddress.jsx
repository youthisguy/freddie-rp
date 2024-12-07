import React, { useState } from 'react';

const ContractAddress = () => {
  const [copyStatus, setCopyStatus] = useState('');
  const contractAddress = 'DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopyStatus('Copied to Clipboard!');
      setTimeout(() => setCopyStatus(''), 2000); // Reset after 2 seconds
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <>
      <div className="pt-12">
        <img src="./hero.png" alt="hero" loading="lazy"/>
      </div>
      <div className="bg-[#EEB678] -mb-[4px] -mt-4 flex items-center flex-col justify-center">
        <div className="relative">
          <button
            onClick={handleCopy}
            className="rounded-[35px] mt-8 border-[3px] text-black bg-white border-black px-5 sm:px-7 py-3 sm:py-4 shadow-md hover:bg-gray-100 transition text-sm sm:text-5xl md:text-4xl break-all max-w-[90%] font-bold sm:max-w-none cursor-pointer"
          >
            CA: {contractAddress}
          </button>
          {copyStatus && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded-md text-sm">
              {copyStatus}
            </div>
          )}
        </div>
        <span className="pt-14 text-left max-w-prose leading-relaxed sm:leading-relaxed mx-auto hero-h1 text-white text-4xl font-bold sm:text-5xl [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
          BACKSTORY
        </span>
        <div />
      </div>
    </>
  );
};

export default ContractAddress;