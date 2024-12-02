import React from 'react';
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';

export function Calls() {
  const stats = [
    {
      title: 'Total Calls',
      value: '1,284',
      change: '+8.2%',
      isPositive: true,
      icon: Phone
    },
    {
      title: 'Incoming Calls',
      value: '856',
      change: '+12.5%',
      isPositive: true,
      icon: PhoneIncoming
    },
    {
      title: 'Outgoing Calls',
      value: '428',
      change: '+5.8%',
      isPositive: true,
      icon: PhoneOutgoing
    },
    {
      title: 'Missed Calls',
      value: '32',
      change: '-2.1%',
      isPositive: true,
      icon: PhoneMissed
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Calls</h1>
        <p className="text-gray-600">Manage and monitor your call activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Calls</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-full">
                  <PhoneIncoming className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">Duration: 5:23</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}