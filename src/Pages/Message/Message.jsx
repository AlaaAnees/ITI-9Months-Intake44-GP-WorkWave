import { useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../Utils/newRequist";
import { useContext } from "react";
import { MessageContext } from "../../Context/MessageContext";

function Chat() {
  const { id } = useParams();

  const { fetchMessages, loading, error } = useContext(MessageContext);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  // const queryClient = useQueryClient();

  // const { loading, error, data } = useQuery({
  //   queryKey: ["messages"],
  //   queryFn: () =>
  //     newRequest.get(`/messages/${id}`).then((res) => {
  //       return res.data;
  //     }),
  // });
  console.log("from single Message", fetchMessages);

  return (
    <>
      <div className="caht">
        <div className="content mt-2 container-lg">
          <span className="dirPath main-font text-sm text-gray-500">
            <Link className="text-gray-500" to={"/chats"}>
              Chats
            </Link>{" "}
            {">Mahmoud Abdelaziz>"}
          </span>
          {/* ============ */}
          {loading ? (
            "loooading.."
          ) : error ? (
            "Error"
          ) : (
            <div className="chats flex flex-column my-3 gap-2 p-8 h-[450px] scrollbar-thin  overflow-y-scroll ">
              {/* buyer */}
              {fetchMessages.map((m) => (
                <div key={m._id} className="buyer flex gap-5 max-w-xl">
                  <img
                    src="assets/buyer1.jpg"
                    alt="buyer2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p
                    className="bg-blue-100 max-w-lg py-3 px-4 text-sm"
                    style={{
                      borderRadius: "0px 20px 20px 20px",
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
          <div className="sendMessage flex align-items-center justify-between">
            <textarea
              className="w-[85%] h-[80px] p-3 rounded-lg shadow-sm outline-none border-1 border-blue-100 resize-none scrollbar-thin "
              type="text"
              name="text"
              placeholder="Write a message"
            ></textarea>
            <button className="bg-blue-500 text-white border-none p-2 font-medium main-font rounded-md me-5 w-[100px]">
              Send
            </button>
          </div>
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
// {/* buyer */}
// <div className="buyer flex gap-5 max-w-xl">
// <img
//   src="assets/buyer1.jpg"
//   alt="buyer2"
//   className="w-12 h-12 rounded-full object-cover"
// />
// <p
//   className="bg-blue-100 max-w-lg py-3 px-4 text-sm"
//   style={{
//     borderRadius: "0px 20px 20px 20px",
//     color: "gray",
//   }}
// >
//   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   Officiis
// </p>
// </div>
// {/* buyer */}
// <div className="buyer flex gap-5 max-w-xl">
// <img
//   src="assets/buyer1.jpg"
//   alt="buyer2"
//   className="w-12 h-12 rounded-full object-cover"
// />
// <p
//   className="bg-blue-100 max-w-lg py-3 px-4 text-sm"
//   style={{
//     borderRadius: "0px 20px 20px 20px",
//     color: "gray",
//   }}
// >
//   Autem voluptatum similique culpa id ipsam, suscipit minima
//   enim?
// </p>
// </div>
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
//   Officiis, eaque quas distinctio.
// </p>
// </div>
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
//   Lorem ipsum dolor sit
// </p>
// </div>
// {/* buyer */}
// <div className="buyer flex gap-5 max-w-xl">
// <img
//   src="assets/buyer1.jpg"
//   alt="buyer2"
//   className="w-12 h-12 rounded-full object-cover"
// />
// <p
//   className="bg-blue-100 max-w-lg py-3 px-4 text-sm"
//   style={{
//     borderRadius: "0px 20px 20px 20px",
//     color: "gray",
//   }}
// >
//   Ok, I am Wating😎
// </p>
// </div>
