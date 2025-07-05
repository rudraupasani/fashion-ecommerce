import React, { useRef } from "react";
import img2 from "../assets/img2.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const gsapAnimation = useRef(null);
  const gsapAnimation2 = useRef(null);
  const gsapAnimation3 = useRef(null);
  const token = localStorage.getItem("token");
  const navigator = useNavigate();

  useGSAP(() => {
    gsap.from(gsapAnimation.current, {
      duration: 1.5,
      x: -100,
      opacity: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from(gsapAnimation2.current, {
      duration: 1.5,
      x: 100,
      opacity: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from(gsapAnimation3.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: gsapAnimation3.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

 const LoginToken = localStorage.getItem('user')

  const ShopNowFunction = () => {
    if (LoginToken) {
      navigator("/category");
    } else {
      navigator("/login");
    }
  };

  return (
    <>
      <div className="w-full bg-amber-100 py-10 px-4 lg:px-32 relative overflow-hidden">
        {/* Marquee Section */}
        <div className="w-full whitespace-nowrap overflow-hidden bg-amber-300 py-2 mb-6">
          <p className="text-center font-bold text-lg text-amber-800 animate-marquee">
            🔥 New Arrivals Every Week — Don't Miss Out! 🔥 New Arrivals Every Week — Don't Miss Out! 🔥
          </p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Block */}
          <div ref={gsapAnimation} className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
              LET'S<br />EXPLORE<br />UNIQUE<br />CLOTHES.
            </h1>
            <p className="mt-4 text-gray-700 text-md md:text-lg font-medium">
              Live for influential and innovative fashion!
            </p>
            <button
              onClick={ShopNowFunction}
              className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
            >
              {LoginToken ? "Shop Now" : "Login Now"}
            </button>
          </div>

          {/* Image Block */}
          <div ref={gsapAnimation2} className="lg:w-1/2 flex justify-center">
            <img
              src={img2}
              alt="Fashion Display"
              className="w-72 sm:w-96 md:w-[28rem] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Optional Scroll Trigger Section */}
      <div ref={gsapAnimation3}></div>

      {/* Keyframes for marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: inline-block;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
