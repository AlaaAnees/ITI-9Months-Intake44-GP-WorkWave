import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UseLocalStorage = (callback) => {
  useEffect(() => {
    const handleStorageChange = () => {
      callback(JSON.parse(localStorage.getItem("user")));
      callback(JSON.parse(localStorage.getItem("token")));
    };

    // Listen for the storage event
    window.addEventListener("storage", handleStorageChange);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [callback]);
};
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  // Update user data in context when local storage changes
  UseLocalStorage((newUserData) => {
    setUserData(newUserData);
  });

  // console.log("From auth context", token);

  return (
    <AuthContext.Provider value={{ userData, setUserData, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop validation for AuthProvider component
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' prop is provided and is a valid React node
};

export { AuthContext, AuthProvider };
