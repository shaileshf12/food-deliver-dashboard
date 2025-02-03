import { ArrowUp, ArrowDown } from 'lucide-react';
import { ordersData } from '../utils';

const TotalOrdersCard = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-8">
      {ordersData.map((order, i) => {
        return (
          <div className="flex flex-1 min-w-[250px] max-w-[400px] items-center justify-center gap-4 p-4 pt-8 pb-8 rounded-xl shadow-md bg-white">
            <img src={order.img} alt={order.label} className="w-16 h-16" />
            <div>
              <h2 className="text-4xl font-bold text-gray-800">
                {order.isRevenue ? `$${order.count}` : order.count}
              </h2>
              <p className="text-sm text-gray-500">{order.label}</p>
              <div className="flex items-center gap-1 text-xs mt-1">
                {order.isIncreased ? (
                  <span className="text-green-600">
                    <ArrowUp />
                  </span>
                ) : (
                  <span className="text-red-600">
                    <ArrowDown />
                  </span>
                )}
                <span>{`${order.percentage}%`} (30 days)</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TotalOrdersCard;
