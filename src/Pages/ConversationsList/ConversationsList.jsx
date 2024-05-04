// ConversationsList.js

import { useContext } from "react";
import { ConversationContext } from "../../Context/ConversationContext";

function ConversationsList() {
  const { conversationData, loading, error } = useContext(ConversationContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Conversations List</h2>
      <ul>
        {conversationData.map((conversation) => (
          <li key={conversation.id}>
            <span>{conversation.lastMessage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationsList;
