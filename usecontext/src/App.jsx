// import { Header } from './component User/Header'
// import UserContext from './component User/UserContext'
// import {useState} from 'react'

// const App = () => {
  
//   const [user,setUser] = useState({ name: "Ahmed" , role:"student"})
//   return (
//     <UserContext.Provider value={user}>
//       <h1>heloo World</h1>
//       <Header/>
//     </UserContext.Provider>
//   )
// }

// export default App

import React ,{useState}from 'react'

import ThemeContext from './ThemeContext'

import ThemeComponent from './ThemeComponent'

const App = () => {
  const [theme , setTheme] = useState('light')

  const ToggleHandle = ()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }


  return (
    <ThemeContext.Provider value={theme}>
      <ThemeComponent/>
      <button onClick={ToggleHandle}>Switch by {theme}</button>
    </ThemeContext.Provider>
  )
}

export default App
