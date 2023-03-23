import React from 'react';

function Cart(props) {
  const { cartItems, removeFromCart } = props;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li className="list-group-item" key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1">{item.description}</p>
                  <p className="mb-0">${item.price}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
