import { Outlet, useSearchParams } from "react-router-dom"

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
            <h2>User4</h2>
            <Outlet></Outlet>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filters</button>
            </div>

            {
                showActiveUsers ? <h2>Showing active users</h2>:<h2>showing all users</h2>
            }


        </div>
    )
}
export default Users