export interface AudioMessage {
  id: string;
  type: 'audio' | 'text';
  content: string;
  audioUrl?: string;
  delay?: number;
}

export interface FunnelStep {
  id: string;
  messages: AudioMessage[];
  buttons?: string[];
  delay?: number;
  nextSteps?: string[];
}

export interface MessageFunnel {
  id: string;
  name: string;
  description: string;
  steps: FunnelStep[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}