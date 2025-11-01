import React, {useContext} from "react"
import UserContext from "./UserContext"

export const UserProfile = () => {

   const user = useContext(UserContext)

return (
    <div>
        <h1>userProfile</h1>
        <h3>{user.name}</h3>
    </div>
  )
}
