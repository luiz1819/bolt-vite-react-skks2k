import React from 'react';
import { Users, UserPlus, Search } from 'lucide-react';

export function Contacts() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600">Manage your contact list</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <UserPlus size={20} className="mr-2" />
          Add Contact
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">Last contacted: 2 days ago</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}