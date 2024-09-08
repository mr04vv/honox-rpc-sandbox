import { useEffect, useState } from 'hono/jsx'
import { client } from '../lib/client'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  useEffect(() => {
    (async () => {
      const res = await client.index.$get()
      const json = await res.json()
      setMessage(json.message)
    })()
    
  }, [])
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
