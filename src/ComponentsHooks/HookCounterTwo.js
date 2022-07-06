
import React ,{useState} from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count , setCount] = useState(initialCount)

    const incrementFive=()=>{
        for(let i =0 ; i<5 ; i++){
            // it is not working , because it acess to count value not previous value
            // setCount(count + 1)

            setCount(prevCount => prevCount + 1)
        }
    }
    const decrementFive=()=>{
        for(let i =0 ; i<5 ; i++){
            setCount(prevCount => prevCount - 1)
        }
    }
  return (
    <>
    <h2>Hook Counter Two</h2>
    Count: {count}
    <button onClick={()=>setCount(initialCount)}>Reset</button>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
    <button onClick={()=>setCount(count - 1)}>Decrement</button>

    <button onClick={incrementFive}>Increament 5</button>
    <button onClick={decrementFive}>decrement 5</button>

    </>
    
  )
}

export default HookCounterTwo