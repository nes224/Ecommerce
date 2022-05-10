import logo from './logo.svg';
import './App.css';
import data from './components/back/Data/Data'
import Header from './components/front/Header'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Product from './components/front/Product'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Cart from './components/front/Cart'
import { useSelector } from 'react-redux'
import Home from './components/front/Home';
function App() {
  const {productItems} = data
  const cart = useSelector((state) => state.cart)
  return (
      <>
        <Router>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path = "/" element = {<Home productItems ={productItems} />} /> 

            <Route path = "/cart" element = {<Cart cart = {cart}/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
