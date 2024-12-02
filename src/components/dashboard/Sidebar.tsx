import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Phone, 
  Users, 
  Settings, 
  BarChart,
  LogOut 
} from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/messages' },
    { icon: <Phone size={20} />, label: 'Calls', path: '/calls' },
    { icon: <Users size={20} />, label: 'Contacts', path: '/contacts' },
    { icon: <BarChart size={20} />, label: 'Analytics', path: '/analytics' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 fixed left-0 top-0">
      <div className="flex items-center p-4 border-b border-gray-200">
        <Phone className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">ZapVoice</span>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
}