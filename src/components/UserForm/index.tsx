import styles from './UserForm.module.css'
import { addUser, TUser } from "redux/slices/profile"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import type { TStore } from 'redux/store'

type Props = {
  user: TUser
  setUser: React.Dispatch<React.SetStateAction<TUser>>
}

const UserForm: React.FC<Props> = ({
  user,
  setUser,
}) => {
  const { users } = useSelector((state: TStore) => state.profileReducer)
  const dispatch = useDispatch()

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addUser([...users, { ...user, id: uuidv4() }]))
        }}
      >
        <div className={styles.column}>
          <div className={styles["form-control"]}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="username"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Last Name:</label>
            <input
              type="text"
              placeholder=""
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>
        <div>
          <button className="btn">Add User</button>
        </div>
      </form>
    </section>
  )
}

export default UserForm
