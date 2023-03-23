import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api';

function ProductDetails(props) {
  const { addToCart } = props;
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert('Product added to cart!');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="lead">{product.description}</p>
          <p className="font-weight-bold">${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
