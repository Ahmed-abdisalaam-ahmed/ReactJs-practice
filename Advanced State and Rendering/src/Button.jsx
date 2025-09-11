import {useState} from 'react';

const button = ({id}) =>{
   
  const handleClick = (id) =>{
    alert("button CLicked!" + id)
  }

  return (
    <button
    //  onClick={() => handleClick(id)}
    onMouseEnter={()=> console.log("Mouse entring!" + id)}
    >Click Me</button>
  )
}
export default button;