import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "inc") {
          item.quantity += 1;
        } else if (type === "dec" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSelectedItems([]);
  };

  return (
    <>
      <div className="mt-5 bg-white shadow-lg m-10 p-5 rounded-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          // checkout button should be disabled when cart is empty

          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-5 border-b border-gray-300 pb-5"
            >
              <div className="flex justify-center items-center">
                <div
                  id="img"
                  className="flex justify-between items-center mr-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 rounded-md"
                  />
                </div>
                <div id="phone">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    {item.short_description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <div
                  id="increment"
                  className="flex justify-center items-center mr-15 border border-gray-400 rounded-md px-2 bg-gray-50"
                >
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="border-r border-gray-400 pr-5 pb-1 font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="border-l border-gray-400 pl-5 pb-1 font-bold text-xl"
                  >
                    +
                  </button>
                </div>
                <div
                  id="price"
                  className="flex justify-center items-center ml-10"
                >
                  <p>${item.price}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className=" text-black border border-gray-400 py-1 px-3 rounded ml-5 pointer-events-auto text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="flex justify-end items-center mb-5 border-t border-gray-300 pt-5">
            <p className="font-bold text-lg">Total:</p>
            <p className="font-bold text-xl">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        )}
        <div className="flex justify-end items-center">
          <button
            disabled={cartItems.length === 0}
            className={`py-2 px-4 rounded ${
              cartItems.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
