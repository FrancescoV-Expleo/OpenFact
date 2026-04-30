import { useState, useRef, useEffect } from 'react';
import { UserCircle, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showInviteMessage, setShowInviteMessage] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Ciao! Come posso aiutarti oggi?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage: Message = {
        text: 'Grazie per il tuo messaggio! Sono un chatbot di esempio. In una versione completa, qui ci sarebbe una risposta intelligente alle tue domande.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {showInviteMessage && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs animate-in slide-in-from-right duration-300">
            <button
              onClick={() => setShowInviteMessage(false)}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Close message"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
            <p className="text-sm text-gray-700 pr-4">
              <span className="font-semibold">Chiedimi tutto!</span>
              <br />
              Notizie, informazioni o altro e io farò il fact checking per te.
            </p>
          </div>
        )}
        <button
          onClick={() => {
            setIsOpen(true);
            setShowInviteMessage(false);
          }}
          className="w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center hover:scale-110 flex-shrink-0"
          aria-label="Open chat"
        >
          <UserCircle className="w-7 h-7" />
        </button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          <UserCircle className="w-5 h-5" />
          <span className="font-medium">Assistente Fact-Checking</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
      <div className="bg-gray-900 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserCircle className="w-5 h-5" />
          <span className="font-medium">Assistente Fact-Checking</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            aria-label="Minimize chat"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString('it-IT', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Scrivi un messaggio..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={inputValue.trim() === ''}
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
