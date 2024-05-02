import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registeration/Register";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Profile from "./Pages/Profile/Profile";
import CategoriesPage from "./Pages/Categoriespage/CategoriesPage";
import Messages from "./Pages/Messages/Messages";
import Message from "./Pages/Message/Message";
import ConversationsList from "./Pages/ConversationsList/ConversationsList";
import ConversationContextProvider from "./Context/ConversationContext";
import { QueryClient, QueryClientProvider } from "react-query";
// render as we fetch
import { laoder as categoriesLoader } from "./Components/Home-page-components/Categories";
import GigContextProvider from "./Context/GigsContext";
import { MessageContextProvider } from "./Context/MessageContext";

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
        loader: categoriesLoader,
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
    ],
  },
]);

function App() {
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
}

export default App;
