import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3002/orders");

      const formatted = res.data.map(order => ({
        ...order,
        items: typeof order.items === "string"
          ? JSON.parse(order.items)
          : order.items
      }));

      setOrders(formatted);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        orders.map(order => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-5 mb-6"
          >
            {/* Header */}
            <div className="flex justify-between mb-3">
              <h2 className="font-bold">Order #{order.id}</h2>
              <p className="text-gray-500">
                {new Date(order.created_at).toLocaleString()}
              </p>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 rounded"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    ${item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="text-right mt-4 font-bold text-lg">
              Total: ${order.total}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;