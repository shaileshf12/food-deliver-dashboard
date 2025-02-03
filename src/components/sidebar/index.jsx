import React from 'react';
import { Link, useLocation } from 'react-router';
import {
  House,
  AlignLeft,
  File,
  Users,
  ChartColumn,
  Pencil,
  Coffee,
  FolderPen,
  User,
  CalendarFold,
  MessageSquareMore,
  Wallet,
} from 'lucide-react';
import Banner from './Banner';

export default function Sidebar() {
  const location = useLocation();

  const sidebarItems = [
    { path: 'dashboard', label: 'Dashboard', icon: House },
    { path: 'order-list', label: 'Order List', icon: AlignLeft },
    { path: 'order-details', label: 'Order Details', icon: File },
    { path: 'customer', label: 'Customer', icon: Users },
    { path: 'analytics', label: 'Analytics', icon: ChartColumn },
    { path: 'reviews', label: 'Reviews', icon: Pencil },
    { path: 'foods', label: 'Foods', icon: Coffee },
    { path: 'food-details', label: 'Food Details', icon: FolderPen },
    { path: 'customer-details', label: 'Customer Details', icon: User },
    { path: 'calendar', label: 'Calendar', icon: CalendarFold },
    { path: 'chat', label: 'Chat', icon: MessageSquareMore },
    { path: 'chat-wallet', label: 'Chat Wallet', icon: Wallet },
  ];

  return (
    <div className=" bg-white text-black p-8 flex flex-col gap-18">
      <div className="">
        <div className="text-5xl font-semibold relative">
          <span className="font-[Poppins]">Sedap</span>
          <div className="w-2 h-2 rounded-full bg-[#00B074] absolute left-32 bottom-1.5"></div>
        </div>
        <div className="text-[#B9BBBD] text-lg font-medium">Modern Admin Dashboard</div>
      </div>
      <div className="flex flex-col space-y-2">
        {sidebarItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname.includes(path);

          return (
            <Link
              key={path}
              to={path}
              className={`w-[250px] flex items-center gap-3 p-3 rounded-md transition-colors 
                ${isActive ? 'bg-[#00B07426] text-[#00B074]' : 'hover:bg-gray-400'}`}
              aria-label={label}
            >
              <Icon size={18} />
              <span className={`text-lg ${isActive ? 'font-bold' : 'text-[#464255]'}`}>{label}</span>
            </Link>
          );
        })}
      </div>
      <Banner />
      <div className="flex flex-col gap-6">
        <div>
          <div className="text-[13px] text-[#969BA0] font-bold">Sedap Restaurant Admin Dashboard</div>
          <div className="text-xs text-[#969BA0]">© 2020 All Rights Reserved</div>
        </div>

        <div className="text-[14px] text-[#969BA0]">Made with ❤️ by Peterdraw</div>
      </div>
    </div>
  );
}
