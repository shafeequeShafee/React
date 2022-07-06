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

           {/* eth rootelement kkaa povaa / koduthal */}
           <Link to='/new'> going to root element</Link>  
           <Link to='/products/new'> change it by</Link>  
           <Outlet/>
        </nav>
        </>
        
    )
}
export default Products