import React from 'react'

function Product() {
  return (
    <div className="bg-gray-100 min-h-full">

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Add New Category
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow">

        <h2 className="text-2xl font-semibold text-gray-500 mb-4">
          Category Information
        </h2>

        <form>
          <label className="block mb-2 text-lg">
            Category Name <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter Category name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add Category
          </button>
        </form>

      </div>
    </div>
  )
}

export default Product