import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Failed to fetch products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      {/* Push main content to the right of fixed sidebar */}
      <main className="ml-64 px-10 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          📦 Product List
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  }
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-1">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-20">
            No products available. Please upload some.
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
