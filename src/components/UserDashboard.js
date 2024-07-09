import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className="container mt-5">
      <h2>Welcome to Customer Dashboard</h2><br></br>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <img src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg" className="card-img-top" alt="Cart" style={{ height: '200px', width: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">View Your Cart</h5>
              <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <img src="https://www.helpbot.net/wp-content/uploads/2019/03/e-commerce-800x400.jpg" className="card-img-top" alt="Catalogue" style={{ height: '250px', width: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Browse Catalogue</h5>
              <Link to="/catalogue" className="btn btn-primary">Browse Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
