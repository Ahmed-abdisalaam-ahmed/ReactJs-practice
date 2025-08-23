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
    const fetchUser = async()=>{
      setLoading(true)
      try {
        const respone = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await respone.json()
        console.log(data)
        setUser(data)
        setLoading(false)
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