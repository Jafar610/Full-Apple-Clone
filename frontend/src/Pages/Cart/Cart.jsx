import React from "react";
import img from "../../assets/img/products/airpod.jpg";
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";
import axios from "axios";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(1099.00);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  

  return (
    <>
      <div className="mt-5 bg-white shadow-lg m-10 p-5 rounded-lg">
        <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-5">
          <div className="flex justify-center items-center">
            <div id="img" className="flex justify-between items-center mr-5">
              <img src={img} alt="AirPods" className="w-32 rounded-md" />
            </div>
            <div id="phone">
              <h2 className="font-bold text-lg">AirPods Pro</h2>
              <p className="text-sm text-gray-600">Active Noise Cancellation</p>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <div id="increment" className="flex justify-center items-center mr-15 border border-gray-400 rounded-md px-2 bg-gray-50">
              <button className="border-r border-gray-400 pr-5 pb-1 font-bold text-xl">-</button>
              <span className="px-3">1</span>
              <button className="border-l border-gray-400 pl-5 pb-1 font-bold text-xl">+</button>
            </div>
            <div id="price">
              <p>$1,099.00</p>
            </div>
          </div>

        </div>
        <div id="total" className="flex justify-between items-center">
          <p className="font-medium text-lg">Total:</p>
          <p>$1,099.00</p>
        </div>

        <div id="total" className="flex justify-between items-center mt-2">
          <p className="font-medium text-lg">Shipping:</p>
          <p>$9.00</p>
        </div>

        <div id="total" className="flex justify-between items-center mt-2 mb-3">
          <p className="font-medium text-lg">Tax:</p>
          <p>$1.00</p>
        </div>

        <div className="flex justify-between items-center mb-5 border-t border-gray-300 pt-5">
          <p className="font-bold text-lg">Grand Total:</p>
          <p className="font-bold text-xl">$1,109.00</p>
        </div>

        <div className="flex justify-end items-center">
           <button className="bg-blue-500 text-white py-2 px-4 rounded">Checkout</button>
        </div>
       
      </div>
    </>
  );
}

export default Cart;
