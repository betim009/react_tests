import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchApi (){
      const req = await fetch('https://jsonplaceholder.typicode.com/users');
      const res = await req.json()
      setData(res)
    }
    fetchApi()
  }, [])

  return (
    <>

      <div>
        {data.map(e => (
          <h2>{e.name}</h2>
        ))}
      </div>
    </>
  )
}

export default App
