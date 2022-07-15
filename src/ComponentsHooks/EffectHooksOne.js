import React, {useState,useEffect} from 'react'

const EffectHooksOne = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
  return (
    <>
    <div>EffectHooksOne</div>
    <button onClick={()=>setCount(count + 1)}>Click + {count} times</button>
    <button onClick={()=>setCount(count - 1)}>Click - {count} times</button>
    </>
    
  )
}

export default EffectHooksOne