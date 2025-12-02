import { Outlet,  } from 'react-router-dom'
import  "./index.css"
import Nav from '../components/Nav';

const App = () => {


  return (
    <div>
      <Nav/>
      <main>
         <Outlet/>
      </main>
    </div>
    
  )
}

export default App