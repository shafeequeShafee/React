import { useAuth } from "./auth"
import {useNavigate} from 'react-router-dom'


const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout =()=>{
        auth.logout()
        navigate('/')
    }
    
    return (
        <div>
             <h2>Profile Page</h2>
             <h3>welocome {auth.user}</h3>
             <button onClick={handleLogout}>LogOut</button>
        </div>
        
    )
}
export default Profile