import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Home-page-components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { AuthProvider } from "./Context/authContext";
import Loading from "./Pages/Loading/Loading";

const Home = lazy(() => import("./Pages/Home/Home"));
const BecomeSeller = lazy(() => import("./Pages/Become a seller/BecomeSeller"));
const Explore = lazy(() => import("./Pages/Explore/explore"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Registeration/Register"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
