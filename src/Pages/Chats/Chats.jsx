import { Link } from "react-router-dom";

export default function Chats() {
  const currentUser = {
    id: 1,
    userName: "Mahmoud",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  const fontStyle = {
    color: "#808080",
  };

  return (
    <>
      <div className="chats">
        <div className="content">
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
          <div className="box px-3 flex justify-between align-items-center bg-blue-100 border-1 border-gray-400 rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="btn">
              <button className="main-font text-sm w-fit py-2 px-3 bg-blue-400 text-white hover:bg-blue-300 rounded">
                Mark As Read
              </button>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box px-3 flex justify-between align-items-center bg-white rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="w-36"></div>
          </div>
          {/* Box 3 */}
          <div className="box px-3 flex justify-between align-items-center bg-blue-100 border-1 border-gray-400 rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="btn">
              <button className="main-font text-sm w-fit py-2 px-3 bg-blue-400 text-white hover:bg-blue-300 rounded">
                Mark As Read
              </button>
            </div>
          </div>
          {/* Box 4 */}
          <div className="box px-3 flex justify-between align-items-center bg-white rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="w-36"></div>
          </div>
          {/* Box 5 */}
          <div className="box px-3 flex justify-between align-items-center bg-white rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="w-36"></div>
          </div>
          {/* Box 6 */}
          <div className="box px-3 flex justify-between align-items-center bg-white rounded-md shadow-sm mt-3">
            <div className="person flex align-items-center gap-2 p-2">
              <span className="main-font" style={fontStyle}>
                Mahmoud Abdelaziz
              </span>
              <span>
                <img
                  src="public/assets/buyer1.jpg"
                  alt="buyer 1"
                  className="w-10 h-10 rounded-full"
                />
              </span>
            </div>
            <Link to="/chat/123" className="text-decoration-none">
              <div className="message main-font py-3" style={fontStyle}>
                {message.substring(0, 50)}...
              </div>
            </Link>
            <div className="date main-font" style={fontStyle}>
              a few second ago
            </div>
            <div className="w-36"></div>
          </div>
        </div>
      </div>
    </>
  );
}
