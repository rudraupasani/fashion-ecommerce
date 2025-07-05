import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const inputRef = useRef();

  useGSAP(() => {
    gsap.from([headingRef.current, inputRef.current], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 px-6 sm:px-10 md:px-20 py-16 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden text-white"
    >
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headings */}
        <div ref={headingRef} className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Join Our Shopping Community
          </h1>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
            Get Monthly Promotions Straight to Your Inbox
          </h2>
          <p className="mt-4 text-lg text-white/90 font-medium">
            Type your email below and be the first to hear about deals, drops, and new collections.
          </p>
        </div>

        {/* Email Input Form */}
        <div
          ref={inputRef}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto mt-6"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 rounded-xl text-black placeholder-gray-500 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="button"
            className="px-6 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-white transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
