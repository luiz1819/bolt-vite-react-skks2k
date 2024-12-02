import { v4 as uuidv4 } from 'uuid';
import { MessageFunnel, FunnelStep, AudioMessage } from '../types/funnel';

interface RawFunnelStep {
  messages: Array<{
    type: 'audio' | 'text';
    content: string;
    audioUrl?: string;
    delay?: number;
  }>;
  buttons?: string[];
  delay?: number;
  nextSteps?: string[];
}

interface RawFunnel {
  name: string;
  description: string;
  steps: RawFunnelStep[];
}

export function importFunnelFromJson(jsonContent: string): MessageFunnel {
  try {
    const rawFunnel: RawFunnel = JSON.parse(jsonContent);
    
    const steps: FunnelStep[] = rawFunnel.steps.map(step => ({
      id: uuidv4(),
      messages: step.messages.map(msg => ({
        id: uuidv4(),
        type: msg.type,
        content: msg.content,
        audioUrl: msg.audioUrl,
        delay: msg.delay || 0
      })),
      buttons: step.buttons || [],
      delay: step.delay || 0,
      nextSteps: step.nextSteps || []
    }));

    return {
      id: uuidv4(),
      name: rawFunnel.name,
      description: rawFunnel.description,
      steps,
      active: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    throw new Error('Invalid funnel JSON format');
  }
}