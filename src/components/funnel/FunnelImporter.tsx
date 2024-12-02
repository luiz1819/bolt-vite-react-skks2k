import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { importFunnelFromJson } from '../../utils/funnelImporter';
import { MessageFunnel } from '../../types/funnel';

interface FunnelImporterProps {
  onImport: (funnel: MessageFunnel) => void;
  onError: (error: string) => void;
}

export function FunnelImporter({ onImport, onError }: FunnelImporterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const funnel = importFunnelFromJson(content);
      onImport(funnel);
    } catch (error) {
      onError('Failed to import funnel. Please check the JSON format.');
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileSelect}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <Upload size={20} className="mr-2" />
        Import Funnel
      </button>
    </div>
  );
}