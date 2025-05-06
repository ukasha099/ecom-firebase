// pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
          <h3>{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
