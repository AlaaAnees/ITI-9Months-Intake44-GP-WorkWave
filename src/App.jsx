import "react-whatsapp-widget/dist/index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WhatsAppWidget } from "react-whatsapp-widget";

import IsSeller from "./Components/ProtectRoute/IsSeller";
import ProtectedRoute from "./Components/ProtectRoute/ProtectRoute";
import { AuthProvider } from "./Context/authContext";
import ConversationContextProvider from "./Context/ConversationContext";
import GigContextProvider from "./Context/GigsContext";
import { MessageContextProvider } from "./Context/MessageContext";
import CategoriesPage from "./Pages/Categoriespage/CategoriesPage";
import ConversationsList from "./Pages/ConversationsList/ConversationsList";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registeration/Register";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Explore from "./Pages/Explore/explore";
import Profile from "./Pages/Profile/Profile";
import Messages from "./Pages/Messages/Messages";
import Message from "./Pages/Message/Message";
import SingleGig from "./Pages/SingleGig/SingleGig";
import Creategig from "./Pages/Creategig/Creategig";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Components/Payment/Payment";
import Order from "./Pages/Orders/Order";
import WishListCom from "./Components/Wishlist/WishListCom";
import IsAdmin from "./Components/ProtectRoute/IsAdmin";
// import { WishProvider } from "./WishListContext";
// const queryClient = new QueryClient();
const routes = createBrowserRouter([
  // It may be changed or removed at the time of merging
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/profile/:id",
        element: (
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: <CategoriesPage></CategoriesPage>,
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        ),
      },
      {
        path: "/message/:id",
        element: (
          <ProtectedRoute>
            <Message />
          </ProtectedRoute>
        ),
      },
      {
        path: "/conversationList",
        element: (
          <ProtectedRoute>
            <ConversationsList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/singlegig/:id",
        element: <SingleGig></SingleGig>,
      },
      {
        path: "/explore",
        element: <Explore></Explore>,
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <Payment></Payment>
          </ProtectedRoute>
        ),
      },
      { path: "/wishlist", element: <WishListCom></WishListCom> },
      { path: "/order", element: <Order></Order> },
      {
        path: "/newGig",
        element: (
          <ProtectedRoute>
            <IsSeller>
              <Creategig></Creategig>
            </IsSeller>
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <IsAdmin>
              <Dashboard />
            </IsAdmin>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  let queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GigContextProvider>
          <ConversationContextProvider>
            <MessageContextProvider>
              {/* <WishProvider> */}
              <RouterProvider router={routes} />
              {/* </WishProvider> */}
              <WhatsAppWidget
                phoneNumber="+201064592515"
                // textReplyTime="Available 24/7"
                message="Hello! Do you have a question?"
              />
            </MessageContextProvider>
          </ConversationContextProvider>
        </GigContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );

  // return (
  //   <AuthProvider>
  //     <BrowserRouter>
  //       <Navbar />
  //       <Suspense fallback={<Loading />}>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/explore" element={<Explore />} />
  //           <Route path="/become-seller" element={<BecomeSeller />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/register" element={<Register />} />
  //         </Routes>
  //       </Suspense>
  //       <Footer />
  //     </BrowserRouter>
  //   </AuthProvider>
  // );
}

export default App;
