import React from 'react';
import './style00.css'

function Header() {
  return (
    <header className="aa text-white p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="h3">Shiva's E-Commerce</h1>
          </div>
          <div className="col text-end">
            <nav>
              <a href="/" className="text-white mx-2">Home</a>
              <a href="/registration" className="text-white mx-2">Register</a>
              <a href="/login" className="text-white mx-2">Login</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
