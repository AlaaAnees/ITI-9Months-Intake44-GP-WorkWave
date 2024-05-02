import { createContext, useState, useContext } from "react";
import axios from "axios"; // Make sure to import axios

// Create a context
export const MessageContext = createContext();

// Create a context provider component
export const MessageContextProvider = ({ children }) => {
  // State to store fetched messages
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch messages for a specific conversation ID
  const fetchMessages = async (conversationId) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/messages/${conversationId}`);
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to create a new message
  const createMessage = async (conversationId, desc) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/messages", {
        conversationId,
        desc,
      });
      setMessages([...messages, response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error creating message:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Provide the message data, loading state, and functions to the child components
  return (
    <MessageContext.Provider
      value={{
        messages,
        loading,
        error,
        fetchMessages,
        createMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the message context
export const useMessageContext = () => {
  return useContext(MessageContext);
};
