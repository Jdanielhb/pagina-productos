import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-card-image"
        loading="lazy"
      />
      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="view-detail">
          Ver detalles
        </Link>
      </div>
    </div>
  )
}

export default ProductCard