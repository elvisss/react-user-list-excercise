import { users } from '../data/userList'
import { useShow } from '../hooks/useShow'

export const UserListWithHook = ({ title }) => {
  const { show, toggleShow } = useShow()

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {users.map((user, index) => (
          <li key={`item-${index}`}>
            {user.name} {show ? <a href={`mailto:${user.email}`}>{user.email}</a> : ''}
          </li>
        ))}
      </ul>
      <button onClick={toggleShow}>Toggle Emails</button>
    </>
  )
}
