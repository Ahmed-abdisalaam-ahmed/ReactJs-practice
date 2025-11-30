import React from 'react'
import { Link } from 'react-router'

const UserList = () => {

    const users = [
        {id:1, name:"Alice"},
        {id:2, name:"Bob"},
        {id:3, name:"Charlie"},
    ]


  return (
    <div>
        <h1 className='text-3xl font-bold'>User List Page</h1>
        <ul>
            {
                users.map(user=>(
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
export default UserList