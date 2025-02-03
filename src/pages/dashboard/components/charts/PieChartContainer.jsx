import React from 'react';
import { PieChart, Pie, Cell, Text, Customized } from 'recharts';
import { EllipsisVertical, Square, SquareDot } from 'lucide-react';
import { pieChartData as data } from '../../utils';

const PieChartContainer = () => {
  return (
    <div className="flex flex-col p-6 rounded-2xl shadow-md bg-white w-full h-72">
      <div className="flex justify-between">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[#464255]">Pie Chart</h2>
        </div>

        <div className="flex items-center justify-end gap-6 mb-6">
          <label className="flex items-center gap-2 text-gray-600">
            <Square size={18} className="text-gray-400" />
            <span>Chart</span>
          </label>
          <label className="flex items-center gap-2 text-gray-600">
            <SquareDot size={18} className="text-red-500" />
            <span>Show Value</span>
          </label>
          <EllipsisVertical className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-around">
        {data.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center  ">
            <PieChart width={150} height={150}>
              <Pie
                data={[{ value: item.value }, { value: 100 - item.value }]}
                innerRadius={32}
                outerRadius={60}
                dataKey="value"
                startAngle={0}
                endAngle={360}
                labelLine={false}
                label={({ cx, cy }) => (
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-lg font-semibold"
                    fill="#000"
                  >
                    {item.value}%
                  </text>
                )}
              >
                <Cell fill={item.color} />
                <Cell fill={item.empty} />
              </Pie>
              {/* <Text x={60} y={60} textAnchor="middle" dominantBaseline="middle" className="text-lg font-semibold">
                {10}%
              </Text> */}
            </PieChart>
            <div className="text-center mt-2">
              <p className="text-sm text-gray-500">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartContainer;
