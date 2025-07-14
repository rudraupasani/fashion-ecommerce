import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';

const Fashion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/products');
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Failed to fetch:', err);
        toast.error('Could not load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredProducts(
        products.filter(
          (p) =>
            p.name.toLowerCase().includes(term) ||
            (p.category && p.category.toLowerCase().includes(term))
        )
      );
    }
  }, [searchTerm, products]);

  const handleBuyNow = (product) => {
    toast.success(`Added "${product.name}" to cart`);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white py-6 px-4">
      {/* Search bar */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for fashion items..."
            className="w-full border border-gray-300 rounded-xl px-6 py-3 text-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-5 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center text-gray-600 font-semibold">Loading products...</div>
      ) : (
        <>
          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg">
              No products match your search.
            </div>
          ) : (
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id || product.id}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition overflow-hidden"
                >
                  <img
                    src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between h-[170px]">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md px-4 py-2 flex items-center justify-center transition"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Fashion;
