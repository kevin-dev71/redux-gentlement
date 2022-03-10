import type { TStore } from "redux/store"
import { useSelector } from "react-redux"

const PanelRight = () => {
  const { users } = useSelector((state: TStore) => state.profileReducer)

  return (
    <div>
      <h3>Component 2</h3>
      {users.length > 0 ? (
        <ul>
        {users.map((user) => <li key={user.id}>{`${user.name} ${user.lastName}`}</li>)}
      </ul>) : (
        <h4>No users in state</h4>
      )}
    </div>
  )
}

export default PanelRight
