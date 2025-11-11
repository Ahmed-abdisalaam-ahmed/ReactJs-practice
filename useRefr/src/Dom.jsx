import React from 'react'
import { useRef } from 'react'
import './index.css'

const Dom = () => {

    const cardRef = useRef(null);

    const handleToggleHighlight = () => {
        if(cardRef.current){
            cardRef.current.classList.toggle('highlight');
        }
    }


  return (
    <div style={{textAlign:'center'}}>
        <div  ref={cardRef}  className='card'>
            <h2>Interactive Card</h2>
            <p>Clic the button to toggle the highlights</p>
        </div>
        <button onClick={handleToggleHighlight}>
            Toggle Highlight
        </button>
    </div>
  )
}

export default Dom