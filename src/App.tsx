import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Lucas Maciel</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
         Remove (-)
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Add (+)
        </button>

        <h2>Count is {count}</h2>
      </div>
    </div>
  )
}

