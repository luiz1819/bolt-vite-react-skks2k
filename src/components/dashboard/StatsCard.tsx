import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, isPositive, icon: Icon }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
          <Icon className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
}