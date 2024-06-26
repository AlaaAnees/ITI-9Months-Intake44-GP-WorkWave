import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/authContext";

function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  // console.log(token);

  return token ? children : null;
}

export default ProtectedRoute;
