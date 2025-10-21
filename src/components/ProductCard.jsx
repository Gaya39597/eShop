import React from "react";
import { useCart } from "../context/CartContext"; // adjust path as needed

export default function ProductCard({ product }) {
  const { cartItems, addToCart, updateQty } = useCart();
  const cartItem = cartItems.find(item => item.product.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{ minHeight: "36px" }}>{product.desc}</p>
      <p><strong>₹{product.price}</strong></p>
      {qty === 0 ? (
        <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={() => updateQty(product.id, qty - 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => updateQty(product.id, qty + 1)}>+</button>
        </div>
      )}
    </div>
  );
}
