import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChevronDown, MoreVertical } from 'lucide-react';
import { customerMapData as data } from '../../utils';
import Button from '../../../../components/Button';

function Card({ children, className = '' }) {
  return <div className={`bg-white shadow-lg rounded-xl p-4 ${className}`}>{children}</div>;
}

export default function CustomerMapChart() {
  return (
    <Card className="shadow-lg rounded-xl h-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#464255]">Customer Map</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            Weekly <ChevronDown size={16} />
          </Button>
          <MoreVertical size={20} className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <CartesianGrid vertical={false} />
          <Bar
            dataKey="value1"
            barSize={10}
            shape={props => {
              const { x, y, width, height, index } = props;
              const color = index % 2 === 0 ? '#FF5B5B' : '#F7C604';
              return <rect x={x} y={y} width={width} height={height} fill={color} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
