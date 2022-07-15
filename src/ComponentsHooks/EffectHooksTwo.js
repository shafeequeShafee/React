import React, {useState,useEffect} from 'react'

const EffectHooksTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('useEffect updating document Title')
        document.title = `you clicked ${count} times`
    },[count])
  return (
    <>
    <div>EffectHooksTwo</div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={()=>setCount(count + 1)}>Click + {count} times</button>
    <button onClick={()=>setCount(count - 1)}>Click - {count} times</button>
    </>
  )
}

export default EffectHooksTwo