import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* It may be changed or removed at the time of merging */}
        <Outlet></Outlet>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
