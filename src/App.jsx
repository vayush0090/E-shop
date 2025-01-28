import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App