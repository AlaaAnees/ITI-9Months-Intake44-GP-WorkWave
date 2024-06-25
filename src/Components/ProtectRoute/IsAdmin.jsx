import { useContext } from "react";

import { AuthContext } from "../../Context/authContext";
import { Navigate } from "react-router";
function IsAdmin({ children }) {
  const { userData } = useContext(AuthContext);
  const { isAdmin } = userData;
  if (isAdmin) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}

export default IsAdmin;
