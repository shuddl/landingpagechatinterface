import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Send } from 'lucide-react';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const realEstateSuggestions = [
    "Properties",
    "Analytics", 
    "Marketing",
    "Investments",
    "Valuations"
  ];

  const placeholderQuestions = [
    "What are the best neighborhoods for first-time buyers?",
    "Show me market trends for downtown condos",
    "Create a listing description for a 3BR house",
    "Find properties with 8%+ cap rates",
    "What's the average price per sqft in this area?",
    "Generate a buyer persona for luxury homes",
    "Compare rental yields in different districts",
    "Draft a follow-up email for potential clients",
    "What are the upcoming zoning changes?",
    "Create a property investment analysis report",
    "Find off-market opportunities in my budget",
    "What's driving price increases in this market?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => 
        (prevIndex + 1) % placeholderQuestions.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [placeholderQuestions.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 pt-32 pb-16">
      <div className="w-full max-w-6xl mx-auto space-y-32">
        {/* Welcome Message */}
        <div className="text-center space-y-16">
          <div className="inline-block border border-gray-100 rounded-full px-12 py-6">
            <p className="text-gray-600 text-xl font-light tracking-wide">How can I help you today?</p>
          </div>
          
          {/* E Logo Avatar - Same as Header */}
          <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mx-auto">
            <div className="grid grid-cols-2 gap-1.5 w-6 h-6">
              {/* Left column - 3 dots */}
              <div className="flex flex-col space-y-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
              {/* Right column - 2 dots */}
              <div className="flex flex-col justify-between h-full">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Minimal Search Interface */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative border border-gray-100 rounded-full px-8 py-6 bg-white/50 backdrop-blur-sm">
              <div className="flex items-center space-x-8">
                {/* Minimal Speed Indicator */}
                <button
                  type="button"
                  className="flex items-center space-x-3 text-gray-400 hover:text-gray-600 transition-colors group"
                >
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"></div>
                  </div>
                  <span className="text-sm font-light tracking-wide">Speed</span>
                  <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-60 transition-opacity" />
                </button>

                {/* Ultra Clean Input */}
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={placeholderQuestions[placeholderIndex]}
                  className="flex-1 bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none text-lg font-light tracking-wide border-none"
                />

                {/* Minimal Search Button */}
                <button
                  type="submit"
                  className="flex items-center space-x-3 border border-gray-200 text-gray-600 px-6 py-3 rounded-full font-light hover:border-gray-300 hover:text-gray-700 transition-all duration-300"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span className="text-sm tracking-wide">Search</span>
                </button>

                {/* All Black Send Button */}
                <button
                  type="button"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </form>

          {/* Ultra Minimal Bottom Buttons */}
          <div className="flex justify-center space-x-6 mt-12">
            {realEstateSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="minimal-pill-button stagger-animation group"
              >
                <span className="text-gray-500 font-light text-sm tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                  {suggestion}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;