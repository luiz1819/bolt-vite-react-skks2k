import React from 'react';
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', messages: 4000, calls: 2400, amt: 2400 },
  { name: 'Feb', messages: 3000, calls: 1398, amt: 2210 },
  { name: 'Mar', messages: 2000, calls: 9800, amt: 2290 },
  { name: 'Apr', messages: 2780, calls: 3908, amt: 2000 },
  { name: 'May', messages: 1890, calls: 4800, amt: 2181 },
  { name: 'Jun', messages: 2390, calls: 3800, amt: 2500 },
];

export function Analytics() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your communication metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Message Volume</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="messages" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="calls" fill="#0EA5E9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Average Response Time</p>
            <p className="text-2xl font-semibold text-gray-900">2.5 min</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Message Success Rate</p>
            <p className="text-2xl font-semibold text-gray-900">98.5%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Active Conversations</p>
            <p className="text-2xl font-semibold text-gray-900">1,234</p>
          </div>
        </div>
      </div>
    </div>
  );
}