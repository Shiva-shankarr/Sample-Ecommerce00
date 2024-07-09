import React, { useState } from 'react';

function Cart() {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 3 },
  ]);

  
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price.toFixed(2)} each
                <div>
                  <button className="btn btn-outline-primary btn-sm me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-end">
            <h5>Total: ${calculateTotal()}</h5>
          </div>
          <button className="btn btn-success mt-3">Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
