import { useEffect, useState } from "react";

//Ex 1: change the document title using useEffect
// const App = ()=>{

//   const [title,setTitle] = useState("hamuuda");
//   const [name ,setName] = useState("i like thae")

//   useEffect(()=>{
//       document.title = title;
//       console.log(title)
//   },[titl])

//   return (
//   <div>
//     <h2>type to change the document title :</h2>
//     <input
//      type="text"
//      onChange={(e)=> setTitle(e.target.value)}
//      value={title}
//      />
//     <input
//      type="text"
//      onChange={(e)=> setName(e.target.value)}
//      value={name}
//      />
//   </div>

//   )
// };

//Ex 2: Window resize Event
// const App = ()=>{

//   const [width , setWidth] = useState(window.innerWidth);
//   const [height , setHeight] = useState(window.innerHeight);

//   useEffect(()=>{
//     console.log("monoting .......");
//     const handleresize = (e)=> {
//       setWidth(e.clientX)
//       setHeight(e.clientY);
//     }
//     window.addEventListener("mousemove",(e)=>{
//       handleresize(e)
//     });
//   },[])

//   return(
//     <>
//         <h1>this the width od window {width}px</h1>
//         <h1>this the height od window {height}px</h1>

//     </>
//   )

// }
// export default App;

// EX 3:Stopwatch timer

// const App = ()=>{
//   const [isTime, setTime] = useState(0);
//   const [isRunning, setRunning] = useState(false)

//   useEffect(()=>{
//     console.log("shaqay")
//     let timeId;
//     if(isRunning){
//       timeId = setInterval(() => {
//       setTime((prev)=> prev + 1)
//     }, 1000);
//     }
//     return () => clearInterval(timeId)
//   },[isRunning])

//   function handleStart(){
//     setRunning(true)
//   }
//   function handleStop(){
//     setRunning(false)
//   }
//   function handleReset(){
//     setRunning(false)
//     setTime(0)
//   }

//   return (
//     <div>
//       <h1>Settime by {isTime} Second</h1>
//       <button disabled={isRunning} onClick={handleStart}>Start</button>
//       <button disabled={!isRunning} onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>reset</button>
//     </div>
//   )
// }
// export default App;

// Ex 4:Simple Data fetching
const App = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    setLoading(true)
    const fetchUser = async()=>{

      await new Promise((resolve)=> setTimeout(resolve , 10000))
      
      try {
        const respone = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await respone.json()
        console.log(data)
        setUser(data)
      }catch (error) {
        console.error(`THIS THE ERROR :${error}`)
      }

    }
    fetchUser()
  },[]);
if(loading) return <h1>Loading</h1>
  return (
    <div>
      <h1>Fetching Data Api</h1>
      <ul>
        {
         users.map((u)=>(
            <li>{u.name}</li>
         ))
        }
      </ul>
    </div>
  );
};

export default App;
// // import { useState } from "react";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState("");

//   const fetchData = async () => {
//      // prevent empty fetch
// if (!query) return;
//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // optional delay
//       const response = await fetch(`https://api.github.com/users/${query}`);
//       const data = await response.json();
//       setUser(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Enter the Username:</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={fetchData}>Search</button>

//       {loading && <p>Loading...</p>}

//       {user && !user.message && (
//         <div>
//           <h1>{user.name}</h1>
//           <img
//             src={user.avatar_url}
//             alt={user.name}
//             style={{ borderRadius: "60px", width: "150px" }}
//           />
//           <h2>Location: {user.location || "N/A"}</h2>
//           <h2>Following: {user.following}</h2>
//           <p>Bio: {user.bio || "No bio available"}</p>
//         </div>
//       )}

//       {user && user.message && <p>User not found</p>}
//     </div>
//   );
// };

// export default App;