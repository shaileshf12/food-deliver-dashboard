import React from 'react';
import PieChartContainer from './PieChartContainer';
import ChartOrder from './ChartOrder';
import RevenueChart from './RevenueChart';
import CustomerMapChart from './CustomerMapChart';

export default function Charts() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-start gap-6">
        <div className="flex-1">
          <PieChartContainer />
        </div>
        <div className="flex-1">
          <ChartOrder />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-6">
        <div className="w-3/5">
          <RevenueChart />
        </div>
        <div className="flex-1">
          <CustomerMapChart />
        </div>
      </div>
    </>
  );
}
