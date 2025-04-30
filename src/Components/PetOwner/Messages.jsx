import React, { useState } from 'react';
import Sidebar from './Sidebar';

const veterinarians = [
  { id: 1, name: 'Dr. Meera Suresh' },
  { id: 2, name: 'Dr. Rajesh Kumar' },
  { id: 3, name: 'Dr. Anjali Nair' },
];

const Messages = () => {
  const [selectedVet, setSelectedVet] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && selectedVet) {
      setMessages((prev) => [...prev, { sender: 'me', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="d-flex w-100" style={{ height: '100vh' }}>
        <div className="border-end bg-light p-3" style={{ width: '25%' }}>
          <h5 className="mb-3">Veterinarians</h5>
          {veterinarians.map((vet) => (
            <div
              key={vet.id}
              className={`p-2 mb-2 rounded ${selectedVet?.id === vet.id ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setSelectedVet(vet)}
              style={{ cursor: 'pointer' }}
            >
              {vet.name}
            </div>
          ))}
        </div>
        <div className="flex-grow-1 p-3 d-flex flex-column">
          {selectedVet ? (
            <>
              <h5 className="border-bottom pb-2 mb-3">Chat with {selectedVet.name}</h5>
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
            <div className="text-muted m-auto">Select a veterinarian to start chatting.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
