// SingleConversation.js

import { useContext } from "react";
import { ConversationContext } from "../../Context/ConversationContext";

function SingleConversation() {
  const { singleConversationData, loading, error } =
    useContext(ConversationContext);

  console.log(singleConversationData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!singleConversationData) return null;

  return (
    <div>
      <h2>Single Conversation</h2>
      <div>Content: {singleConversationData.lastMessage}</div>
    </div>
  );
}

export default SingleConversation;
