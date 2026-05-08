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
        const response = await axios.get(`http://localhost:3002/products/${id}`);
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
 
  return (
    <div className="">
      <div className="mt-5 bg-white shadow-md m-10 p-5 rounded-lg">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">{product.name}</h1>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-1/2 p-5">
                <p>{product.description}</p>
        

                <p className="text-xl font-bold mt-5">${product.price.toFixed(2)}</p>

                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg mt-5">Add to Cart</button>
            </div>


            <div className="w-1/2 p-5">
                <img src={product.image} alt={product.name} className="w-full h-auto" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
