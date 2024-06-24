import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router";
import { ConversationContext } from "../../Context/ConversationContext";

const Contact = ({ IDs }) => {
  // console.log("Inside contact", IDs);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const {
    createConversation,
    fetchSingleConversation,
    singleConversationData,
  } = useContext(ConversationContext);

  const sellerId = IDs.sellerId;
  const buyerId = IDs.buyerId;
  const id = sellerId + buyerId;
  console.log("idddddddddddddddddd", id);
  useEffect(() => {
    if (id) {
      fetchSingleConversation(id);
    }
  }, []);

  const handleContact = async () => {
    try {
      const res = singleConversationData;
      // console.log("Afterrrr clickkkkkkkk:", res);
      navigate(`/message/${res.id}`);
    } catch (err) {
      // console.log("I am here", err);
      const res = createConversation(currentUser.seller ? buyerId : sellerId);
      // console.log("Afterrrr clickkkkkkkk To createee:", res);
      navigate(`/message/${res.id}`);
    }
  };
  return (
    <>
      <div className="contact w-[35px] h-[35px] m-2 cursor-pointer">
        <img
          className="message w-full"
          src="./assets/message.png"
          alt="message icon"
          onClick={() => handleContact()}
        />
      </div>
    </>
  );
};

export default Contact;
