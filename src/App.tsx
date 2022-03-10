import './App.css'
import UserForm from 'components/UserForm'
import PanelLeft from 'components/PanelLeft'
import PanelRight from 'components/PanelRight'
import { useState } from 'react'

function App() {  
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  })

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <PanelLeft formUser={user} />
        <PanelRight />
      </div>
    </div>
  )
}

export default App
