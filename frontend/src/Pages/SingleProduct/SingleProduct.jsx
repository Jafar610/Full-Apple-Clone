import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const addToCart = () => {
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div className="">
      <div className="mt-5 bg-white shadow-md m-10 p-5 rounded-lg flex justify-center items-center">
       
        <div className="flex justify-center items-center gap-10 ">
            <div className="w-1/2 p-5">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p>{product.description}</p>
                <p className="text-xl font-bold mt-5">${product.price}</p>
                <button onClick={addToCart} className="bg-gray-900 text-white px-5 py-2 rounded-lg mt-5">Add to Cart</button>
            </div>


            <div className="w-1/2 p-5">
                <img src={product.image} alt={product.name} className="w-80" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
