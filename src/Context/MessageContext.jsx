import { createContext, useState, useContext } from "react";
import { AuthContext } from "./authContext";

// Create a context
export const MessageContext = createContext();

// Create a context provider component
export const MessageContextProvider = ({ children }) => {
  // State to store fetched messages
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  //! Function to create a new message
  const createMessage = async (conversationId, desc) => {
    try {
      setLoading(true); //......
      const response = await fetch(
        "https://gp-workwave-production.up.railway.app/api/messages",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conversationId,
            desc,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create message");
      }
      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages, data]);
      setLoading(false); //....
    } catch (error) {
      console.error("Error creating message:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  //! Function to fetch messages for a specific conversation ID
  const fetchMessages = async (conversationId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://gp-workwave-production.up.railway.app/api/messages/${conversationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await response.json();

      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  //! Provide the message data, loading state, and functions to the child components
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
