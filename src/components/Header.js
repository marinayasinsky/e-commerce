import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">My Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop" end>Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart" end>Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
