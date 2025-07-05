import React, { useRef } from 'react';
import img1 from '../assets/img1.png'; // Your hero image
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const ani = useRef();

  useGSAP(() => {
    gsap.from(ani.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ani.current,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section
      ref={ani}
      className="relative w-full min-h-[90vh] bg-white flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
    >
      {/* Background wrapper */}
      <div className="w-full max-w-8xl bg-amber-100 rounded-2xl p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-xl mt-10">

        {/* Text section */}
        <div className="text-center lg:text-left space-y-4 md:space-y-5 lg:space-y-6 w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-white px-6 py-3 rounded-xl inline-block shadow-md">
            PAYDAY
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">SALE NOW</h2>
          <p className="mt-3 text-sm md:text-base font-mono text-gray-700">
            Spend minimum <span className="font-semibold">$100</span> and get{' '}
            <span className="text-red-600 font-bold">30% OFF</span>
          </p>
          <p className="text-sm md:text-base text-gray-600 font-mono">
            Use this voucher on your next purchase
          </p>
          <p className="text-sm md:text-base font-bold">1 June - 10 June 2025</p>
          <p className="text-xs text-gray-500">*Terms & Conditions apply</p>
          <button className="mt-6 inline-block bg-black text-white text-md md:text-lg font-semibold px-5 md:px-6 py-2 md:py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md">
            Shop Now
          </button>
        </div>

        {/* Image section */}
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Fashion Banner"
            className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain mix-blend-darken"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
