import products from "../data/products";
import React from "react";
export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{ minHeight: "36px" }}>{product.desc}</p>
      <p><strong>₹{product.price}</strong></p>
      <button className="button" onClick={() => onAdd(product)}>Add to Cart</button>
    </div>

  );
}