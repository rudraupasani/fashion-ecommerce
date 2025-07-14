import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CatShosection = () => {
  const [filter, setFilter] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtered product list
  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  const handleBuyNow = (product) => {
    toast.info(`You clicked Buy Now for ${product.name}`);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12'>
          <div className='mb-6 lg:mb-0'>
            <h1 className='font-bold text-gray-900 text-3xl lg:text-4xl mb-2'>All Products</h1>
            <p className='text-gray-600 text-lg'>Discover our curated collection</p>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='bg-white border-2 border-gray-200 px-6 py-3 rounded-full font-medium cursor-pointer text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm'
          >
            {['All', 'T-shirts', 'Shirts', 'Shoes', 'Bags', 'Wallets'].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-gray-600 font-semibold text-lg">Loading products...</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 font-semibold text-xl">No products found.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product._id || product.id}
                  className='group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                      alt={product.name}
                      className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                  
                  <div className='p-6'>
                    <div className='flex justify-between items-start mb-4'>
                      <h2 className='font-bold text-gray-900 text-lg leading-tight'>{product.name}</h2>
                      <span className='font-bold text-blue-600 text-xl'>${product.price}</span>
                    </div>
                    
                    <div className='flex gap-3'>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className='cursor-pointer flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center justify-center px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl'
                      >
                        <FaShoppingCart className='mr-2' />
                        Buy
                      </button>
                      <button
                        onClick={() => {
                          toast.success(`${product.name} is added to the cart`);
                        }}
                        className='cursor-pointer flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white flex items-center justify-center px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl'
                      >
                        <FaShoppingCart className='mr-2' />
                        Favorite
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatShosection;