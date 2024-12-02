import React from 'react';
import { Plus, Trash2, ArrowRight } from 'lucide-react';
import { FunnelStep } from '../../types/funnel';

interface FunnelStepEditorProps {
  step: FunnelStep;
  onUpdate: (step: FunnelStep) => void;
  onDelete: () => void;
  onAddButton: () => void;
}

export function FunnelStepEditor({ step, onUpdate, onDelete, onAddButton }: FunnelStepEditorProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={step.message}
            onChange={(e) => onUpdate({ ...step, message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows={3}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Response Buttons
            </label>
            <button
              onClick={onAddButton}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus size={16} className="mr-1" />
              Add Button
            </button>
          </div>
          
          {step.buttons?.map((button, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={button}
                onChange={(e) => {
                  const newButtons = [...(step.buttons || [])];
                  newButtons[index] = e.target.value;
                  onUpdate({ ...step, buttons: newButtons });
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => {
                  const newButtons = step.buttons?.filter((_, i) => i !== index);
                  onUpdate({ ...step, buttons: newButtons });
                }}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delay (seconds)
          </label>
          <input
            type="number"
            value={step.delay || 0}
            onChange={(e) => onUpdate({ ...step, delay: Number(e.target.value) })}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            min="0"
          />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-700 text-sm font-medium"
        >
          Delete Step
        </button>
        <div className="flex items-center text-gray-500">
          <span className="text-sm">Next Step</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
}