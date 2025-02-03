import React, { useState } from 'react';
import { Search, Bell, MessageSquareMore, Gift, Settings } from 'lucide-react';
import sofia from '../assets/sofia.png';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative w-2/3 bg-white rounded-lg border border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Search here"
          className="w-full pl-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none pr-10"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-10 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9.04-.478-1.957M20.392 9.828c.252-.252.53-.442.84-.577a48.086 48.086 0 00-1.342-4.807 48.197 48.197 0 00-2.748-3.986A59.921 59.921 0 005 9.828h15.392z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l-.346 9.04-.478-1.957M20.392 9.828c.252-.252.53-.442.84-.577a48.086 48.086 0 00-1.342-4.807 48.197 48.197 0 00-2.748-3.986A59.921 59.921 0 005 9.828h15.392z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className='flex items-center gap-4'>
        <div className="flex items-center space-x-8">
          <Bell className="w-6 h-6 text-[#2D9CDB] hover:text-gray-800 cursor-pointer " />
          <MessageSquareMore className="w-6 h-6 text-[#2D9CDB] hover:text-gray-800 cursor-pointer" />
          <Gift className="w-6 h-6 text-[#5E6C93] hover:text-gray-800 cursor-pointer" />
          <Settings className="w-6 h-6 text-[#FF5B5B] hover:text-gray-800 cursor-pointer" />
        </div>
        <div className="border-r-2 border-gray-300 h-12"></div>
        <div className="flex items-center gap-2 mr-0">
          <span className="text-base">Hello, Samantha</span>
          <img src={sofia} alt="Samantha" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
