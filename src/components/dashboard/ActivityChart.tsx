import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', calls: 4000, messages: 2400 },
  { name: 'Tue', calls: 3000, messages: 1398 },
  { name: 'Wed', calls: 2000, messages: 9800 },
  { name: 'Thu', calls: 2780, messages: 3908 },
  { name: 'Fri', calls: 1890, messages: 4800 },
  { name: 'Sat', calls: 2390, messages: 3800 },
  { name: 'Sun', calls: 3490, messages: 4300 },
];

export function ActivityChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="calls" stackId="1" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.1} />
            <Area type="monotone" dataKey="messages" stackId="1" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}