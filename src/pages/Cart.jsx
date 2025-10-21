import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
export default function Cart() {
  const { cartItems, updateQty, removeFromCart, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.product.id} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, background: "#fff", padding: 12, borderRadius: 8 }}>
            <img src={item.product.image} alt="" style={{ width: 100, height: 70, objectFit: "cover", borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0 }}>{item.product.name}</h4>
              <p style={{ margin: 0 }}>₹{item.product.price}</p>
            </div>

            <div>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.product.id, Number(e.target.value))}
                style={{ width: 60, padding: 6 }}
              />
            </div>

            <div>
              <button className="button" onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
        <Link to="/checkout"><button className="button">Proceed to Checkout</button></Link>
      </div>
    </div>
  );
}
