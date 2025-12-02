import { useRouteError } from "react-router"
import Nav from "./Nav";


const NotFound = () => {

  const error = useRouteError();
    console.log("error", error);


  return (
    <div >
      <Nav/>
      <h1 className="text-3xl font-bold text-red-500"> {error.status} ---- {error.statusText}-! </h1>
      <p className="text-xl mt-4">The page you are looking for does not exist.</p>
      </div>
  )
}

export default NotFound