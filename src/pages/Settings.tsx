import React from 'react';
import { Bell, Lock, User, Globe, Phone } from 'lucide-react';

export function Settings() {
  const sections = [
    {
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your account information',
      fields: [
        { label: 'Name', type: 'text', value: 'John Doe' },
        { label: 'Email', type: 'email', value: 'john.doe@example.com' },
        { label: 'Phone', type: 'tel', value: '+1 (555) 123-4567' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Configure your notification preferences',
      fields: [
        { label: 'Email Notifications', type: 'checkbox', value: true },
        { label: 'Push Notifications', type: 'checkbox', value: true },
        { label: 'SMS Notifications', type: 'checkbox', value: false }
      ]
    },
    {
      title: 'Security',
      icon: Lock,
      description: 'Manage your security settings',
      fields: [
        { label: 'Two-Factor Authentication', type: 'checkbox', value: true },
        { label: 'Change Password', type: 'button', action: 'Change' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <section.icon className="h-6 w-6 text-blue-600" />
                <div className="ml-3">
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{field.label}</label>
                  {field.type === 'checkbox' ? (
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        defaultChecked={field.value}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                  ) : field.type === 'button' ? (
                    <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md">
                      {field.action}
                    </button>
                  ) : (
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}