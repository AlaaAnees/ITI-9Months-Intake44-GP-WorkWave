/* import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { MessageContext } from "../../Context/MessageContext";
import { useMutation } from "react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Chat() {
  const { id } = useParams();

  const { messages, fetchMessages, createMessage, loading, error } =
    useContext(MessageContext);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [newMessage, setNewMessage] = useState("");

  const messageContainerRef = useRef(null);

  const mutation = useMutation({
    mutationFn: async () => {
      await createMessage(id, newMessage);
    },
    onSuccess: async () => {
      await fetchMessages(id);
      setNewMessage("");
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      mutation.mutate();
    }
  };

  useEffect(() => {
    fetchMessages(id);
  }, [id]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="chat mx-2 md:mx-10">
        <div className="content mt-2 container mx-auto xl:w-[90%] xl:mx-auto">
          <div className="back ms-5 bg-blue-900 w-[110px] text-white py-1 px-2 rounded-md text-center">
            <Link className="text-sm" to={"/messages"}>
              {" <"}To Messages
            </Link>
          </div>

          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div
              className="chats flex flex-col my-3 gap-2 p-8 h-[450px] scrollbar-thin overflow-y-scroll"
              ref={messageContainerRef}
            >
              {messages.map((m) => (
                <div
                  key={m._id}
                  className={`buyer flex gap-3 max-w-xl ${
                    m.userId === currentUser._id
                      ? "flex-row-reverse self-end"
                      : ""
                  }`}
                >
                  <p
                    className={`${
                      m.userId === currentUser._id
                        ? "bg-blue-500 text-white rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
                        : "text-gray-500 bg-blue-100 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
                    }  max-w-100 py-3 px-4 text-sm`}
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
            className="sendMessage flex items-center justify-between m-3"
          >
            <textarea
              className="w-[70%] md:w-[85%] h-[60px] md:h-[80px] p-3 rounded-lg shadow-sm outline-none border-1 border-blue-100 resize-none scrollbar-thin"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write a message"
              onKeyDown={handleKeyDown}
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
 */

import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { MessageContext } from "../../Context/MessageContext";
import { useMutation } from "react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Chat() {
  const { id } = useParams();

  const { messages, fetchMessages, createMessage, loading, error } =
    useContext(MessageContext);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [newMessage, setNewMessage] = useState("");

  const messageContainerRef = useRef(null);

  const mutation = useMutation({
    mutationFn: async () => {
      await createMessage(id, newMessage);
    },
    onSuccess: async () => {
      await fetchMessages(id);
      setNewMessage("");
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      mutation.mutate();
    }
  };

  useEffect(() => {
    fetchMessages(id);
  }, [id]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat mx-2 md:mx-10">
      <div className="content mt-2 container mx-auto xl:w-[90%] xl:mx-auto">
        <div className="back ms-5 bg-blue-900 w-[110px] text-white py-1 px-2 rounded-md text-center">
          <Link className="text-sm" to={"/messages"}>
            {" <"}To Messages
          </Link>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <div
            className="chats flex flex-col my-3 gap-2 p-8 h-[450px] scrollbar-thin overflow-y-scroll"
            ref={messageContainerRef}
          >
            {messages.map((m) => (
              <div
                key={m._id}
                className={`buyer flex gap-3 max-w-xl ${
                  m.userId === currentUser._id
                    ? "flex-row-reverse self-end"
                    : ""
                }`}
              >
                <p
                  className={`${
                    m.userId === currentUser._id
                      ? "bg-blue-500 text-white rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
                      : "text-gray-500 bg-blue-100 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
                  }  max-w-100 py-3 px-4 text-sm`}
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
          className="sendMessage flex items-center justify-between m-3"
        >
          <textarea
            className="w-[70%] md:w-[85%] h-[60px] md:h-[80px] p-3 rounded-lg shadow-sm outline-none border-1 border-blue-100 resize-none scrollbar-thin"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write a message"
            onKeyDown={handleKeyDown}
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
  );
}

export default Chat;
