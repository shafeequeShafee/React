
import React ,{useState} from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count , setCount] = useState(initialCount)
    console.log("count",count)

    // const incrementFive=()=>{
    //     for(let i =0 ; i<5 ; i++){
    //         // it is not working , because it acess to count value not previous value
    //         // setCount(count + 1)

    //         setCount(prevCount => prevCount + 1)
    //     }
    // }
    const increment=()=>{
        const f1=()=>{
           console.log("f1")
        }
        const f2=()=>{
            console.log("f2")
        }
        f1()
        f2()
        decrementFive()
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

    <button onClick={increment}>Increament 5</button>
    <button onClick={decrementFive}>decrement 5</button>

    </>
    
  )
}

export default HookCounterTwo