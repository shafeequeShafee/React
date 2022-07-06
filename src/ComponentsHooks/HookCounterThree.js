
import React ,{useState} from 'react'

const HookCounterThree = () => {
    // state varriable can be number , string , boolean,object, or array 
    const [name, setName] = useState({firstName: "", lastName:""})
  return (
    <>
      <h2>Hook Counter Three</h2>
      <form>
        <input type='text' placeholder='firstName' value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})} />
        <input type='text' placeholder='lastName' value={name.lastName}   onChange={e=>setName({...name, lastName:e.target.value})}/>
        <h4> your first Name is {name.firstName}</h4>
        <h4>your last Name is {name.lastName}</h4>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </>
    
  )
}

export default HookCounterThree