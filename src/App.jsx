import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registeration/Register";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Profile from "./Pages/Profile/Profile";
import CategoriesPage from "./Pages/Categoriespage/CategoriesPage";
import Chats from "./Pages/Chats/Chats";
import Chat from "./Pages/Chat/Chat";
import ConversationsList from "./Pages/ConversationsList/ConversationsList";
import ConversationContextProvider from "./Context/ConversationContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/conversationList",
        element: <ConversationsList />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <ConversationContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes}></RouterProvider>
        </QueryClientProvider>
      </ConversationContextProvider>
    </AuthProvider>
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
