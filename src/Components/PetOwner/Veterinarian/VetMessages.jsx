import React, { useState } from 'react';

import VetLayout from './VetLayout';

const petOwners = [
  { id: 1, name: 'Adam Johnson' },
  { id: 2, name: 'Sita Reddy' },
  { id: 3, name: 'Michael Clarke' },
];

const VetMessages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && selectedUser) {
      setMessages((prev) => [...prev, { sender: 'me', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <VetLayout />
      <div className="d-flex w-100" style={{ height: '100vh' }}>
        <div className="border-end bg-light p-3" style={{ width: '25%' }}>
          <h5 className="mb-3">Pet Owners</h5>
          {petOwners.map((owner) => (
            <div
              key={owner.id}
              className={`p-2 mb-2 rounded ${selectedUser?.id === owner.id ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setSelectedUser(owner)}
              style={{ cursor: 'pointer' }}
            >
              {owner.name}
            </div>
          ))}
        </div>
        <div className="flex-grow-1 p-3 d-flex flex-column">
          {selectedUser ? (
            <>
              <h5 className="border-bottom pb-2 mb-3">Chat with {selectedUser.name}</h5>
              <div className="flex-grow-1 overflow-auto mb-3 border rounded p-3" style={{ background: '#f9f9f9' }}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex ${msg.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div className={`p-2 rounded mb-2 ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                />
                <button className="btn btn-primary" onClick={handleSend}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="text-muted m-auto">Select a pet owner to start chatting.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VetMessages;
