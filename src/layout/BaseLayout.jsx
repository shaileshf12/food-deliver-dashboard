import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar';
import { Menu } from 'lucide-react';

export default function BaseLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      <div className={`${isCollapsed ? 'w-16' : 'w-[345px]'} text-white transition-all duration-300 flex flex-col`}>
        <button
          className="p-2 text-gray-500 flex items-center justify-center hover:cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu size={24} />
        </button>

        {!isCollapsed && <Sidebar isCollapsed={isCollapsed} />}
      </div>

      <div className="flex-1 p-6 bg-[#f3f2f7]">
        <Outlet />
      </div>
    </div>
  );
}
