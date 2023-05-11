import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import { Footer, Navbar, Sidebar } from './components'
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='products/:id' element={<SingleProduct />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
