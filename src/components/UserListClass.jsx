import React from 'react'
import { users } from '../data/userList'

export class UserListClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {users.map((user, index) => (
            <li key={`item-${index}`}>
              {user.name}{' '}
              {this.state.show ? (
                <a href={`mailto:${user.email}`}>{user.email}</a>
              ) : (
                ''
              )}
            </li>
          ))}
        </ul>
        <button onClick={this.toggleShow}>Toggle Emails</button>
      </div>
    )
  }
}
