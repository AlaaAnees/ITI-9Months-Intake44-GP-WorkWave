// import { createContext, useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types"; // Import PropTypes
// import { AuthContext } from "./authContext";

// export const ConversationContext = createContext(); // Create a context 🫙

// const ConversationContextProvider = (props) => {
//   // State to store fetched 🖲️
//   const [conversationData, setConversationData] = useState([]);
//   const [singleConversationData, setSingleConversationData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { token } = useContext(AuthContext);

//   //! ====================== Function to create a new conversation 🆕======================
//   const createConversation = async (to) => {
//     try {
//       // Send POST request to create conversation
//       const response = await fetch(
//         "https://gp-workwave-production.up.railway.app/api/conversation",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ to: to }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to create conversation");
//       }
//       // // Fetch updated conversations after creating a new one
//       // fetchConversations();
//       const jsonData = await response.json();
//       return jsonData;
//     } catch (error) {
//       console.error("Error creating conversation:", error);
//       setError(error.message);
//     }
//   };

//   //!====================== Function to fetch all conversations 🗨️ ======================
//   const fetchConversations = async () => {
//     try {
//       // Fetch data from the conversation endpoint with the token included in the headers
//       const response = await fetch(
//         "https://gp-workwave-production.up.railway.app/api/conversation",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // console.log("from fetchConversations:", response); //for check 🧪

//       if (!response.ok) {
//         throw new Error("Failed to fetch conversations");
//       }

//       const jsonData = await response.json();

//       // console.log("form fetch: ", jsonData); //for check 🧪

//       // Set the fetched data to the state
//       setConversationData(jsonData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching conversations:", error);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   //!======================= Function to fetch a single conversation 1️⃣=======================
//   const fetchSingleConversation = async (conversationId) => {
//     try {
//       // Fetch data from the single conversation endpoint with the token included in the headers
//       const response = await fetch(
//         `https://gp-workwave-production.up.railway.app/api/conversation/single/${conversationId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch single conversation");
//       }

//       const jsonData = await response.json();

//       // Set the fetched data to the state
//       setSingleConversationData(jsonData);
//       setLoading(false);
//       return jsonData; // Return the fetched conversation data
//     } catch (error) {
//       console.error("Error fetching single conversation:", error);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   //!====================== Function to update an existing conversation ♻️======================
//   const updateConversation = async (conversationId) => {
//     try {
//       // Send PUT request to update conversation

//       const response = await fetch(
//         `https://gp-workwave-production.up.railway.app/api/conversation/${conversationId}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to update conversation");
//       }
//       // Fetch updated conversations after updating
//       fetchConversations();
//     } catch (error) {
//       console.error("Error updating conversation:", error);
//       setError(error.message);
//     }
//   };

//   //! Fetch all conversations when the component mounts
//   useEffect(() => {
//     fetchConversations();
//   }, []);

//   return (
//     // Provide the conversation data, single conversation data, loading state, and functions to the child components
//     <ConversationContext.Provider
//       value={{
//         conversationData,
//         singleConversationData,
//         loading,
//         error,
//         createConversation,
//         updateConversation,
//         fetchSingleConversation,
//         fetchConversations,
//       }}
//     >
//       {props.children} {}
//     </ConversationContext.Provider>
//   );
// };

// // Add prop validation for children prop
// ConversationContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ConversationContextProvider;

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./authContext";

export const ConversationContext = createContext();

const ConversationContextProvider = (props) => {
  const [conversationData, setConversationData] = useState([]);
  const [singleConversationData, setSingleConversationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  const createConversation = async (to) => {
    try {
      const response = await fetch(
        "https://gp-workwave-production.up.railway.app/api/conversation",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to: to }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create conversation");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error creating conversation:", error);
      setError(error.message);
    }
  };

  const fetchConversations = useCallback(async () => {
    try {
      const response = await fetch(
        "https://gp-workwave-production.up.railway.app/api/conversation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch conversations");
      }

      const jsonData = await response.json();
      setConversationData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setError(error.message);
      setLoading(false);
    }
  }, [token, conversationData]);

  const fetchSingleConversation = useCallback(
    async (conversationId) => {
      try {
        const response = await fetch(
          `https://gp-workwave-production.up.railway.app/api/conversation/single/${conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch single conversation");
        }

        const jsonData = await response.json();
        setSingleConversationData(jsonData);
        setLoading(false);
        return jsonData;
      } catch (error) {
        console.error("Error fetching single conversation:", error);
        setError(error.message);
        setLoading(false);
      }
    },
    [token]
  );

  const updateConversation = useCallback(
    async (conversationId) => {
      try {
        const response = await fetch(
          `https://gp-workwave-production.up.railway.app/api/conversation/${conversationId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update conversation");
        }
        fetchConversations();
      } catch (error) {
        console.error("Error updating conversation:", error);
        setError(error.message);
      }
    },
    [token, fetchConversations]
  );

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  return (
    <ConversationContext.Provider
      value={{
        conversationData,
        singleConversationData,
        loading,
        error,
        createConversation,
        updateConversation,
        fetchSingleConversation,
        fetchConversations,
      }}
    >
      {props.children}
    </ConversationContext.Provider>
  );
};

ConversationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConversationContextProvider;
