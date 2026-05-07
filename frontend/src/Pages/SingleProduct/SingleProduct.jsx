import React from "react";
import img from "../../assets/img/products/airpod.jpg";
function SingleProduct() {
  return (
    <div className="">
      <div className="mt-5 bg-white shadow-md m-10 p-5 rounded-lg">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">Name of Product.</h1>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-1/2 p-5">
                <p>Description of the product goes here.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error fuga molestias non ipsum velit dolores, ipsam corporis harum facilis rerum, odio accusantium doloremque, unde quis eos qui nulla sed.
                </p>

                <p className="text-xl font-bold mt-5">$99.99</p>

                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg mt-5">Add to Cart</button>
            </div>


            <div className="w-1/2 p-5">
                <img src={img} alt="" className="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
