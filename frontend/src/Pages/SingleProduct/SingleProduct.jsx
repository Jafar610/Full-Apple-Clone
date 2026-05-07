import React from "react";

function SingleProduct() {
  return (
    <div className="">
      <div className="mt-5 bg-white shadow-lg m-10 p-5 rounded-lg">
        <div>
          <h1>Name of Product.</h1>
        </div>
        <div className="flex justify-between items-center">
            <div>
                <p>Description of the product goes here.</p>
            </div>


            <div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
