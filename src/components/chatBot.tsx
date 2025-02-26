"use client"

import { useState } from "react";
import ChatbotIcon from "../../public/chat-round-dots.svg"

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <div>
      <ChatbotIcon 
        width="32" 
        height="32"
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-12 right-12 hover:cursor-pointer"
      />
      {chatOpen && (
        <div className="text-[var(--textSecondary)] bg-[var(--backgroundSecondary)] fixed bottom-24 right-12 shadow-md shadow-[var(--accentSecondary)] h-[30rem] w-[24rem]">
          <h2 className="h-[4rem] p-5 text-xl shadow-[var(--accentSecondary)_0px_2px_0px_0px] shadow-[var(--accentSecondary)] font-semibold">Chatbot</h2>
          <div className="flex flex-col items-center p-5 mt-5 overflow-y-auto">Show chat here</div>
          <div>Input message here</div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;