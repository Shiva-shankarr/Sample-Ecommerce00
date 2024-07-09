import React from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">
        <Link to='/login' className='text-black fw-bold'>Register</Link></button>
      </form>
    </div>
  );
}

export default Registration;
