import { useState } from "react";
import Greeting from "./greeting";
import Notifications from "./nofication";
import ToggleMessage from "./toggleMassege";


// function App() {
//   const ToDo = ["Apple" ,"Bannana" ,"Orange"];
//   const fruits = [
//     {id:1 , name:"ahmed", Age:12},
//     {id:2 , name:"said", Age:12},
//     {id:3 , name:"potato", Age:12}
//   ]

//   // const [user, setUser] = useState(null)
// return(
//   <ul>
//     {
//       fruits.map((fruit , index) => {

//       <li key={index}>{fruit.name}</li>
// })
//     }
//   </ul>
// )
// }
// export default App;

// const App = ()=>{
//   // const [isLoggedIn ,setIsLoggedin] = useState(true)
//     const [unreadMessages , setUnreadMessages] = useState(["React" , "Re: React"])
//   return(
  
//       //  <Greeting isLoggedIn={isLoggedIn}/>
//       <Notifications unreadMessages={unreadMessages} />
    
//   ) 
// }
// export default App;



const App = ()=>{
  return(
    <div>
        <ToggleMessage />
    </div>
  )
}
export default App;