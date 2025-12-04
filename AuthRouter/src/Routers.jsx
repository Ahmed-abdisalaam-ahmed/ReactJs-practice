import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRouter from "./ProtectedRouter";


export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "dashboard",
                element: (
                    <ProtectedRouter element={<Dashboard/>}/>
                )
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
]);
