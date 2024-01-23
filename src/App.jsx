import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import ProductDetail from './components/productDetail/ProductDetail'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />

      </Routes>

    </>
  )
}

export default App
