// import logo from './logo.svg';
import React from 'react'
import './App.css';

/////////////////////////////  Routing /////

import { Routes, Route } from 'react-router-dom'

import Home from './RouterComponents/Home';
import About from './RouterComponents/About';
import Navbar from './RouterComponents/Navbar';
import Details from './RouterComponents/Details';
import OrderSummary from './RouterComponents/OrderSummary';
import NoMatch from './RouterComponents/NoMatch';
import Products from './RouterComponents/Products';
import FeatureProduct from './RouterComponents/FeatureProduct';
import NewProducts from './RouterComponents/NewProducts';
import Users from './RouterComponents/Users';
import UsersDetails from './RouterComponents/UserDetails';
import Admin from './RouterComponents/Admin';
import Profile from './RouterComponents/Profile';


////  for authentication , for login logout pages
import { AuthProvider } from './RouterComponents/auth';
import LoginAuth from './RouterComponents/LoginAuth';
import RequireAuth from './RouterComponents/RequireAuth';
import Hooks from './ComponentsHooks/Hooks';
import FilterComponent from './Filter/FilterComponent';
import Ordering from './Filter/Ordering';


// for lazy loading
// import Login from './RouterComponents/Login';

// FOR LAZYLoading
// import React from 'react'
const LazyLogin = React.lazy(() => import('./RouterComponents/Login'))




function App() {
  return (
    <AuthProvider>


      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
          hi ! welcome to sfq world
        </p> */}

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='about/details' element={<Details />}></Route>

            <Route path='about/OrderSummary' element={<OrderSummary />}></Route>
            <Route path="*" element={<NoMatch />}></Route>


            <Route path='products' element={<Products />}>
              {/* load aavumbol ethekillum render cheyannekil */}
              <Route index element={<FeatureProduct />}></Route>

              <Route path='featured' element={<FeatureProduct />}></Route>
              <Route path='new' element={<NewProducts />}></Route>
            </Route>

            <Route path='users' element={<Users />}>
              <Route path=':userId' element={<UsersDetails />}></Route>
              <Route path='admin' element={<Admin />}></Route>
            </Route>

            <Route path='login' element={<React.Suspense fallback="loading..."><LazyLogin /></React.Suspense>}></Route>
            {/* eth pattum verae components kodukkaaan */}
            {/* <Route path='login' element={<React.Suspense fallback={<NewProducts />}><LazyLogin/></React.Suspense>}></Route> */}

            
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
            <Route path='loginauth' element={<LoginAuth />}></Route>
            <Route path='hooks' element={<Hooks />}></Route>
            <Route path='order/filter' element={<FilterComponent />}></Route>
            <Route path='order' element={<Ordering />}></Route>


          </Routes>


        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
