import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      features: [
        'Up to 1,000 messages/month',
        'Basic voice integration',
        'Email support',
        'Basic analytics',
        '1 team member'
      ]
    },
    {
      name: 'Professional',
      price: '99',
      popular: true,
      features: [
        'Up to 10,000 messages/month',
        'Advanced voice integration',
        'Priority support',
        'Advanced analytics',
        'Up to 10 team members',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited messages',
        'Full voice suite',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Unlimited team members',
        'Custom development'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-md font-semibold ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}