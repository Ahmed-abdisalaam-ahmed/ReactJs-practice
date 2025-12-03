import React, { useContext } from 'react'
import { AuthContext } from './Authcontext'

const ProtectedRouter = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)  
    return (
    <div>ProtectedRouter</div>
  )
}

export default ProtectedRouter