import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router";
import { ConversationContext } from "../../Context/ConversationContext";

const Contact = ({ IDs }) => {
  const currentUser = useMemo(
    () => JSON.parse(localStorage.getItem("user")),
    []
  );
  const navigate = useNavigate();
  const { createConversation, fetchSingleConversation } =
    useContext(ConversationContext);

  const [conversationExists, setConversationExists] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  const id = useMemo(
    () => `${IDs.sellerId}${IDs.buyerId}`,
    [IDs.sellerId, IDs.buyerId]
  );

  const checkConversation = useCallback(async () => {
    try {
      const conversation = await fetchSingleConversation(id);
      // console.log(
      //   "------------------------------------------------------->from conversationnnnnnnn",
      //   conversation
      // );
      if (conversation) {
        setConversationExists(true);
        setConversationId(conversation.id);
      } else {
        await setConversationExists(false);
      }
    } catch (error) {
      console.error("Error checking conversation:", error);
      setConversationExists(false);
    }
  }, [fetchSingleConversation, id]);

  useEffect(() => {
    checkConversation();
  }, [checkConversation]);

  const handleContact = async () => {
    if (conversationExists) {
      await navigate(`/message/${conversationId}`);
      // console.log(conversationId);
    } else {
      try {
        const newConversation = await createConversation(
          currentUser.isSeller ? IDs.buyerId : IDs.sellerId
        );
        if (newConversation) {
          navigate(`/message/${newConversation.data.savedConversation.id}`);
        } else {
          console.error("Error creating conversation: No response data");
        }
      } catch (error) {
        console.error("Error creating conversation:", error);
      }
    }
  };

  return (
    <div
      className="contact w-[35px] h-[35px] m-2 cursor-pointer"
      onClick={handleContact}
    >
      <img
        className="message w-full"
        src="./assets/message.png"
        alt="message icon"
      />
    </div>
  );
};

export default Contact;
