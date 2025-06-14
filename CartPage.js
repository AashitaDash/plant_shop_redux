import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <p>Total items: {cart.totalQuantity}</p>
      <p>Total cost: ${cart.totalPrice.toFixed(2)}</p>
      <div className="grid gap-4">
        {Object.values(cart.items).map(item => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded">
            <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover" />
            <div>{item.name}</div>
            <div>${item.price}</div>
            <div className="flex gap-2">
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => alert("Coming Soon")}>Checkout</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartPage;
