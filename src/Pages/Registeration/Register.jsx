import {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { jwtDecode } from 'jwt-decode';
import {
  FaEye,
  FaEyeSlash,
  FaRegCheckCircle,
} from 'react-icons/fa';
import {
  MdDeleteForever,
  MdErrorOutline,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import { GoogleLogin } from '@react-oauth/google';

import SuccessModal from '../../Components/registration-modal/RegModal';
import { AuthContext } from '../../Context/authContext';
import FacebookAuthComponent from '../Login/FaceBook';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [description, setDescription] = useState("");
  const [passwordMatching, setPasswordMatching] = useState(true);
  const [selectedPic, setSelectedPic] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const matchPassword = useCallback(() => {
    setPasswordMatching(password === confirmPassword);
  }, [password, confirmPassword]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [skillsInput, setSkillsInput] = useState("");
  const [skills, setSkills] = useState([]);
  const addSkill = () => {
    setSkills([...skills, skillsInput]);
    setSkillsInput("");
  };
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };
  useEffect(() => {
    matchPassword();
  }, [confirmPassword, matchPassword]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedPic(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
    console.log(selectedPic);
  };
  const validateInputs = () => {
    let isValid = true;

    if (!firstName) {
      setFirstNameError("First Name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!userName) {
      setUserNameError("User Name is required");
      isValid = false;
    } else {
      setUserNameError("");
    }

    if (!email) {
      setEmailError("Email Address is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirmation Password is required");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (!country) {
      setCountryError("Country is required");
      isValid = false;
    } else {
      setCountryError("");
    }

    if (!phoneNumber) {
      setPhoneNumberError("Phone Number is required");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    return isValid;
  };

  const { setUserData } = useContext(AuthContext);

  const handleFacebookLogin = async (response) => {
    console.log(response);
    const facebookUser = {
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      username: response.data.first_name + response.data.last_name,
      email: response.data.email,
      img:
        response.data.picture.url ||
        "/assets/imgs/profile-default-icon-2048x2045-u3j7s5nj.png",
      isSeller: false,
      phone: "00",
      country: "**",
      password: "**",
      desc: "",
    };
    try {
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(facebookUser),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();

        console.log(facebookUser);
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
        );
      }
      setIsLoading(false);

      setRegSuccess(true);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error.message);
      setIsLoading(false);
    }
  };

  const responseMessage = async (response) => {
    const credentialResopnseDecoded = jwtDecode(response.credential); //
    console.log(credentialResopnseDecoded);
    const userGoogle = {
      firstName: credentialResopnseDecoded.given_name,
      lastName: credentialResopnseDecoded.family_name,
      username:
        credentialResopnseDecoded.given_name +
        credentialResopnseDecoded.family_name +
        "anyy",
      email: credentialResopnseDecoded.email,
      img: credentialResopnseDecoded.picture,
      isSeller: false,
      phone: "",
      country: "**",
      password: "**",
      desc: "",
    };
    try {
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userGoogle),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message from the response
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
        );
      }
      setIsLoading(false);

      setRegSuccess(true);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error.message);
      setIsLoading(false);
    }

    console.log(userGoogle);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateInputs() || !passwordMatching) {
      console.error("Form validation failed");
      setIsLoading(false);
      return;
    }

    console.log("Submitting form...");
    const user = {
      firstName,
      lastName,
      username: userName,
      email,
      password,
      confirmPassword,
      country,
      phone: phoneNumber,
      desc: description,
      img: previewUrl,
      isSeller,
      skills,
    };
    console.log(user);

    try {
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message from the response

        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
        );
      }
      setIsLoading(false);

      setRegSuccess(true);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      {regSuccess && <SuccessModal />}
      <div className="bg-blue-50 flex items-center justify-center py-20 relative">
        <img
          src="../../../public/assets/imgs/Shapes.png"
          alt=""
          className="absolute top-0 right-0"
        />
        <div className="bg-white w-10/12 md:w-3/5 flex flex-col items-center justify-center py-10 rounded-3xl">
          <h2 className="sub-font-2 font-bold text-2xl">Register</h2>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 my-10 items-center">
            <FacebookAuthComponent handleFacebookLogin={handleFacebookLogin} />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
          <p className="flex gap-1 text-[#bbb]">
            <p className="-translate-y-1">ــ</p>
            <p>OR</p>
            <p className="-translate-y-1">ــ</p>
          </p>
          <form action="" className="w-3/4 md:w-1/2" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="outline-none border-b-2 w-full p-2"
            />
            {firstNameError && (
              <span className="text-danger  flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {firstNameError}
              </span>
            )}
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            {lastNameError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {lastNameError}
              </span>
            )}
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            {userNameError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {userNameError}
              </span>
            )}
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            {emailError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {emailError}
              </span>
            )}
            <div className="relative">
              <input
                type={!passwordVisibility ? "password" : "text"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="outline-none border-b-2 w-full mt-4 p-2"
              />
              {/* Conditionally render eye icons based on password visibility */}
              {!passwordVisibility ? (
                <FaEyeSlash
                  className="absolute top-1/2 right-2 cursor-pointer text-[#bbb]"
                  onClick={() => setPasswordVisibility(true)}
                />
              ) : (
                <FaEye
                  className="absolute top-1/2 right-2 cursor-pointer text-[#bbb]"
                  onClick={() => setPasswordVisibility(false)}
                />
              )}
            </div>

            {passwordError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {passwordError}
              </span>
            )}
            <div className="relative">
              <input
                type={!confirmPasswordVisibility ? "password" : "text"}
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  matchPassword();
                }}
                value={confirmPassword}
                className="outline-none border-b-2 w-full mt-4 p-2"
              />
              {!confirmPasswordVisibility ? (
                <FaEyeSlash
                  className="absolute top-1/2 right-2 cursor-pointer text-[#bbb]"
                  onClick={() => setConfirmPasswordVisibility(true)}
                />
              ) : (
                <FaEye
                  className="absolute top-1/2 right-2 cursor-pointer text-[#bbb]"
                  onClick={() => setConfirmPasswordVisibility(false)}
                />
              )}
            </div>

            {confirmPasswordError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {confirmPasswordError}
              </span>
            )}
            {!passwordMatching && (
              <span className="text-danger flex text-xs items-center gap-1 ">
                <MdErrorOutline /> The confirmation password does not match the
                password
              </span>
            )}
            <input
              type="text"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            {countryError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {countryError}
              </span>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            {phoneNumberError && (
              <span className="text-danger flex text-xs items-center gap-1">
                <MdErrorOutline className="mt-[2px]" />
                {phoneNumberError}
              </span>
            )}
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            <input
              type="text"
              placeholder="Add Skill ..."
              onChange={(e) => setSkillsInput(e.target.value)}
              value={skillsInput}
              className="outline-none border-b-2 w-full mt-4 p-2"
            />
            <div className="mt-3 flex gap-2">
              {skills.map((skill) => {
                return (
                  <span
                    key={skill}
                    className=" text-[#bbb] border-2 flex items-center justify-between  gap-3 ps-2  border-[#bbb]   py-1 rounded-lg  transition-all duration-300 "
                  >
                    {skill}{" "}
                    <MdDeleteForever
                      className="hover:text-red-800 cursor-pointer"
                      onClick={() => removeSkill(skill)}
                    />
                  </span>
                );
              })}
            </div>
            {skillsInput && (
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 mt-2"
                onClick={addSkill}
              >
                Add
              </button>
            )}
            <label
              htmlFor="profile"
              className="block bg-white border-2 border-blue-500 text-blue-500 font-semibold cursor-pointer rounded-lg w-fit p-3 mt-4  hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {selectedPic ? (
                <p className="flex items-center gap-2">
                  Profile Picture Uploaded <FaRegCheckCircle />
                </p>
              ) : (
                "Upload Profile Picture"
              )}
            </label>

            <input
              className="hidden"
              type="file"
              id="profile"
              onChange={handleFileChange}
            />
            <input
              type="checkbox"
              id="seller"
              className="mt-6 me-3"
              onChange={(e) => setIsSeller(e.target.checked)}
            />
            <label htmlFor="seller" className="sub-font-3 font-normal ">
              I want to be a seller
            </label>
            <button className="outline-none bg-blue-300 font-bold text-[20px] mt-3 text-white w-full py-2 px-4 rounded-xl hover:bg-blue-500 transition-all duration-300">
              {isLoading ? <SyncLoader color="white" /> : "Create"}
            </button>
          </form>
          <p className="flex gap-5 text-[#bbb] mt-5">
            Do you have account ?{" "}
            <NavLink to={"/login"} className="underline text-blue-600">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
