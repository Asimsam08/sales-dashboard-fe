import { BarChartIcon } from '@/design-systems/Atoms/Icons';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'This week', Consultations: 15, OrdersClosed: 20 },
  { name: 'Last week', Consultations: 10, OrdersClosed: 18 },
];

const PastPeriodChart: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '455px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="flex items-center gap-2 px-6 mb-6">
        <BarChartIcon />
        <h2
          style={{
            fontSize: '12px',
            fontWeight: '600',
            margin: '0',
            color: '#667085',
          }}
        >
          VS PAST PERIOD
        </h2>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          barCategoryGap="15%"
          margin={{ left: -10, right: 0, top: 10, bottom: 10 }} // Adjusted left margin
        >
          {/* Grid with horizontal and vertical lines */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false} // Removes vertical grid lines
          />
          {/* XAxis with initial line removed */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false} // Removes the X-axis line
            tickLine={false} // Removes the tick lines on X-axis
          />
          {/* YAxis with initial line removed */}
          <YAxis
            axisLine={false} // Removes the Y-axis line
            tickLine={false} // Removes the tick lines on Y-axis
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          {/* Custom Legend for updated styling */}
    
          

          
          {/* Bars with rounded corners */}
          <Bar dataKey="Consultations" fill="#CCFBEF" radius={[8, 8, 0, 0]} />
          <Bar dataKey="OrdersClosed" fill="#134E48" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className='w-full h-[1px] bg-[#DCDFE4] my-2'></div>
      <div className='flex justify-center gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-1 bg-[#CCFBEF] rounded-[4px]'>

                    </div>
                    <p className='font-normal text-xs text-[#667085]'>Consultations</p>
                </div>


                <div className='flex items-center gap-2'>
                    <div className='w-4 h-1 bg-[#134E48] rounded-[4px]'>

                    </div>
                    <p className='font-normal text-xs text-[#667085]'>Orders closed</p>
                </div>



             </div>
    </div>
  );
};

export default PastPeriodChart;
