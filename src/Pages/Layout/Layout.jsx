import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Home-page-components/Footer";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <section className="min-h-screen overflow-hidden">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Layout;
