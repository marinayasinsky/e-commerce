import React from 'react';

function Product(props) {
  const { product, addToCart } = props;

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
