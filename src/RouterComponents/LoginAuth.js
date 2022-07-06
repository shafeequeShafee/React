import { useState } from "react"
import { useAuth } from "./auth"
import {useNavigate, useLocation} from 'react-router-dom'

const LoginAuth = () => {
    const location= useLocation()
    const redirectPath =location.state?.path || '/'

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () =>{
        auth.login(user)
        // navigate('/', {replace:true})

        navigate(redirectPath, {replace:true})
    }
    
    
    return (
        <div>
            <h2>LOGIN PAGE</h2>
            <label>
                username:<input  type='text' onChange= {e =>setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    )
}
export default LoginAuth