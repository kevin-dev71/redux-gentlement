import type { TStore } from "redux/store"
import { removeUser, editUser, TUser } from "redux/slices/profile"
import { useDispatch, useSelector } from "react-redux"

const PanelLeft = ({formUser}: {formUser: TUser}) => {
  const { users } = useSelector((state: TStore) => state.profileReducer)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Component 1</h3>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>{`${user.name} ${user.lastName}`}</div>

              <button
                className="btn"
                onClick={() => dispatch(removeUser(user))}
              >
                Delete User
              </button>
              <button
                className="btn"
                onClick={() => {
                  if (!!!formUser.name || !!!formUser.lastName)
                    return alert("Please fill all fields")
                  dispatch(editUser({ ...formUser, id: user.id }))
                }}
              >
                Modify User
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h4>No users in state</h4>
      )}
    </div>
  )
}

export default PanelLeft
