import { useContext, useState } from "react";

import { jwtDecode } from "jwt-decode";
import { FaFacebook } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import { GoogleLogin } from "@react-oauth/google";

import { AuthContext } from "../../Context/authContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = {
    email,
    password,
  };

  // const [userGoogle , setUserGoogle] = useState({
  // firstName,
  // lastName,
  // username: userName,
  // email,
  // password,
  // confirmPassword,
  // country,
  // phone: phoneNumber,
  // desc: description,
  // img:
  //   previewUrl ||
  //   "/assets/imgs/profile-default-icon-2048x2045-u3j7s5nj.png",
  // isSeller,
  // });
  const { setUserData, setToken, token } = useContext(AuthContext);
  // console.log(token);

  const responseMessage = async (response) => {
    const credentialResopnseDecoded = jwtDecode(response.credential); //
    // console.log(credentialResopnseDecoded);
    const userGoogle = {
      email: credentialResopnseDecoded.email,
      password: "**",
    };
    try {
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userGoogle),
        }
      );
      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", JSON.stringify(data.data.token));
      setUserData(data.data.user);
      setToken(data.data.token);
      // console.log("brrrrrrrrr", data);

      if (!response.ok) {
        throw new Error("Failed to login user");
      }
      setIsLoading(false);

      navigate("/");

      // console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging user:", error.message);
      setFailedLogin(true);
      setIsLoading(false);
    }
    // console.log(user);

    // console.log(userGoogle);
  };
  const errorMessage = (error) => {
    // console.log(error);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.data.user));
      ///////######################Problem############################################
      localStorage.setItem("token", JSON.stringify(data.data.token));
      // console.log(data);
      const token = data.data.token;
      console.log(token);
      // console.log(data.data.user);
      localStorage.setItem("token", JSON.stringify(data.data.token));
      setUserData(data.data.user);
      setToken(data.data.token);

      if (!response.ok) {
        throw new Error("Failed to login user");
      }
      setIsLoading(false);

      navigate("/");

      // console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging user:", error.message);
      setFailedLogin(true);
      setIsLoading(false);
    }
    // console.log(user);

    // if (LoggedSuccess) ;
  };
  return (
    <div className="bg-blue-50 flex items-center justify-center py-20 relative">
      <img
        src="../../../public/assets/imgs/Shapes.png"
        alt=""
        className="absolute top-0 right-0"
      />
      <div className="bg-white w-10/12 md:w-3/5 flex flex-col items-center justify-center py-10 rounded-3xl">
        <h2 className="sub-font-2 font-bold text-2xl">Sign In</h2>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 my-10">
          <p className="flex items-center gap-3 border border-[#ccc] rounded-lg py-2 px-4 sub-font-2 text-xs font-medium">
            <FaFacebook className="text-3xl text-[#1877F2]" /> Sign in with
            Facebook
          </p>

          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        {/* <p className="flex gap-1 text-[#bbb]">
          <p className="-translate-y-1">ــ</p>
          <p>OR</p>
          <p className="-translate-y-1">ــ</p>
        </p> */}
        <div className="flex gap-1 text-[#bbb]">
          <span className="-translate-y-1">ــ</span>
          <span>OR</span>
          <span className="-translate-y-1">ــ</span>
        </div>

        <form action="" className="w-3/4 md:w-1/2">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none border-b-2 w-full mb-4  p-2"
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none border-b-2 w-full mb-4  p-2"
          />
          {failedLogin && (
            <span className="text-danger flex text-xs items-center gap-1 ">
              <MdErrorOutline /> Inavalid User Name Or Password
            </span>
          )}

          <button
            className="outline-none bg-blue-300 font-bold text-[20px] mt-3 text-white w-full py-2 px-4 rounded-xl hover:bg-blue-500 transition-all duration-300"
            onClick={handleSubmit}
          >
            {isLoading ? <SyncLoader color="white" /> : "Sign In"}
          </button>
        </form>
        <p className="flex gap-5 text-[#bbb] mt-5">
          <span> Do not have account ?</span>
          <NavLink to={"/register"} className="underline text-blue-600">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;

//clientid :   299785498438-cuqobqnku528ra304rbjofmnijau7i8h.apps.googleusercontent.com

//client secrect :   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
