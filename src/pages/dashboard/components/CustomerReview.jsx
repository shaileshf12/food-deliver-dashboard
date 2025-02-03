import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviews } from '../utils';

const Card = ({ name, date, review, rating, image, foodImage }) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg p-6 overflow-visible"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 w-5xs">
        <div className="flex items-center gap-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-2 w-[70%]">{review}</p>
        <div className="flex items-center mt-2 gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill={index < rating ? '#FACC15' : '#D1D5DB'}
            />
          ))}
          <span className="text-gray-700 text-lg font-semibold ml-2">{rating}</span>
        </div>
      </div>
      <img
        src={foodImage}
        alt="Food"
        className="absolute right-[-20%] top-1/2 transform -translate-y-1/2 w-40 h-40 object-cover rounded-full shadow-md z-10"
      />
    </motion.div>
  );
};

const CustomerReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalReviews = reviews.length;

  const nextReviews = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % totalReviews);
  };

  const prevReviews = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + totalReviews) % totalReviews);
  };

  return (
    <div>
      <div className="flex justify-between mt-1 mb-5">
        <div>
          <h2 className="text-[32px] font-semibold text-[#464255]">Customer Review</h2>
          <p className="text-lg font-medium text-[#A3A3A3]">Enum fuga consequuntur utadsjn et.</p>
        </div>
        <div>
          <button
            className="bg-white shadow-lg rounded-xl p-4 text-[#00B074] mr-3 hover:cursor-pointer"
            onClick={prevReviews}
          >
            <ChevronLeft />
          </button>
          <button
            className="bg-white shadow-lg rounded-xl p-4 text-[#00B074] hover:cursor-pointer"
            onClick={nextReviews}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-24 overflow-hidden">
        {[...Array(3)].map((_, i) => {
          const reviewIndex = (startIndex + i) % totalReviews;
          return <Card key={reviews[reviewIndex].id} {...reviews[reviewIndex]} />;
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
