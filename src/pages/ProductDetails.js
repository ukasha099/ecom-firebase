import React from "react";
import { useParams } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Phone", price: 499, description: "Smartphone", image: "https://www.zdnet.com/a/img/resize/9f3fcf4ecd3e5140/2024/09/19/8da68e24-08b1-467a-906200" },
  { id: 2, name: "Laptop", price: 999, description: "High-performance laptop", image: "https://via.placeholder.com/150" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;