import React, { useState } from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-[32px] font-semibold text-[#464255]">Dashboard</h2>
        <p className="text-lg text-[#A3A3A3] font-medium mt-1">Hi, Samantha. Welcome back to Sedap Admin!</p>
      </div>

      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition duration-300 focus:outline-none"
        >
          <CalendarDays className="w-5 h-5 text-[#2D9CDB] mr-2" />
          <span className="text-sm text-gray-800 flex flex-col items-start">
            <div>Filter Periode</div>
            <div className="text-[10px]">17 Apr 2020 - 21 May 2020</div>
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
