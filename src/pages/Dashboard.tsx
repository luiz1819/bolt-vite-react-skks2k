import React from 'react';
import { MessageSquare, Phone, Users, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ActivityChart } from '../components/dashboard/ActivityChart';

export function Dashboard() {
  const stats = [
    {
      title: 'Total Calls',
      value: '2,543',
      change: '+12.5%',
      isPositive: true,
      icon: Phone
    },
    {
      title: 'Messages Sent',
      value: '15,672',
      change: '+25.2%',
      isPositive: true,
      icon: MessageSquare
    },
    {
      title: 'Active Users',
      value: '573',
      change: '+8.1%',
      isPositive: true,
      icon: Users
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-2.1%',
      isPositive: false,
      icon: TrendingUp
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          {/* Add recent activity content here */}
        </div>
      </div>
    </div>
  );
}