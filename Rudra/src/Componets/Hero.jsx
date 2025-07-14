import React, { useRef } from "react";
import img2 from "../assets/img2.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const navigate = useNavigate();

  // Use consistent token checking
  const userToken = localStorage.getItem('user');

  useGSAP(() => {
    // Animate text from left
    gsap.from(textRef.current, {
      duration: 1.5,
      x: -100,
      opacity: 0,
      ease: "power2.out"
    });
  }, []);

  useGSAP(() => {
    // Animate image from right
    gsap.from(imageRef.current, {
      duration: 1.5,
      x: 100,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2 // Slight delay for better visual flow
    });
  }, []);

  useGSAP(() => {
    // Animate scroll section when it comes into view
    if (scrollSectionRef.current) {
      gsap.from(scrollSectionRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const handleShopNow = () => {
    if (userToken) {
      navigate("/category");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="w-full bg-amber-100 py-10 px-4 lg:px-32 relative overflow-hidden">
        {/* Marquee Section */}
        <div className="w-full whitespace-nowrap overflow-hidden bg-amber-300 py-2 mb-6 rounded-lg">
          <p className="text-center font-bold text-lg text-amber-800 animate-marquee">
            🔥 New Arrivals Every Week — Don't Miss Out! 🔥 New Arrivals Every Week — Don't Miss Out! 🔥
          </p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Block */}
          <div ref={textRef} className="text-center lg:text-left lg:w-1/2">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-800">
              LET'S<br />
              EXPLORE<br />
              UNIQUE<br />
              <span className="text-amber-600">CLOTHES.</span>
            </h1>
            <p className="mt-6 text-gray-700 text-md md:text-lg font-medium max-w-md mx-auto lg:mx-0">
              Live for influential and innovative fashion! Discover your unique style with our curated collection.
            </p>
            <button
              onClick={handleShopNow}
              className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {userToken ? "Shop Now" : "Login to Shop"}
            </button>
          </div>

          {/* Image Block */}
          <div ref={imageRef} className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={img2}
                alt="Fashion Display"
                className="w-72 sm:w-96 md:w-[28rem] object-contain drop-shadow-2xl"
              />
              {/* Optional decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section (for scroll trigger demo) */}
      <div ref={scrollSectionRef} className="w-full bg-white py-16 px-4 lg:px-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Fashion?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We curate the finest collection of unique, trendy, and sustainable fashion 
            pieces that help you express your individuality.
          </p>
        </div>
      </div>

      {/* Enhanced Keyframes for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Hero;