import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const count = cartItems.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="nav">
      <div className="container" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <Link to="/" style={{ fontWeight: "bold", fontSize: 18 }}>🛍️ eShop</Link>
        </div>
        <div style={{ textAlign: "right" }}>
          <Link to="/">Home</Link>
          <Link to="/cart" style={{ marginLeft: 12 }}>Cart ({count})</Link>
          <Link to="/checkout" style={{ marginLeft: 12 }}>Checkout</Link>
        </div>
      </div>
    </div>
  );
}
