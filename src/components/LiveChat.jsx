import React, { useState } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! How can I help you today?', sender: 'agent', time: new Date() }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponse = {
          id: messages.length + 2,
          text: 'Thanks for your message! Our team will get back to you shortly.',
          sender: 'agent',
          time: new Date()
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  return (
    <>
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <MessageCircle size={24} />
        <span className="chat-badge">1</span>
      </button>

      {isOpen && (
        <div className={`live-chat-widget ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="chat-title">
              <MessageCircle size={20} />
              <span>Live Chat</span>
            </div>
            <div className="chat-controls">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`message ${msg.sender === 'user' ? 'user' : 'agent'}`}
                  >
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">
                        {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="chat-input">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  aria-label="Type message"
                />
                <button 
                  type="submit" 
                  disabled={!message.trim()}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default LiveChat;
