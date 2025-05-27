export interface Message {
  id_message?: number;
  content: string;
  sender: 'user' | 'bot';
  timestamps?: string;
}
