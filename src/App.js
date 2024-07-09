import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Login from './components/Login';
import Registration from './components/Registration';
import Layout from './components/Layout';
import UserDashboard from './components/UserDashboard';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ minHeight: '80px' }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/userdashboard" element={<UserDashboard />} /> {/* New route for UserDashboard */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
