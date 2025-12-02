import React from 'react'
import { useParams } from 'react-router'
import {users} from './UserList'

const UserProfile = () => {

    const {userId} = useParams();

    const userInfo = users.filter(user => user.id == userId)[0]
    console.log("user in fo ", userInfo)



  return (
    <div>
        <h1>UserProfile</h1>
        <p>userId : {userInfo.id}</p>
        <p>userName : {userInfo.primaryTitle}</p>
        <img src={userInfo.primaryImage} alt="image" 
        className='w-xl'
        />
    </div>
  )
}

export default UserProfile