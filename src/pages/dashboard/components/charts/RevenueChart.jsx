import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { revenueChartData as data } from '../../utils';

function Card({ children, className = '' }) {
  return <div className={`bg-white shadow-lg rounded-xl p-4 ${className}`}>{children}</div>;
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-md text-sm">
        <p className="text-gray-700">{payload[0].payload.name}</p>
        <p className="text-blue-500">2020: ${payload[0].value.toLocaleString()}</p>
        <p className="text-red-500">2021: ${payload[1].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <Card className="shadow-lg rounded-xl h-96">
      <h2 className="text-2xl font-bold text-[#464255]">Total Revenue</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} minTickGap />
          <YAxis tickFormatter={value => `$${value / 1000}k`} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ top: -10, right: 10 }} />

          <Line type="monotone" dataKey="2020" strokeWidth={3} stroke="#2D9CDB" dot={false} />
          <Line type="monotone" dataKey="2021" strokeWidth={3} stroke="#FF5B5B" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
