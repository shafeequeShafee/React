import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h4>About Page</h4>
            <h5>This is all about you................</h5>
            <Link to='/'>Back To Home</Link>
            <h2><Link to='/about/details'>Details</Link></h2>

            <button onClick={()=>navigate('/about/OrderSummary')}>Place the Order</button>
            

            {/* history illathae akkennekil {{{{very danger}}}} */}
            {/* <button onClick={()=>navigate('/about/OrderSummary',{replace:true})}>Place the Order</button> */}
           
            
            
        </div>
    )
}
export default About