import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/register', formData);
      console.log('Registered user:', response.data);
      toast.success('✅ Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error.response?.data || error.message);
      toast.error(`❌ ${error?.response?.data?.message || error.message}`);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-0 m-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
          alt="Register Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div
        ref={gsapRef}
        className="w-full lg:w-1/2 h-full bg-white p-8 lg:p-20 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-amber-600">REGISTER</h1>
          <p className="text-center text-gray-600 mt-2">
            Hello, User! Fill in all your details to create an account.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleFormSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Username */}
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

            {/* Password */}
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline">
              Already have an account? Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Register;
