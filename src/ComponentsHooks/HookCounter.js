import React, {useState} from 'react'



const HookCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <h2>Hook Counter One</h2>
    <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </>
    
  )
}

export default HookCounter