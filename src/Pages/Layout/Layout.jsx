import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Home-page-components/Footer";
import Loading from "../Loading/Loading";

function Layout() {
  const { state } = useNavigation();
  console.log(state);

  return (
    <>
      {state == "loading" && <Loading></Loading>}
      {state == "idle" && (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default Layout;
