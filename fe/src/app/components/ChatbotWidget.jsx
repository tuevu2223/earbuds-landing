"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faXmark,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Xin chào! Mình là trợ lý ảo của Alpha Works. Mình có thể giúp gì cho bạn về tai nghe Flex 680 hôm nay?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg = { id: Date.now(), sender: "user", text: inputText };
    setMessages((prev) => [...prev, newUserMsg]);
    const currentInputText = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch("https://earbuds-landing.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentInputText }),
      });

      const data = await response.json();

      const botResponse = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.response || "Đã có lỗi xảy ra khi kết nối máy chủ.",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const botResponse = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Xin lỗi, không thể kết nối tới máy chủ.",
      };
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div
        className={`mb-4 w-[340px] sm:w-[380px] bg-theme-box/95 backdrop-blur-xl border border-theme-accent/20 rounded-3xl shadow-2xl overflow-hidden origin-bottom-right transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
              <FontAwesomeIcon icon={faRobot} className="text-lg" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Alpha Works Bot</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-white/80 text-xs">Đang hoạt động</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="h-[350px] p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/50 scrollbar-thin scrollbar-thumb-theme-accent/30 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-theme-accent text-white rounded-br-none"
                    : "bg-white dark:bg-slate-800 text-text-body border border-slate-200 dark:border-slate-700 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex w-full justify-start">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                <div className="w-2 h-2 bg-theme-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-theme-accent/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-theme-accent/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSend}
          className="p-3 bg-theme-box border-t border-theme-accent/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 text-text-body text-sm px-4 py-2.5 rounded-xl outline-none border border-transparent focus:border-theme-accent/50 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="w-10 h-10 rounded-xl bg-theme-accent text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 transition-colors shadow-md"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-full text-white text-2xl shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 ${
          isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <FontAwesomeIcon icon={faCommentDots} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-theme-bg-main rounded-full"></span>
      </button>
    </div>
  );
}
