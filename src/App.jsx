import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import Chats from "./Pages/Chats/Chats";
import ConversationContextProvider from "./Context/ConversationContext";
import ConversationsList from "./Pages/ConversationsList/ConversationsList";

const routes = createBrowserRouter([
  // It may be changed or removed at the time of merging
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error></Error>,
      },
      {
        path: "/chats",
        element: <Chats />,
        errorElement: <Error></Error>,
      },
      {
        path: "/chat",
        element: <Chat />,
        errorElement: <Error></Error>,
      },
      {
        path: "/conversationlist",
        element: <ConversationsList />,
        errorElement: <Error></Error>,
      },
      {
        path: "*",
        element: <Error />,
        errorElement: <Error></Error>,
      },
    ],
  },
]);

function App() {
  return (
    <ConversationContextProvider>
      <RouterProvider router={routes}></RouterProvider>;
    </ConversationContextProvider>
  );
}

export default App;
