import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Mi Aplicación React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Contador: {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar los cambios
        </p>
      </div>
    </div>
  )
}

export default App