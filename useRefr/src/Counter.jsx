import React,{ useEffect, useState , useRef} from 'react'

const Counter = () => {

  const [count,setCount] = useState(null);

  const prevCounter = useRef(null)

  useEffect(()=>{
    prevCounter.current = count
  },[count])

  console.log("Previous Count:", prevCounter.current);

  console.log("Current Count:", count);


  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Current: {count}</h2>
      <p>PrevCurrent: {prevCounter.current}</p>
      <button onClick={()=> setCount(count + 1)}>Increament</button>
    </div>
  )
}

export default Counter