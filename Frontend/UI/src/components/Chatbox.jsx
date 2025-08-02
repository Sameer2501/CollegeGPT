
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import img from '../assets/chat.jpg'
import img1 from '../assets/mess.jpg'
import img2 from '../assets/app.jpg'
import { FaAnglesUp } from "react-icons/fa6";
const Chatbox = () => {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [streamedAnswer, setStreamedAnswer] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, streamedAnswer]);

  const sendQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    const currentQuestion = question;
    setChat((prev) => [...prev, { type: 'user', text: currentQuestion }]);
    setQuestion('');
    setStreamedAnswer('');

    try {
      const response = await axios.post('https://collegegpt-7.onrender.com/webhook', {
        question: currentQuestion,
      });

      const cleanAnswer = response.data.answer
        .replace(/[*/]/g, '')
        .replace(/^According to (the|provided)? ?data[:,]?/i, '')
        .trim();

      let index = 0;
      const interval = setInterval(() => {
        if (index < cleanAnswer.length) {
          setStreamedAnswer((prev) => prev + cleanAnswer[index]);
          index++;
        } else {
          clearInterval(interval);
          setChat((prev) => [...prev, { type: 'bot', text: cleanAnswer }]);
          setStreamedAnswer('');
          setLoading(false);
        }
      }, 20);
    } catch (error) {
      setChat((prev) => [...prev, { type: 'bot', text: 'Error getting response' }]);
      setLoading(false);
    }
  };

  return (
    <div
      className=" relative h-screen w-full flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }} 
    >
    <div className='mb-[80px]'>
      <img src={img1} alt="Chatbot" className="absolute top-4 left-4 w-16 h-16" />
      <img src={img2} alt="Chatbot" className="absolute top-4 right-4 w-16 h-16" />

    </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4  bg-white/70">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] px-4 py-3 rounded-xl shadow-md text-sm sm:text-base whitespace-pre-line backdrop-blur-md ${
              msg.type === 'user'
                ? 'bg-blue-100 self-end text-right ml-auto'
                : 'bg-white self-start text-left mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {streamedAnswer && (
          <div className="bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-md max-w-[80%] text-left text-sm sm:text-base">
            {streamedAnswer}
          </div>
        )}

        {loading && !streamedAnswer && (
          <div className="text-sm text-gray-500 italic">Thinking...</div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md flex gap-2 shadow-md">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendQuestion()}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask about your college..."
        />
        <button
          onClick={sendQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          <FaAnglesUp />

        </button>
      </div>
    </div>
  );
};

export default Chatbox;
