import { useEffect, useState, startTransition } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import  "index.css"

const App = () => {
  const [visitpage, setVisitpage] = useState(0);
  const location = useLocation();
  useEffect(()=>{
    startTransition(() => {
      setVisitpage((pre) => pre + 1)
    })
  },[location])

  return (
    <div>
      <nav className=''>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Context">Context</NavLink>
      </nav>
      <span>Visit page time {visitpage}</span>
      <Outlet/>
    </div>
    
  )
}

export default App