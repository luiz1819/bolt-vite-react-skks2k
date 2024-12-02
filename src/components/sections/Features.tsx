import React from 'react';
import { PhoneCall, MessageCircle, BarChart, Users, Clock, Lock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <PhoneCall className="h-6 w-6 text-blue-600" />,
      title: 'Voice Integration',
      description: 'Seamless voice calls integration with your existing systems'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: 'Messaging Platform',
      description: 'Multi-channel messaging support for better engagement'
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: 'Analytics Dashboard',
      description: 'Detailed insights and reporting on all communications'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Team Collaboration',
      description: 'Built-in tools for team coordination and management'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Auto-Scheduling',
      description: 'Intelligent scheduling and reminder system'
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: 'Secure Communications',
      description: 'End-to-end encryption for all conversations'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your business communications effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}