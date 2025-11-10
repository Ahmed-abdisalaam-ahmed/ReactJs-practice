import { useRef, useEffect } from 'react'

const InputRef = () => {

    // mutable(useRef) waa marka aad rabto in aad keydiso value aan dib u renderin component-ka , iyo inaan qiimaha(value) ga directirey  uga badali karo
  // unmutable(useState)waa marka automatic dib u renderin component-ka kadib markaa value ga la badalo , si aan uga badalo aray cusub ayuu sameyn iyo qiima cusub
  
    const inputRef = useRef(null);

    useEffect(()=>{
      if(inputRef.current){
        inputRef.current.focus();
      }
    },[])

    console.log(inputRef);

  return (
    <div>
      <h1>useRef Hook Example</h1>
      <input ref={inputRef} type="text" placeholder="focus me on mount!" />
    </div>
  )
}

export default InputRef