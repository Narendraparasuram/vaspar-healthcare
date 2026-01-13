export enum Section {
  VISION = 'VISION',
  BUSINESS_PLAN = 'BUSINESS_PLAN',
  MARKET_SIZE = 'MARKET_SIZE',
  REGULATORY = 'REGULATORY',
  AI_ADVISOR = 'AI_ADVISOR',
  CONSTRUCTION = 'CONSTRUCTION',
  INVESTOR_DECK = 'INVESTOR_DECK',
  APPLICATIONS = 'APPLICATIONS',
  LEADS = 'LEADS'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Lead {
  id: string;
  type: 'pilot' | 'property';
  timestamp: string;
  data: any;
  aiFeedback: string;
}
