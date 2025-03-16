import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import socket from "../connection"; // Import the central socket instance
import { useAuthcontext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

function Chat() {
  const { room } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { TheatorUser } = useAuthcontext();

  // Create a reference for the chat messages container
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      if (TheatorUser?.email !== msg?.email) {
        // toast.success(`${msg.name}: ${msg.text}`);
      }
    });

    // Cleanup on component unmount
    return () => {
      socket.off("receiveMessage");
    };
  }, [TheatorUser?.email, TheatorUser?.name]);

  // Scroll to the bottom of the chat messages container when messages are updated
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll to the bottom
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        name: TheatorUser?.name || "Anonymous",
        email: TheatorUser?.email || "random@123gmail.com",
        profilePicture: TheatorUser.profilePicture,
        text: message,
        time: new Date().toLocaleTimeString(),
      };

      // Emit the message to the server
      socket.emit("chatMessage", { room, message: newMessage });

      // Clear the input field
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  console.log(TheatorUser);

  return (
    <div className="chat-container flex flex-col h-full border-2 border-gray-200 rounded-md shadow-lg">
      <div className="chat-header bg-blue-500 text-white font-bold text-lg p-2 rounded-t-md">
        Live Chat
      </div>
      <div
        className="chat-messages flex-1 p-4 overflow-y-auto"
        ref={messagesEndRef} // Attach the reference to the chat messages container
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message flex mb-4 ${
              msg?.email === TheatorUser?.email
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {/* Profile icon positioned based on message alignment */}
            {msg?.email !== TheatorUser?.email && (
              <img
                src={msg?.profilePicture}
                alt="profile"
                className="w-8 h-8 rounded-full mr-2"
                loading="lazy"
              />
            )}
            <div
              className={`${
                msg?.email === TheatorUser?.email
                  ? "bg-violet-400 text-white"
                  : "bg-gray-200 text-black"
              } p-2 rounded-md max-w-xs`}
            >
              <div className="font-semibold">
                {msg?.email === TheatorUser?.email ? "You" : msg?.name}
              </div>
              <div className="text-sm">{msg.text}</div>
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
            {/* Profile icon for the current user's message */}
            {msg?.email === TheatorUser?.email && (
              <img
                src={msg?.profilePicture}
                alt="profile"
                className="w-8 h-8 rounded-full ml-2"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
      <div className="chat-input p-4 border-t-2 border-gray-200">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
