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
    <div className='py-10 px-4 lg:px-10'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8'>
        <h1 className='font-bold text-black text-xl lg:text-2xl mb-4 lg:mb-0'>All Products</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='border border-black px-4 py-2 rounded font-medium cursor-pointer'
        >
          {['All', 'T-shirts', 'Shirts', 'Shoes', 'Bags', 'Wallets'].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600 font-semibold">Loading products...</p>
      ) : (
        <div className='flex flex-wrap justify-center gap-6'>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 font-semibold">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product._id || product.id}
                className='w-[18rem] lg:w-[15rem] bg-white rounded-2xl shadow border border-gray-200 overflow-hidden'
              >
                <img
                  src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={product.name}
                  className='w-full h-60 object-cover'
                />
                <div className='bg-blue-50 px-4 py-3 flex justify-between items-center'>
                  <h2 className='font-semibold text-black'>{product.name}</h2>
                  <span className='font-bold text-black text-lg'>${product.price}</span>
                </div>
                <div className='bg-blue-50 p-4 flex justify-between items-center'>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className='bg-black text-white flex items-center px-4 py-2 rounded-xl hover:opacity-90'
                  >
                    <FaShoppingCart className='mr-2' />
                    Buy
                  </button>
                  <button
                    onClick={() => {
                      toast.success(`${product.name} is added to the cart`);
                    }}
                    className='bg-black text-white flex items-center px-4 py-2 rounded-xl hover:opacity-90'
                  >
                    <FaShoppingCart className='mr-2' />
                    Favorite
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CatShosection;
