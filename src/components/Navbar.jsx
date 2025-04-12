import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cart } = useCart()
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>TIENDA VIRTUAL</span>
      </div>
      <div className="navbar-links">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Inicio
        </Link>
        <Link 
          to="/cart" 
          className={location.pathname === '/cart' ? 'active' : ''}
        >
          Carrito
          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar