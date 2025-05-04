
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const groupedByCategory = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="home">
      <h1>Product Categories</h1>
      {Object.keys(groupedByCategory).map((category) => (
        <div key={category} className="category-section">
          <h2>{category.toUpperCase()}</h2>
          <div className="product-grid">
            {groupedByCategory[category].map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
