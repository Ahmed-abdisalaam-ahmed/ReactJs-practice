import { useState } from "react";

const toggleMassage = () => {

  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {
        isVisible && <p>This is a toggled message!</p>
      }
    </div>
  )
}

export default toggleMassage;