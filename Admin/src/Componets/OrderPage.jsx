import React, { useEffect, useState, useRef } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
import { FiUser, FiDollarSign, FiCheckCircle, FiClock } from 'react-icons/fi';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  // const containerRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from(containerRef.current, {
  //     opacity: 0,
  //     y: 30,
  //     duration: 0.8,
  //     ease: "power3.out",
  //   });
  // }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/orders');
        setOrders(res.data);
      } catch (err) {
        console.error('Failed to load orders:', err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <NavBar />
      <main className="ml-64 py-12 px-10 flex-1">
        <div
          // ref={containerRef}
          className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            📦 Order List
          </h2>

          {orders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <FiUser />
                    <span className="font-medium">{order.customer}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{order.email}</div>

                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Products:</strong>{" "}
                    {Array.isArray(order.products)
                      ? order.products.join(", ")
                      : order.products}
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-2">
                    <FiDollarSign />
                    ${order.total}
                  </div>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {order.status === 'Completed' ? (
                      <FiCheckCircle />
                    ) : (
                      <FiClock />
                    )}
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg mt-20">
              No orders found.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OrderPage;
