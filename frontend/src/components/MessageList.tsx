import { Message } from '../types/message';

interface Props {
  messages: Message[];
}

const MessageList = ({ messages }: Props) => {
  return (
    <div style={{
      padding: '1rem',
      maxHeight: '400px',
      overflowY: 'auto',
      backgroundColor: '#fff'
    }}>
      {messages.map((msg, i) => {
        const isUser = msg.sender === 'user';
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: isUser ? 'flex-end' : 'flex-start',
              marginBottom: '0.5rem'
            }}
          >
            <div style={{
              backgroundColor: isUser ? '#008744' : '#eee',
              color: isUser ? 'white' : '#333',
              borderRadius: '16px',
              padding: '0.75rem 1rem',
              maxWidth: '70%',
              position: 'relative',
              wordWrap: 'break-word'
            }}>
              {!isUser && <div style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}>🤖</div>}
              {msg.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
