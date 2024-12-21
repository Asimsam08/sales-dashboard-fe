// components/InsightsChart.tsx
import { ConsultationIcon } from '@/design-systems/Atoms/Icons';
import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', Incoming: 30, Answered: 25, ExpertsOnline: 10 },
  { name: 'Tue', Incoming: 50, Answered: 20, ExpertsOnline: 12 },
  { name: 'Wed', Incoming: 40, Answered: 35, ExpertsOnline: 15 },
  { name: 'Thu', Incoming: 60, Answered: 30, ExpertsOnline: 20 },
  { name: 'Fri', Incoming: 50, Answered: 45, ExpertsOnline: 25 },
  { name: 'Sat', Incoming: 70, Answered: 40, ExpertsOnline: 30 },
  { name: 'Sun', Incoming: 60, Answered: 50, ExpertsOnline: 35 },
];

const InsightsChart: React.FC = () => {
  return (
    <div
      style={{
        width: '684',
        height: 455,
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
       <div className="flex items-center gap-2 px-6 mb-6">
              <ConsultationIcon />
              <h2
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  margin: '0',
                  color: '#667085',
                }}
              >
              CONSULTATIONS
              </h2>
            </div>
      <ResponsiveContainer width="100%" height="80%">
        <ComposedChart data={data}>
          {/* Grid with only horizontal lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* XAxis without axis line and tick line */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {/* YAxis without axis line and tick line */}
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
       
          {/* Bar for Experts Online */}
          <Bar dataKey="ExpertsOnline" barSize={20} fill="#FFE29A" radius={[4, 4, 0, 0]} />
          {/* Dashed Line for Incoming */}
          <Line
            type="monotone"
            dataKey="Incoming"
            stroke="#8A94A6"
            strokeWidth={2}
            strokeDasharray="4 4" 
            dot={false}
          />
   
          <Line
            type="monotone"
            dataKey="Answered"
            stroke="#15B79F"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
                <div className='w-full h-[1px] bg-[#DCDFE4] my-2'></div>

      <div className='flex justify-start gap-6 mt-1'>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-1 bg-[#8A94A6] rounded-[4px]'>

                    </div>
                    <p className='font-normal text-xs text-[#667085]'>Incoming</p>
                </div>


                <div className='flex items-center gap-2'>
                    <div className='w-4 h-1 bg-[#15B79F] rounded-[4px]'>

                    </div>
                    <p className='font-normal text-xs text-[#667085]'>Answered</p>
                </div>


                <div className='flex items-center gap-2'>
                    <div className='w-4 h-1 bg-[#FFE587] rounded-[4px]'>

                    </div>
                    <p className='font-normal text-xs text-[#667085]'>Experts online</p>
                </div>




             </div>
    </div>
  );
};

export default InsightsChart;
