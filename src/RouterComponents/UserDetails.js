import { useParams } from "react-router-dom"
const UsersDetails = () => {
    const params = useParams()
    // const userId = params.userId
    const {userId}= params
    return (
        <div>
            <h2>Details about users {userId}</h2>  
        </div>
    )
}
export default UsersDetails