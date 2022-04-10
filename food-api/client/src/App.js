import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setData(data.message))
  }, [])

  console.log(data)

  return (
    <div>
      <p>{!data ? 'loading...' : data}</p>
    </div>
  )
}

export default App;
