import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/products'); // Adjust API endpoint as needed
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3002/categories'); // Adjust API endpoint as needed
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/addProduct', {
        product_name: productName,
        slug,
        category_id: category,
        brand,
        price,
        discount_price: discountPrice,
        stock,
        image,
        short_description: shortDesc,
        description: desc
      }); // Adjust API endpoint and payload as needed
      // Reset form
      setProductName('');
      setSlug('');
      setCategory('');
      setBrand('');
      setPrice('');
      setDiscountPrice('');
      setStock('');
      setImage('');
      setShortDesc('');
      setDesc('');
      setIsModalOpen(false);
      fetchProducts(); // Refresh the list
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  categories.map((category)=>{
    const category_name = category.name;
  });

  return (
    <div className="bg-gray-100 min-h-full">
      {/* Title and Add Button */}
      <div className="flex justify-between items-center mb-6 ml-10 mr-10">
        <h1 className="text-3xl font-bold text-gray-700">Products</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="ml-10 mr-10">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="py-3 px-4">{product.id}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category_id}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">{new Date(product.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-sky-100 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow max-w-4xl w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold text-gray-500 mb-4">
              Add New Product
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4">
                <div className="mr-4 flex-1">
                  <label className="block mb-2 text-lg">
                    Product Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name='product_name'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter Product name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-lg">
                    Slug <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name='slug'
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="Enter url name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="flex mb-4">
                <div className="mr-4 flex-1">
                  <label className="block mb-2 text-lg">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={category}
                    name='category_id'
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-lg">
                    Brand <span className="text-red-600"></span>
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                   
                  >
                    <option value="">Select Brand</option>
                    {/* Add brand options if available */}
                  </select>
                </div>
              </div>

              <div className="flex mb-4">
                <div className="mr-4 flex-1">
                  <label className="block mb-2 text-lg">
                    Price <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="$ 0.00"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-lg">
                    Discount Price
                  </label>
                  <input
                    type="number"
                    name='discount_price'
                    value={discountPrice}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                    placeholder="$ 0.00"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>

              <div className="flex mb-4">
                <div className="mr-4 flex-1">
                  <label className="block mb-2 text-lg">
                    Stock <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name='stock'
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Stock Quantity"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-lg">
                    Product Image <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name='image'

                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Product Image URL"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg">
                  Short Description <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name='short_description'
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="Short description"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  name='description'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Enter Product description"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
