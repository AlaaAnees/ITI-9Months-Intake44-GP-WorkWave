import { Link } from "react-router-dom";
import { ConversationContext } from "../../Context/ConversationContext";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

// =========================================================
export default function Chats() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const { conversationData, updateConversation, loading, error } =
    useContext(ConversationContext);

  const [usersOreder, setUsersOreder] = useState([]);
  const isSeller = () => {
    return currentUser.isSeller;
  };

  const getBuyerData = () => {
    const seller = isSeller();

    const usersId = seller
      ? conversationData.map((b) => {
          return b.buyerId;
        })
      : conversationData.map((s) => {
          return s.sellerId;
        });

    return usersId;
  };

  const usersID = getBuyerData();
  // console.log("UUUUUUUUUUUUUUUUUUUUUUUU:) ", usersID);

  /*  useEffect(() => {
    async function fetchUsersData() {
      const response = await fetch(
        // `https://workwave-vq08.onrender.com/api/users/${usersID[0]}`
      );
      const data = await response.json();
      console.log("FFFFFFFFFFFFFFFFFFFFFFFFFf", data);
      setUsersOreder(data.data.user);
    }

    fetchUsersData();
  }, []); */

  // console.log("MMMMMMMMMMMMMMMMMMMMMM: ", isSeller());

  const queryClient = useQueryClient();

  // console.log("Test currentUser from chats:", currentUser);
  // console.log(localStorage);

  // console.log("form messageeeeeeeeeees:)", conversationData);

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
      <div className="messages sub-font container mx-auto m-5">
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
            {conversationData.map((c) => (
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
                    src={`${usersOreder.img}`}
                    alt="buyer 1"
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                  />
                  <span
                    className="main-font text-sm md:text-base "
                    style={fontStyle}
                  >
                    {currentUser.isSeller
                      ? c.buyerId.substring(0, 10)
                      : c.sellerId.substring(0, 10)}

                    {/* {currentUser.isSeller
                      ? usersOreder.username
                      : usersOreder.username} */}
                  </span>
                </div>
                <Link to={`/message/${c.id}`} className="text-decoration-none">
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// {/* Box 2 */}
// <div className="box px-3 flex justify-between align-items-center bg-white rounded-md shadow-sm mt-3">
//   <div className="person flex align-items-center gap-2 p-2">
//     <span className="main-font" style={fontStyle}>
//       Mahmoud Abdelaziz
//     </span>
//     <span>
//       <img
//         src="public/assets/buyer1.jpg"
//         alt="buyer 1"
//         className="w-10 h-10 rounded-full"
//       />
//     </span>
//   </div>
//   <Link to="/chat/123" className="text-decoration-none">
//     <div className="message main-font py-3" style={fontStyle}>
//       {message.substring(0, 50)}...
//     </div>
//   </Link>
//   <div className="date main-font" style={fontStyle}>
//     a few second ago
//   </div>
//   <div className="w-36"></div>
// </div>
