import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="flex justify-between items-center">
          {/* Ultra Minimal Logo - E shape with 5 dots */}
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-2 w-7 h-7">
              {/* Left column - 3 dots */}
              <div className="flex flex-col space-y-1.5">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              {/* Right column - 2 dots */}
              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Ultra Minimal Auth Buttons */}
          <div className="flex items-center space-x-6">
            <button className="px-6 py-2 text-gray-500 font-light tracking-wide hover:text-gray-700 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-black text-white font-light tracking-wide rounded-full hover:bg-gray-800 transition-colors border border-black hover:border-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;