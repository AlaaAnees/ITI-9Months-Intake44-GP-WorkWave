import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { json, useNavigate } from "react-router";
import { SyncLoader } from "react-spinners";

function BecomeAseller() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [failedLogin, setFailedLogin] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleBecomeASeller(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://workwave-vq08.onrender.com/api/users", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",

          authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("user", JSON.stringify(data.data.user));
      navigate("/newGig");
      if (res.ok) {
        console.log("Success:", data);
      } else {
        setFailedLogin(true);
      }
    } catch (error) {
      setFailedLogin(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-blue-50 flex items-center justify-center py-20 relative">
      <img
        src="../../../public/assets/imgs/Shapes.png"
        alt=""
        className="absolute top-0 right-0"
      />
      <div className="bg-white w-10/12 md:w-3/5 flex flex-col items-center justify-center py-10 rounded-3xl">
        <h2 className="sub-font-2 font-bold text-2xl">Become a Seller</h2>

        <form onSubmit={handleBecomeASeller} className="w-3/4 md:w-1/2">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-b-2 w-full mb-4 p-2"
          />
          <div className="relative">
            <input
              type={!passwordVisibility ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-b-2 w-full mb-4 p-2"
            />
            {!passwordVisibility ? (
              <FaEyeSlash
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#bbb]"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              />
            ) : (
              <FaEye
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#bbb]"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              />
            )}
          </div>
          {failedLogin && (
            <span className="text-red-600 flex text-xs items-center gap-1">
              <MdErrorOutline /> Invalid Email or Password
            </span>
          )}
          <button
            type="submit"
            className="outline-none bg-blue-300 font-bold text-[20px] mt-3 text-white w-full py-2 px-4 rounded-xl hover:bg-blue-500 transition-all duration-300"
          >
            {isLoading ? <SyncLoader color="white" /> : "Become a Seller"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BecomeAseller;
