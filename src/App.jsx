import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </CartProvider>
  )
}

export default App
