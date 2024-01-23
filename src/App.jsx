import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import ProductDetail from './components/productDetail/ProductDetail'
import RandomProduct from './pages/random/RandomProuct'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/product/:idDatLaURL' element={<ProductDetail />} />
        <Route path='/random' element={<RandomProduct />} />
      </Routes>

    </>
  )
}

export default App
