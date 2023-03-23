import React from 'react';
import { Route } from 'react-router-dom';

function Home() {
  return (
    <div>  <style>{'body { background-color: #f2d1d7; }'}</style>
    <div className="container my-5">
      <div className="jumbotron" style={{ backgroundColor: '#a3c4bc' }}>
        <h1 className="display-4"style={{ color: '#fff', textShadow: '2px 2pnx #000' }}>Welcome to My Store</h1>
        <p className="lead" style={{ color: '#fff' }}>Discover the best products at the best prices!</p>
        <hr className="my-4" />
        <p  style={{ color: '#fff' }}>Check out our latest deals and offers.</p>
        <a className="btn btn-primary btn-lg" href="/shop" role="button" style={{ color: '#fff' }}>Shop Now</a>
      </div>
    </div>
    </div>
  );
}

export default Home;
