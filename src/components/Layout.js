import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ minHeight: '70vh', padding: '0px' }}>
        <Outlet />
      </div>
  );
}

export default Layout;
