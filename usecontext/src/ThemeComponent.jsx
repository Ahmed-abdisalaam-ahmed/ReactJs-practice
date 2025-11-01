import React,{useContext} from 'react'
import ThemeContext from './ThemeContext'


const ThemeComponent = () => {

const theme = useContext(ThemeContext)

const style = {
    background : theme === "light" ? "#ffffffff" : "#000",
    color : theme === "light" ? "#000" : "#fff" ,
    padding : "50px",
    TextAlign : "center"
}
  return ( 
        <p style={style}>The is {theme}-themed Component</p>
  )

}

export default ThemeComponent