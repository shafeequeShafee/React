// eth ok annu but njammaku active link thirich ariyannekil {NavLink} use cheyukkaaa
// import {Link} from 'react-router-dom'




import { NavLink } from "react-router-dom"
// ath active aavumbol athinnu oru class kittum {active} inspect cheytha mathii, athinnu index.css sil style kodukkaa
const Navbar = () => {
  const navLinkStyles = ({isActive}) =>{
      return{
        textDecoration: isActive ? 'none': 'underline',
        fontWeight: isActive ? 'bold': 'normal',
        color: isActive ? 'white': 'blue'
      }
  }
    
    return (
        <nav className="primary-nav">
          {/* <Link to='/'>Home</Link>
          <Link to='/about'>About</Link> */}

          <NavLink style={navLinkStyles} to='/'>Home</NavLink>
          <NavLink style={navLinkStyles}  to='/about'>About</NavLink>
          <NavLink style={navLinkStyles}  to='/products'>Products</NavLink>
        </nav>
    )
}
export default Navbar