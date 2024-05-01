import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

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

  return (
    <AuthContext.Provider value={{ userData, setUserData, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
