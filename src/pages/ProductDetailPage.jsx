import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetail from '../components/ProductDetail'
import ErrorMessage from '../components/ErrorMessage'

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      } catch (err) {
        setError('Producto no encontrado')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <p>Cargando producto...</p>
  if (error) return <ErrorMessage message={error} />
  if (!product) return <p>No se encontró el producto</p>

  return <ProductDetail product={product} />
}

export default ProductDetailPage