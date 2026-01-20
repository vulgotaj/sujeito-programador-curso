import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("FELIPETAJIMA")

  return (
      <div>
        {username.length >= 5 && <h1>Username muito grande!</h1>}
      </div>
  )
}

export default App
