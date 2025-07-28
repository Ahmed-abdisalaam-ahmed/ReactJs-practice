import ShoppingCart from './Todo';

// indroduction of useState

// function App(){

//   const [count , useCount] = useState(0);
//   const incerment = ()=> {
//     useCount(count + 1);

//     console.log(count)
//   }
//   return (
//     <>
//       <h1>heloo world {count}</h1>
//       <button onClick={incerment}> Click the Button</button>
//     </>
//   );
// }

// export default App;


// Toggle of visibilty using useState

// function App (){

//   const [isVisible , useVisible] = useState(true);

//   const toogle =()=>{
//     useVisible(!isVisible)
//   }

//   return (
//     <>
//     <button onClick={toogle}>{isVisible ? 'hide' : 'Show'} the massege</button>
//     {isVisible && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, rerum?</p>}
//     </>
//   )
// }

// export default App;


// form input managment

// function App (){
//   const [Name , setName] = useState("");

//   const handleChange = (event) =>{
//     // console.log(event.target.value)
//     setName(event.target.value)
//   }

//   return (
//     <>
//     <input type="text" value={Name} onChange={handleChange}/>
//     <p>Mr , {Name}</p>
//     </>
//   )
// }

// export default App;

// Exersice 4 

// function App (){
//   const [isClick , setClick] = useState(true);

//   const toogle = () =>{
//    setClick(!isClick)
//   }
//   return (
//     <>
//      <h1>the button is {isClick ? "On" : "Off"}</h1>
//      <button onClick={toogle}>Turn {isClick ? "Off" : "on"}</button>
//     </>
//   )
// }

// export default App;

// Updatting an Object in State

// function App () {

//   const [User , userState] = useState({Name : "ali" , Age: 25 , Bio: "fullsatck"});
//   const UpadateUser = () =>{
//     userState({...User ,Age:User.Age + 1})
//   }

//   return (
//     <>
//     <p>Name: {User.Name} , Age: {User.Age} , Bio: {User.Bio}</p>
//     <button onClick={UpadateUser}>increase the Age</button>
//     </>
//   )
// }

// export default App;

// managing a List of items in a array

// function App(){
//   const [items , SetItems] = useState(["apple", "Straweparey"]);

//   const additem = ()=>{
//     SetItems([...items,"Orange"])
//   }

//   return(
//     <>
//           <ul>
//         {
//           items.map(item =>(
//             <li>{item}</li>
//           ))
//         }
//       </ul>
//       <button onClick={additem}>Add Orange</button>
//     </>

//   )
// }
// export default App;

function App () {
  return(
     <ShoppingCart/>
  )
}
export default App;