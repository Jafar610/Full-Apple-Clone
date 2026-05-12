import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) return;

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const saveOrder = async () => {
      try {
        await fetch("http://localhost:3002/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            total,
            items: cart,
          }),
        });

        localStorage.removeItem("cart");
      } catch (error) {
        console.error("Error saving order:", error);
      }
    };

    saveOrder();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="border border-gray-300 py-2 rounded hover:bg-gray-100"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
