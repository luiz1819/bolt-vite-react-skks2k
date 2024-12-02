import React from 'react';
import { Phone, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Phone className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ZapVoice</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>

          <div className="flex items-center">
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}