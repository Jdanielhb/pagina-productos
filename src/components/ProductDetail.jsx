import { useCart } from '../context/CartContext'

function ProductDetail({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-detail">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <span className="category">{product.category}</span>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="add-to-cart"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductDetail