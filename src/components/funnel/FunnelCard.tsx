import React from 'react';
import { MessageSquare, MoreVertical, Play, Pause } from 'lucide-react';
import { MessageFunnel } from '../../types/funnel';

interface FunnelCardProps {
  funnel: MessageFunnel;
  onToggleActive: (id: string) => void;
  onEdit: (id: string) => void;
}

export function FunnelCard({ funnel, onToggleActive, onEdit }: FunnelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">{funnel.name}</h3>
            <p className="text-sm text-gray-500">{funnel.description}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-50 rounded-full">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            {funnel.steps.length} steps
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            funnel.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {funnel.active ? 'Active' : 'Inactive'}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(funnel.id)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onToggleActive(funnel.id)}
            className={`p-2 rounded-full ${
              funnel.active 
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-green-50 text-green-600 hover:bg-green-100'
            }`}
          >
            {funnel.active ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}