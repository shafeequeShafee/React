import { Outlet } from "react-router-dom"

const Users = () => {
    
    return (
        <div>
            <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
            <h2>User4</h2>
            <Outlet></Outlet>
            
        </div>
    )
}
export default Users