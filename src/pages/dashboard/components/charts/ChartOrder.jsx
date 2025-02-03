import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDownToLine } from 'lucide-react';
import { chartOrderData as data } from '../../utils';
import Button from '../../../../components/Button';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-md text-gray-800">
        <p className="font-semibold">{`${payload[0].value} Order`}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    );
  }
  return null;
};

const ChartOrderArea = () => {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white w-full h-72">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-2xl font-bold text-[#464255]">Chart Order</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-[#2D9CDB] border-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white transition">
          <ArrowDownToLine />
          Save Report
        </button>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
            interval={0}
            padding={{ left: 20, right: 20 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#D1D5DB', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#2D9CDB"
            strokeWidth={3}
            fill="rgba(45, 156, 219, 0.3)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOrderArea;
