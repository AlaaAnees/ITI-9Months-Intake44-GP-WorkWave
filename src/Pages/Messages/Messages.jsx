import { Link, useLocation } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { ConversationContext } from "../../Context/ConversationContext";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { AuthContext } from "../../Context/authContext";

export default function Messages() {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const {
    fetchConversations,
    conversationData,
    updateConversation,
    loading: conversationLoading,
    error: conversationError,
  } = useContext(ConversationContext);
  const { token } = useContext(AuthContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [usersOrder, setUsersOrder] = useState([]);
  // const [empty, setEmpty] = useState("You have no orders yet");

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 640);
  }, []);

  const isSeller = useCallback(() => {
    return currentUser.isSeller;
  }, [currentUser]);

  const getBuyerIds = useCallback(() => {
    const seller = isSeller();
    const userIds = seller
      ? conversationData.map((conversation) => conversation.buyerId)
      : conversationData.map((conversation) => conversation.sellerId);
    return userIds;
  }, [conversationData, isSeller]);

  const userIds = useMemo(() => getBuyerIds(), [getBuyerIds]);
  const prevUserIdsRef = useRef(userIds);

  // useEffect(() => {
  //   if (!userIds) {
  //     console.error("User IDs are undefined or empty");
  //     return;
  //   }
  //   async function fetchUsersData() {
  //     try {
  //       const fetchPromises = userIds.map((id) =>
  //         fetch(`https://workwave-vq08.onrender.com/api/users/${id}`, {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }).then((response) => {
  //           if (!response.ok) {
  //             throw new Error(`HTTP error! status: ${response.status}`);
  //           }
  //           return response.json();
  //         })
  //       );
  //       const results = await Promise.all(fetchPromises);
  //       const allUsersData = results.map((result) => result.data.user);
  //       setUsersOrder(allUsersData);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setUsersOrder([]);
  //     }
  //   }
  //   fetchUsersData();
  // }, [userIds, token, location]);

  // Inside useEffect where you fetch user data
  useEffect(() => {
    if (!userIds) {
      console.error("User IDs are undefined or empty");
      setUsersOrder([]);
      return;
    }
    async function fetchUsersData() {
      try {
        const fetchPromises = userIds.map((id) =>
          fetch(`https://workwave-vq08.onrender.com/api/users/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        );
        const results = await Promise.all(fetchPromises);
        const allUsersData = results.map((result) => result.data.user);
        setUsersOrder(allUsersData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUsersOrder([]);
      }
    }

    // Ensure conversationData and userIds are available
    if (conversationData.length > 0 && userIds.length > 0) {
      fetchUsersData();
    }
  }, [conversationData, userIds, token, location]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => updateConversation(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["conversation"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  const fontStyle = {
    color: "#808080",
  };

  return (
    <div className="mx-5 md:mx-10">
      <div className="messages sub-font container mx-auto xl:w-[90%] xl:mx-auto ">
        {conversationLoading ? (
          <Loading />
        ) : (
          <div className="">
            <div className="title main-font">
              <h1 className="mt-5 main-font font-extrabold text-2xl">
                Messages
              </h1>
            </div>
            <div className="hidden md:block w-full">
              <table className="w-full">
                <thead>
                  <tr className="h-16 main-font">
                    <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                    <th className="text-center">Last Message</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
              </table>
            </div>

            {conversationData.map((conversation) => {
              const user =
                usersOrder &&
                usersOrder.find(
                  (u) =>
                    u &&
                    u._id ===
                      (currentUser.isSeller
                        ? conversation.buyerId
                        : conversation.sellerId)
                );
              return (
                <div
                  key={conversation.id}
                  className={`box mb-3 px-3 flex justify-between items-center ${
                    (currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)
                      ? "bg-blue-100 border-1 border-gray-400"
                      : "bg-white"
                  } rounded-md shadow-sm mt-3`}
                >
                  <div className="person flex flex-col md:flex-row items-center gap-2 p-2">
                    <img
                      src={user ? user.img : "assets/avatar.jpg"}
                      alt={user ? user.username : "Avatar"}
                      className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                    />
                    <span
                      className="main-font text-sm md:text-base"
                      style={fontStyle}
                    >
                      {user ? user.username : "Unknown"}
                    </span>
                  </div>
                  <Link
                    to={`/message/${conversation.id}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="message main-font py-3 text-sm md:text-base"
                      style={fontStyle}
                    >
                      {isSmallScreen
                        ? conversation?.lastMessage?.substring(0, 15)
                        : conversation?.lastMessage?.substring(0, 30)}
                      ...
                    </div>
                  </Link>
                  <div
                    className="date main-font text-sm md:text-base"
                    style={fontStyle}
                  >
                    {moment(conversation.updatedAt).fromNow()}
                  </div>
                  {((currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)) && (
                    <button
                      className="main-font text-sm w-fit p-2 md:py-2 md:px-3 bg-blue-400 text-white hover:bg-blue-300 rounded-full md:rounded"
                      onClick={() => handleRead(conversation.id)}
                    >
                      <span className="hidden md:inline">Mark As Read</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
