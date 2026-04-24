import React from "react";

function Product() {
  return (
    <div className="bg-gray-100 min-h-full">
      {/* Title */}
      <div className="mb-6 ml-10">
        <h1 className="text-3xl font-bold text-gray-700">Add New Category</h1>
      </div>

      {/* Card */}
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow ml-10">
        <h2 className="text-2xl font-semibold text-gray-500 mb-4">
          Product Information
        </h2>

        <form>
          <div className="flex ">
            <div className="mr-25">
              <label className="block mb-2 text-lg">
                Product Name <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Product name"
                className="w-full border border-gray-300 rounded-md px-4 pr-30 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">
                Slug <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter url name"
                className="w-full border border-gray-300 rounded-md px-4 pr-30 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          <div className="flex ">
            <div className="mr-25">
              <label className="block mb-2 text-lg">
                Category <span className="text-red-600">*</span>
              </label>

              <select name="" id="" className="w-full border border-gray-300 rounded-md px-10 pr-30 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option value="">Select Category</option>
              </select>
            
            </div>

            <div>
              <label className="block mb-2 text-lg">
                Brand <span className="text-red-600">*</span>
              </label>

              <select name="" id="" className="w-full border border-gray-300 rounded-md px-14 pr-30 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option value="">Select brand</option>
              </select>
            </div>
          </div>

          <div className="flex ">
            <div className="mr-25">
              <label className="block mb-2 text-lg">
                Price <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                placeholder="$ 0.00"
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-30 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">
                Discount Price <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                placeholder="$ 0.00"
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-30 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          <div>
            <div className="mr-25">
              <label className="block mb-2 text-lg">
                Short Description <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                placeholder="short description"
                className="w-full border border-gray-300 rounded-md px-4 pr-30 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          <div>
            <div className="mr-25">
              <label className="block mb-2 text-lg">
                Description <span className="text-red-600">*</span>
              </label>

              <textarea name="" id="" className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Enter Product description " rows={4}></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
