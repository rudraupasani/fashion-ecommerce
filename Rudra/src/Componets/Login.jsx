import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('user', true);

    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);
      console.log('Login Successful:', response.data.token);
      toast.success('✅ Login Successful');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      toast.error(`❌ ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-0 m-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div
        ref={gsapRef}
        className="w-full lg:w-1/2 h-full bg-white p-8 lg:p-50 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">LOGIN</h1>
          <p className="text-center text-gray-600 mt-2">
            Welcome back! Please enter your credentials.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/register" className="text-sm font-medium text-blue-600 hover:underline">
              Don't have an account? Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
