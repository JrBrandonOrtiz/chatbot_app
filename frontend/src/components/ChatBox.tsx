import { useEffect, useState } from 'react';
import axios from 'axios';
import { Message } from '../types/message';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

const API_URL = process.env.REACT_APP_API_URL;

const fetchMessages = async () => {
  const res = await axios.get(`${API_URL}/api/messages`);
  setMessages(res.data);
};

const sendMessage = async (content: string) => {
  await axios.post(`${API_URL}/api/messages`, { content });
  fetchMessages();
};

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      border: '1px solid #ccc',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#008744',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        justifyContent: 'center'
      }}>
        💬 Chat With Pocki
      </div>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatBox;
