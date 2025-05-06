import React from "react";
import { useCart } from "../context/CartContext";
import "../App.css"; // Assuming card styles are also here

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="button-group">
        <button onClick={() => addToCart(product)} disabled={inCart}>
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
        {inCart && (
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
