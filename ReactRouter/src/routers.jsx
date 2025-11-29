import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import App from "./App";
import NotFound from "../components/NotFound";
import Context from "./pages/Context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "context",
        element: <Context />,
      }
    ],
  },
]);
export default router;
