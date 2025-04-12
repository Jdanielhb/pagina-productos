import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart, total } = useCart()

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="50" />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item danger-button"
                >
                  <span role="img" aria-label="Eliminar">🗑</span> Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart