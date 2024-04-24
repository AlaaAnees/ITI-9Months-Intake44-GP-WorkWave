import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [],
  },
]);

function App() {
  <RouterProvider router={routes}></RouterProvider>;
}

export default App;
