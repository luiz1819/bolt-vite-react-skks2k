import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MessageFunnel } from '../types/funnel';
import { FunnelCard } from '../components/funnel/FunnelCard';
import { FunnelImporter } from '../components/funnel/FunnelImporter';

export function Messages() {
  const [funnels, setFunnels] = useState<MessageFunnel[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleImport = (funnel: MessageFunnel) => {
    setFunnels(prev => [...prev, funnel]);
    setError(null);
  };

  const handleImportError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleToggleActive = (id: string) => {
    setFunnels(funnels.map(funnel => 
      funnel.id === id ? { ...funnel, active: !funnel.active } : funnel
    ));
  };

  const handleEdit = (id: string) => {
    // Navigate to funnel editor
    console.log('Edit funnel:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Message Funnels</h1>
          <p className="text-gray-600">Create and manage your automated message flows</p>
        </div>
        <div className="flex space-x-4">
          <FunnelImporter onImport={handleImport} onError={handleImportError} />
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            New Funnel
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funnels.map(funnel => (
          <FunnelCard
            key={funnel.id}
            funnel={funnel}
            onToggleActive={handleToggleActive}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}