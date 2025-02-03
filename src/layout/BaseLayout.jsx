import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar';
import { Menu } from 'lucide-react';

export default function BaseLayout() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 p-6 bg-[#f3f2f7]">
        <Outlet />
      </div>
    </div>
  );
}
