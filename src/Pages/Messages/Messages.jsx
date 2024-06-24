import { Link, useLocation } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { ConversationContext } from "../../Context/ConversationContext"; // Adjust the import as needed
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { AuthContext } from "../../Context/authContext";

// =========================================================
export default function Chats() {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const {
    fetchConversations,
    conversationData,
    updateConversation,
    loading,
    error,
  } = useContext(ConversationContext);

  const [usersOrder, setUsersOrder] = useState([]);
  const { token } = useContext(AuthContext);

  console.log("loadinggggggggggggggg---------", loading);

  // ==============================================

  //✅
  const isSeller = useCallback(() => {
    return currentUser.isSeller;
  }, [currentUser]);

  //✅
  const getBuyerIDS = useCallback(() => {
    const seller = isSeller(); //true

    const usersId = seller
      ? conversationData.map((b) => b.buyerId)
      : conversationData.map((s) => s.sellerId);
    return usersId;
  }, [conversationData, isSeller]);

  //✅
  const usersID = useMemo(() => getBuyerIDS(), [getBuyerIDS]);

  //✅
  const prevUsersID = useRef(usersID);
  console.log("prevUsersID$$$$$$$$$$$$$", prevUsersID);

  //✅
  useEffect(() => {
    console.log("conversationData changed:", conversationData);
  }, [conversationData]);

  useEffect(() => {
    console.log("usersID changed::::", usersID);
    if (!usersID || usersID.length === 0) {
      console.error("usersID is undefined or empty");
      return;
    }

    if (
      prevUsersID.current &&
      JSON.stringify(prevUsersID.current) === JSON.stringify(usersID)
    ) {
      // console.log("usersID has not changed, skipping fetch");
      return;
    }

    prevUsersID.current = usersID;

    async function fetchUsersData() {
      try {
        const fetchPromises = prevUsersID.current.map((id) =>
          fetch(`https://workwave-vq08.onrender.com/api/users/${id}`, {
            headers: {
              "Content-Type": "application/json",
              // Add any other headers you need, such as authorization
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
        // console.log("resultsssssssssssss", results);
        const allUsersData = results.map((result) => result.data.user);
        // console.log("Data receiveddddddddddd:", allUsersData);
        setUsersOrder(allUsersData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUsersData();
  }, [usersID, token, location]);

  console.log("Current usersOrder: ", usersOrder);

  const queryClient = useQueryClient();

  // console.log("Test currentUser from chats:", currentUser);
  // console.log(localStorage);

  console.log("form messageeeeeeeeeees:)", conversationData);

  const fontStyle = {
    color: "#808080",
  };

  const mutation = useMutation({
    mutationFn: (id) => {
      // console.log("from mutation is mutated");
      return updateConversation(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversation"]);
      // conversationData;
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
    // console.log("from handleRead the button is clicked");
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.innerWidth < 640 ? setIsSmallScreen(true) : false;
  }, []);

  return (
    <>
      <div className="mx-5 md:mx-10">
        <div className="messages sub-font container mx-auto xl:w-[90%] xl:mx-auto ">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="">
              {/* Start title */}
              <div className="title main-font">
                <h1 className="mt-5 main-font font-extrabold text-2xl">
                  Messages
                </h1>
              </div>
              {/* Start Table of messages */}
              <div className="hidden md:block w-full">
                {" "}
                {/* Hide on small screens and show from medium screens and above */}
                <table className="w-full">
                  {/* Start table head */}
                  <thead>
                    <tr className="h-16 main-font">
                      <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                      <th className="text-center">Last Message</th>
                      <th className="text-center">Date</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  {/* End table head */}
                </table>
              </div>
              {/* Box 1 */}
              {conversationData.map((c) => {
                console.log("conversationData MaPPPPPPPPPP", c);

                console.log("UserIDDDDDD----------->", usersOrder);
                const user = usersOrder.find(
                  (u) =>
                    u._id === (currentUser.isSeller ? c.buyerId : c.sellerId)
                );

                console.log("Userrrrrrrrrrr:::::", user);
                return (
                  <div
                    key={c.id}
                    className={`box mb-3 px-3 flex justify-between items-center ${
                      (currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)
                        ? "bg-blue-100 border-1 border-gray-400"
                        : "bg-white"
                    }  rounded-md shadow-sm mt-3`}
                  >
                    <div className="person flex flex-col md:flex-row items-center gap-2 p-2">
                      <img
                        src={`${user ? user.img : "assets/avatar.jpg"}`}
                        alt={`${user ? user.username : "img"}`}
                        className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                      />
                      <span
                        className="main-font text-sm md:text-base "
                        style={fontStyle}
                      >
                        {/* {currentUser.isSeller
                        ? c.buyerId.substring(0, 10)
                        : c.sellerId.substring(0, 10)} */}

                        {user ? user.username : "name"}
                        {/* {currentUser.isSeller
                        ? usersOreder.username
                        : usersOreder.username} */}
                      </span>
                    </div>
                    <Link
                      to={`/message/${c.id}`}
                      className="text-decoration-none"
                    >
                      <div
                        className="message main-font py-3 text-sm md:text-base"
                        style={fontStyle}
                      >
                        {isSmallScreen
                          ? c?.lastMessage?.substring(0, 15)
                          : c?.lastMessage?.substring(0, 30)}
                        ...
                      </div>
                    </Link>
                    <div
                      className="date main-font text-sm md:text-base"
                      style={fontStyle}
                    >
                      {moment(c.updatedAt).fromNow()}
                    </div>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                      <button
                        className="main-font text-sm w-fit p-2 md:py-2 md:px-3 bg-blue-400 text-white hover:bg-blue-300 rounded-full md:rounded"
                        onClick={() => handleRead(c.id)}
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
    </>
  );
}
