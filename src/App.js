// import logo from './logo.svg';
import './App.css';

/////////////////////////////  Routing /////

import {Routes, Route} from 'react-router-dom'
import Home from './RouterComponents/Home';
import About from './RouterComponents/About';
import Navbar from './RouterComponents/Navbar';
import Details from './RouterComponents/Details';
import OrderSummary from './RouterComponents/OrderSummary';
import NoMatch from './RouterComponents/NoMatch';
import Products from './RouterComponents/Products';
import FeatureProduct from './RouterComponents/FeatureProduct';
import NewProducts from './RouterComponents/NewProducts';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          hi ! welcome to sfq world
        </p> */}
        
        <Navbar/>
        <Routes>
          <Route path='/'  element ={<Home/>}></Route>
          <Route path='about'  element ={<About/>}></Route>
          <Route path='about/details'  element ={<Details/>}></Route>

          <Route path='about/OrderSummary'  element ={<OrderSummary/>}></Route>
          <Route path="*"  element ={<NoMatch/>}></Route>


          <Route path='products'  element ={<Products/>}>
            {/* load aavumbol ethekillum render cheyannekil */}
            <Route index element ={<FeatureProduct/>}></Route>
            
            <Route path='featured' element ={<FeatureProduct/>}></Route>
            <Route path='new' element ={<NewProducts/>}></Route>
          </Route>
          
        </Routes>
        
        
      </header>
    </div>
  );
}

export default App;
