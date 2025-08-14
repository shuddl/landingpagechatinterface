import React from 'react';

const ScrollingBanner: React.FC = () => {
  const bannerText = "ESTAIT IS A REAL ESTATE AI ASSISTANT DESIGNED TO HELP AGENTS ANALYZE MARKETS, FIND PROPERTIES, CREATE MARKETING MATERIALS, AND IDENTIFY INVESTMENT OPPORTUNITIES.";
  
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-green-500 py-2 overflow-hidden z-40">
      <div className="bottom-scrolling-text whitespace-nowrap">
        <span className="text-white font-medium text-sm tracking-widest">
          {bannerText} • {bannerText} • {bannerText}
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;