import React from "react";
import img from "../../assets/img/products/airpod.jpg";
function Cart() {
  return (
    <>
      <div className="mt-5 bg-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <div id="img" className="flex justify-between items-center">
              <img src={img} alt="AirPods" className="w-40" />
            </div>
            <div id="phone">
              <h2>AirPods Pro</h2>
              <p>Active Noise Cancellation</p>
            </div>
          </div>

          <div>
            <div id="increment" className="flex justify-center items-center">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div id="price">
              <p>$1,099.00</p>
            </div>
          </div>

        </div>
        <hr />
        <div id="total">
          <p>Total: $1,099.00</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Checkout</button>
      </div>
    </>
  );
}

export default Cart;
