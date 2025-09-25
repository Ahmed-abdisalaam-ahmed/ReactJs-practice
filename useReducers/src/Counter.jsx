import { useState } from "react";

// initial state -> 
// reducer function
const Counter = () => {
    const [counter , setCounter ] = useState(0)

    return (
        <div>
            <button onClick={()=> setCounter(counter + 1)}>increment </button>
            {counter}
            <button onClick={()=> setCounter(counter - 1)}>decrement</button>
        </div>
    )
}
export default Counter;