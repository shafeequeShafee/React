import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ordering = () => {
  const country ="Canada"
  const navigate = useNavigate()
  return (
    <>
    <div>Ordering</div>
    <button onClick={()=>navigate('/order/filter',{state:{id:1,country:country}})}>Buy</button>
    </>
    
  )
}

export default Ordering