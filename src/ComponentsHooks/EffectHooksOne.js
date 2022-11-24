import React, {useState,useEffect} from 'react'

const EffectHooksOne = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })

    const setTitle=()=>{
      setCount(count + 2)
      document.title = `you clicked ${count} times`
    }


  return (
    <>
    <div>EffectHooksOne</div>

    <button onClick={()=>setCount(count + 1)}>Click + {count} times</button>
    <button onClick={()=>setCount(count - 1)}>Click - {count} times</button>
    <button onClick={()=>setTitle()}>Click + {count} times 2</button>
    </>
    
  )
}

export default EffectHooksOne