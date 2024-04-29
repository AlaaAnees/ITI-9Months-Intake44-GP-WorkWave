import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// Create a context
export const ConversationContext = createContext();

const ConversationContextProvider = (props) => {
  // State to store fetched conversation data
  const [conversationData, setConversationData] = useState([]);
  const [singleConversationData, setSingleConversationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlYTZjNmQzODUyMzViZDEyMzM1Y2EiLCJpc1NlbGxlciI6ZmFsc2UsImlhdCI6MTcxNDQxNTg4Mn0.y_TyiL1GH6Y3ZBzMQwlHHoxDxG37vmZP7eEc2KECYCE"; // Replace 'your_token_here' with your actual JWT token

  // Function to fetch all conversations
  const fetchConversations = async () => {
    try {
      // Fetch data from the conversation endpoint with the token included in the headers
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/conversation",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch conversations");
      }

      const jsonData = await response.json();

      // Set the fetched data to the state
      setConversationData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to fetch a single conversation
  const fetchSingleConversation = async (conversationId) => {
    try {
      // Fetch data from the single conversation endpoint with the token included in the headers
      const response = await fetch(
        `https://workwave-vq08.onrender.com/api/conversation/single/${conversationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch single conversation");
      }

      const jsonData = await response.json();

      // Set the fetched data to the state
      setSingleConversationData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching single conversation:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to create a new conversation
  const createConversation = async (conversationData) => {
    try {
      // Send POST request to create conversation
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/conversation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(conversationData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create conversation");
      }
      // Fetch updated conversations after creating a new one
      fetchConversations();
    } catch (error) {
      console.error("Error creating conversation:", error);
      setError(error.message);
    }
  };

  // Function to update an existing conversation
  const updateConversation = async (conversationId, updatedData) => {
    try {
      // Send PUT request to update conversation
      const response = await fetch(
        `https://workwave-vq08.onrender.com/api/conversation/${conversationId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update conversation");
      }
      // Fetch updated conversations after updating
      fetchConversations();
    } catch (error) {
      console.error("Error updating conversation:", error);
      setError(error.message);
    }
  };

  // Fetch all conversations when the component mounts
  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    // Provide the conversation data, single conversation data, loading state, and functions to the child components
    <ConversationContext.Provider
      value={{
        conversationData,
        singleConversationData,
        loading,
        error,
        createConversation,
        updateConversation,
        fetchSingleConversation,
      }}
    >
      {props.children} {/* Include children prop */}
    </ConversationContext.Provider>
  );
};

// Add prop validation for children prop
ConversationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConversationContextProvider;
