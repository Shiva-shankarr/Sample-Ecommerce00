import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">
        <Link to='/userdashboard' className='text-black fw-bold'>Login</Link></button>
      </form>
    </div>
  );
}

export default Login;
