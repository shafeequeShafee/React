
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Order is Confirmed.....</h4>
            <button onClick={()=>navigate('/')}>Back to Home</button>
            <button onClick={()=>navigate(-1)}>Go Back</button>
   
        </div>
    )
}
export default OrderSummary