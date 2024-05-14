import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./Context/authContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registeration/Register";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Explore from "./Pages/Explore/explore";
import Profile from "./Pages/Profile/Profile";
import CategoriesPage from "./Pages/Categoriespage/CategoriesPage";
import Messages from "./Pages/Messages/Messages";
import Message from "./Pages/Message/Message";
import ConversationsList from "./Pages/ConversationsList/ConversationsList";
import ConversationContextProvider from "./Context/ConversationContext";
import GigContextProvider from "./Context/GigsContext";
import { MessageContextProvider } from "./Context/MessageContext";
import SingleGig from "./Pages/SingleGig/SingleGig";
// import Wishlist from "./Components/Wishlist/Wishlist";
import Creategig from "./Pages/Creategig/Creategig";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Components/Payment/Payment";
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
      { path: "/profile", element: <Profile></Profile> },
      {
        path: "/categories",
        element: <CategoriesPage></CategoriesPage>,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/conversationList",
        element: <ConversationsList />,
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
        element: <Payment></Payment>,
      },
      // { path: "/wishlist", element: <Wishlist></Wishlist> },
      { path: "/newGig", element: <Creategig></Creategig> },
      { path: "/dashboard", element: <Dashboard /> },
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
              <RouterProvider router={routes} />
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
