import './App.css'
import { UserList } from './components/UserList'
import { UserListWithHook } from './components/UserListWithHook'
import { UserListClass } from './components/UserListClass'

function App() {
  return (
    <div className="App">
      <UserList title={'Normal'} />
      <hr />
      <UserListWithHook title={'With Hook'} />
      <hr />
      <UserListClass title={'With Class'} />
    </div>
  )
}

export default App
