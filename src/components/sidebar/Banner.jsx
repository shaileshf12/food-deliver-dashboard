import React from 'react';
import { Plus } from 'lucide-react';
import bannerImg from '../../assets/illustration.png';

const Card = () => {
  return (
    <div className="bg-[#00B074] rounded-2xl flex w-[260px] p-4 items-center gap-2">
      <div className="flex flex-col w-[60%] gap-1">
        <div className="text-white font-medium">Please, organize your menus through the button below!</div>
        <button className="bg-white rounded-lg font-medium p-2">
          <Plus className="w-5 h-5 inline-block mr-2" /> Add Menus
        </button>
      </div>
      <div>
        <img src={bannerImg} />
      </div>
    </div>
  );
};

export default Card;
