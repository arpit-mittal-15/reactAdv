import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {

  const {user} = useContext(UserContext);

  return (
    <div>{user.name}</div>
  )
}

export default UserProfile