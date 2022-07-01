import { Link , Outlet} from "react-router-dom"

const Products = () => {
    
    return (
        <>
        <h4>Products</h4>
        <div>
            <input type='search' placeholder="search products" />   
        </div>

        <nav className="secondary-nav">
           <Link to='featured'> Featured</Link>
           <Link to='new'> New</Link>
           <Outlet/>
        </nav>
        </>
        
    )
}
export default Products