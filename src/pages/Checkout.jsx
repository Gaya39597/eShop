import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  function handlePlaceOrder(e) {
    e.preventDefault();
    // For demo: show an alert and clear cart.
    alert(`Order placed! \nName: ${name}\nAddress: ${address}\nTotal: ₹${total}`);
    clearCart();
    navigate("/");
  }

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>No items to checkout</h2>
        <p><a href="/">Return to shop</a></p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder} style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Name</label><br />
          <input required value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: 8 }} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Address</label><br />
          <textarea required value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", padding: 8 }} />
        </div>

        <p><strong>Total:</strong> ₹{total}</p>

        <button type="submit" className="button">Place Order</button>
      </form>
    </div>
  );
}
