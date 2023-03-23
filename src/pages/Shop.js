import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container my-5">
      <h2>Shop</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ width: "25%", margin: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.description}</p>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

