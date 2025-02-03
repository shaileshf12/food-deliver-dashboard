import React from 'react';
import PieChartContainer from './PieChartContainer';
import ChartOrder from './ChartOrder';
import RevenueChart from './RevenueChart';
import CustomerMapChart from './CustomerMapChart';

export default function Charts() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="w-full sm:w-1/2 lg:flex-1">
          <PieChartContainer />
        </div>
        <div className="w-full sm:w-1/2 lg:flex-1">
          <ChartOrder />
        </div>
      </div>
      
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="w-full sm:w-3/5 lg:flex-1">
          <RevenueChart />
        </div>
        <div className="w-full sm:w-2/5 lg:flex-1">
          <CustomerMapChart />
        </div>
      </div>
    </>
  );
}
