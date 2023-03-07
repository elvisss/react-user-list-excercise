import React, { useState } from 'react'
import { users } from '../data/userList'

export const UserList = ({ title }) => {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }
  
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {users.map((user, index) => (
          <li key={`item-${index}`}>
            {user.name} {show ? (<a href={`mailto:${user.email}`}>{user.email}</a>) : ''}
          </li>
        ))}
      </ul>
      <button onClick={handleShow}>Toggle Emails</button>
      {/* <button onClick={() => setShow(!show)}>Toggle Emails</button> */}
    </>
  )
}