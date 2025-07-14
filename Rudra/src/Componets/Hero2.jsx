import React, { useRef } from 'react';
import img1 from '../assets/img1.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();

  const userToken = localStorage.getItem('user');

  useGSAP(() => {
    // Container animation
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play none none reverse',
      },
    });

    // Stagger text elements for better visual flow
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Image animation with slight rotation for dynamism
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      rotation: 5,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const handleShopNow = () => {
    if (userToken) {
      navigate('/category');
    } else {
      navigate('/login');
    }
  };

  // Calculate days remaining (example calculation)
  const saleEndDate = new Date('2025-06-10');
  const currentDate = new Date();
  const daysRemaining = Math.ceil((saleEndDate - currentDate) / (1000 * 60 * 60 * 24));

  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      
      {/* Main container */}
      <div 
        ref={containerRef}
        className="w-full max-w-7xl bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl mt-10 relative overflow-hidden"
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-300 rounded-bl-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-400 rounded-tr-full opacity-20"></div>

        {/* Text section */}
        <div ref={textRef} className="text-center lg:text-left space-y-4 md:space-y-5 lg:space-y-6 w-full lg:w-1/2 z-10">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              PAYDAY
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            SALE NOW
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 space-y-2">
            <p className="text-sm md:text-base font-mono text-gray-700">
              Spend minimum <span className="font-bold text-green-600">$100</span> and get{' '}
              <span className="text-red-600 font-bold text-xl">30% OFF</span>
            </p>
            <p className="text-sm md:text-base text-gray-600 font-mono">
              Use this voucher on your next purchase
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm md:text-base font-bold text-gray-800">
              📅 1 June - 10 June 2025
            </p>
            {daysRemaining > 0 && (
              <p className="text-sm font-semibold text-red-600">
                ⏰ Only {daysRemaining} days left!
              </p>
            )}
            <p className="text-xs text-gray-500">*Terms & Conditions apply</p>
          </div>
          
          <button 
            onClick={handleShopNow}
            className="mt-6 inline-block bg-black text-white text-md md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            {userToken ? 'Shop Now 🛍️' : 'Login to Shop'}
          </button>
        </div>

        {/* Image section */}
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              ref={imageRef}
              src={img1}
              alt="Fashion Banner - Special Sale Items"
              className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain mix-blend-darken drop-shadow-2xl"
              loading="lazy"
            />
            {/* Sale badge overlay */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
              30% OFF
            </div>
          </div>
        </div>
      </div>

      {/* Additional promotional elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 text-xs text-gray-600">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Free Shipping
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Easy Returns
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          24/7 Support
        </span>
      </div>
    </section>
  );
};

export default Hero2;