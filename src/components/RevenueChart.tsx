import { motion } from 'motion/react';

function formatThousandNumber(
	price: string | number | null | undefined,
): string {
	if (typeof price === 'string') {
		return price;
	}
	if (Number.isNaN(price) || price === null || price === undefined)
		return Intl.NumberFormat('vi-VN').format(0);
	return new Intl.NumberFormat('vi-VN').format(price);
}

// Mock data for sales chart
const salesData = [
  { day: '10', sales: 12000000 },
  { day: '11', sales: 5000000 },
  { day: '12', sales: 8000000 },
  { day: '13', sales: 41249000 },
  { day: '14', sales: 15000000 },
  { day: '15', sales: 3000000 },
  { day: '16', sales: 18000000 },
];

const YAXIS_NUMBER = 5;

const RevenueChart = (): React.ReactNode => {
  const maxSales = Math.max(...salesData.map((item) => item.sales));

  const yAxisLabels = [];
  const maxYValue = Math.ceil(maxSales / 500000) * 500000;

  for (let i = 0; i <= YAXIS_NUMBER; i++) {
    const value = maxYValue - i * (maxYValue / YAXIS_NUMBER);
    yAxisLabels.push({
      value: Math.round(value / 1000000) * 1000000,
      position: i * (100 / YAXIS_NUMBER),
    });
  }

  return (
    <div className="mt-4 mb-8">
      {/* Chart container with y-axis */}
      <div className="flex h-72 relative">
        {/* Y-axis labels */}
        <div className="w-16 h-full flex flex-col justify-between pr-2">
          {yAxisLabels.map((label, i) => (
            <div
              key={`axis0y-${i + 1}`}
              className="text-md text-black/25 font-semibold text-left leading-1"
            >
              {label.value > 0
                ? `${formatThousandNumber(label.value)}đ`
                : ''}
            </div>
          ))}
        </div>

        {/* Chart area with grid lines and bars */}
        <div className="flex-1 relative">
          {/* Horizontal grid lines */}
          {yAxisLabels.map((label, i) => (
            <div
              key={`grid-${i + 1}`}
              className="absolute w-full border-t border-app-border border-dashed"
              style={{ top: `${label.position}%` }}
            />
          ))}

          {/* Bars container */}
          <div className="flex justify-between items-end h-full relative">
            {salesData.map((item, index) => {
              const height = (item.sales / maxYValue) * 100;
              return (
                <div
                  key={`bar-${index + 1}`}
                  className="flex h-full flex-col items-center"
                  style={{ width: '14%' }}
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-end group">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: index * 0.1,
                      }}
                      className={
                        'relative cursor-pointer w-[60%] rounded-xl rounded-b-none transition-colors duration-200 bg-bg-input group-hover:bg-primary'
                      }
                    >
                      <motion.div className="opacity-0 group-hover:opacity-100 animate-bounce w-3 h-3 left-1/2 transform -translate-x-1/2 top-[-6px] rounded-full absolute bg-primary border-2 border-white">
                        <div className="absolute transition-opacity left-1 -translate-x-1/2 bottom-4 bg-black text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 duration-200 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-2 after:h-2 after:bg-black after:rotate-45 after:-translate-x-1/2">
                          {formatThousandNumber(item.sales)}đ
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-[-32px] mt-2 text-black/25 font-semibold">
                    {item.day}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;