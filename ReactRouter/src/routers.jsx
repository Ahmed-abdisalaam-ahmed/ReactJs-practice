import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import App from "./App";
import NotFound from "../components/NotFound";
import Context from "./pages/Context";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import ProductDetails from "./pages/ProductDetails";
import Overview from "../components/Overview";
import DashboardDetails from "../components/DashboardDetails";
import Settings from "../components/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "context",
        element: <Context />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "users/:userId",
        element: <UserProfile />,
      },
      {
        path: "products/:categoryId/:productId",
        element: <ProductDetails />,
      },
      {
        path: "products/:categoryId",
        element: <ProductDetails />,
      },
      {
        path: "dashboard",
        element: <DashboardDetails/>,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
export default router;
