import { useState } from 'react';

interface Props {
  onSend: (content: string) => void;
}

const MessageInput = ({ onSend }: Props) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSend(content);
    setContent('');
  };

  return (
    <div style={{
      display: 'flex',
      borderTop: '1px solid #ddd',
      padding: '0.5rem',
      backgroundColor: '#f9f9f9'
    }}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe un mensaje..."
        style={{
          flexGrow: 1,
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          marginLeft: '0.5rem',
          backgroundColor: '#008744',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
