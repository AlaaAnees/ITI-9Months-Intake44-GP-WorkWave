import { useEffect, useState } from "react"; // Import useEffect hook to fetch messages
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MessageContext } from "../../Context/MessageContext";
import { useMutation } from "react-query";

function Chat() {
  const { id } = useParams();
  // const queryClient = useQueryClient();

  const { messages, fetchMessages, createMessage, loading, error } =
    useContext(MessageContext);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [newMessage, setNewMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      await createMessage(id, newMessage);
    },
    onSuccess: async () => {
      await fetchMessages(id); // Fetch messages again to update the list
      setNewMessage(""); // Reset the message input field after successful send
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewMessage("");
    mutation.mutate();
  };

  useEffect(() => {
    // Fetch messages when component mounts
    fetchMessages(id);
  }, []);

  return (
    <>
      <div className="chat">
        <div className="content mt-2 container-lg">
          {/* Render loading or error message */}
          {loading ? (
            "Loading..."
          ) : error ? (
            "Error"
          ) : (
            <div className="chats flex flex-col my-3 gap-2 p-8 h-[450px] scrollbar-thin overflow-y-scroll ">
              {/* Render messages */}
              {messages.map((m) => (
                <div
                  key={m._id}
                  className={`buyer flex gap-3 max-w-xl ${
                    m.userId === currentUser._id
                      ? "flex-row-reverse self-end"
                      : ""
                  }`}
                >
                  <img
                    src={`${currentUser.img}`}
                    alt="buyer2"
                    className="w-12 h-12 rounded-full object-cover hidden md:block"
                  />
                  <p
                    className={`${
                      m.userId === currentUser._id
                        ? "bg-blue-500 text-white rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
                        : "bg-blue-100 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
                    }  max-w-100 py-3 px-4 text-sm`}
                    style={{
                      // borderRadius: "0px 20px 20px 20px",
                      color: "gray",
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
          <hr />
          <form
            onSubmit={handleSubmit}
            className="sendMessage flex align-items-center justify-between m-3"
          >
            <textarea
              className="w-[70%] md:w-[85%] h-[60px] md:h-[80px] p-3 rounded-lg shadow-sm outline-none border-1 border-blue-100 resize-none scrollbar-thin "
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write a message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white border-none p-1 md:p-2 font-medium main-font rounded-md w-[80px] md:w-[100px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;

// {/* seller */}
// <div className="seller flex gap-5 max-w-xl flex-row-reverse self-end">
// <img
//   src="assets/seller1.jpg"
//   alt="buyer2"
//   className="w-12 h-12 rounded-full object-cover"
// />
// <p
//   className="bg-blue-500 text-white max-w-lg py-3 px-4 text-sm"
//   style={{
//     borderRadius: "20px 0px 20px 20px",
//     color: "gray",
//   }}
// >
//   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   Officiis, eaque quas distinctio exercitationem dolores sit
//   ipsam nemo, rerum, voluptatibus excepturi amet. Autem
//   voluptatum similique culpa id ipsam, suscipit minima enim?
// </p>
// </div>
