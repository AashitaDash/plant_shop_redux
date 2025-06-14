import React from "react";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = ["Succulents", "Ferns", "Flowering"];
  return (
    <div className="p-10">
      {categories.map(category => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-3 gap-4">
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id} className="border p-4 rounded shadow">
                <img src={product.thumbnail} alt={product.name} className="w-full h-32 object-cover mb-2" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2 disabled:bg-gray-400"
                  onClick={() => dispatch(addToCart(product))}
                  disabled={cartItems[product.id]}
                >
                  {cartItems[product.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;

