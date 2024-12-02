import React from 'react';
import { ArrowRight, MessageSquare, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business Communication
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your customer interactions with our powerful voice and messaging platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center justify-center border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition">
              Schedule Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Unified Messaging</h3>
              <p className="text-gray-600 text-center">All your communications in one place</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Zap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Setup</h3>
              <p className="text-gray-600 text-center">Get started in minutes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-center">Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}