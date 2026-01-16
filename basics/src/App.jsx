import { useState } from 'react'
import Background from './Background.jsx'
import Passgen from './passgen.jsx'

function App() {
  const [count, setCount] = useState("white")

  return (
     <>
    {/* <Background count={count} setCount={setCount}/> */}
    <Passgen />
    </>
  )
}

export default App
