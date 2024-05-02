import { Link } from "react-router-dom";
import { ConversationContext } from "../../Context/ConversationContext";
import { useContext } from "react";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";

// =========================================================
export default function Chats() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();

  console.log("Test currentUser from chats:", currentUser);
  console.log(localStorage);

  const { conversationData, updateConversation, loading, error } =
    useContext(ConversationContext);

  const fontStyle = {
    color: "#808080",
  };

  const mutation = useMutation({
    mutationFn: (id) => {
      console.log("from mutation is mutated");
      return updateConversation(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversation"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
    console.log("from handleRead the button is clicked");
  };

  return (
    <>
      <div className="chats">
        {loading ? (
          "Loading..."
        ) : error ? (
          "Error.."
        ) : (
          <div className="container-lg">
            {/* Start title */}
            <div className="title main-font">
              <h1 className="mt-5">Chats</h1>
            </div>
            {/* Start Table of messages */}
            <table className="w-100">
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
            {/* Box 1 */}
            {conversationData.map((c) => (
              <div
                key={c.id}
                className={`box mb-3 px-3 flex justify-between align-items-center ${
                  (currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer)
                    ? "bg-blue-100 border-1 border-gray-400"
                    : "bg-white"
                }  rounded-md shadow-sm mt-3`}
              >
                <div className="person flex align-items-center gap-2 p-2">
                  <span className="main-font" style={fontStyle}>
                    {currentUser.isSeller ? c.buyerId : c.sellerId}
                  </span>
                  <span>
                    <img
                      src="public/assets/buyer1.jpg"
                      alt="buyer 1"
                      className="w-10 h-10 rounded-full"
                    />
                  </span>
                </div>
                <Link to={`/message/${c.id}`} className="text-decoration-none">
                  <div className="message main-font py-3" style={fontStyle}>
                    {c?.lastMessage?.substring(0, 50)}...
                  </div>
                </Link>
                <div className="date main-font" style={fontStyle}>
                  {moment(c.updatedAt).fromNow()}
                </div>
                {((currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer)) && (
                  <button
                    className="main-font text-sm w-fit py-2 px-3 bg-blue-400 text-white hover:bg-blue-300 rounded"
                    onClick={() => handleRead(c.id)}
                  >
                    Mark As Read
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
