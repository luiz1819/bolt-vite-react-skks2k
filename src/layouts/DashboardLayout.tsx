import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <DashboardHeader />
      <main className="ml-64 pt-16">
        <Outlet />
      </main>
    </div>
  );
}