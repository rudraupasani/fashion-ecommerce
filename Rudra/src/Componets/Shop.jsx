import React, { useRef } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const animation = useRef(null);
  const animation2 = useRef(null);

  useGSAP(() => {
    gsap.from(animation.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: animation.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(animation2.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: animation2.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const products = [
    {
      image: "https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg",
      title: "Graphic Woman Dress"
    },
    {
      image: "https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478974.jpg",
      title: "Spring Wardrobe Still Life"
    },
    {
      image: "https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478984.jpg?t=st=1739886835~exp=1739890435~hmac=c124911dbdbcf3352baa5af4ee8032303322efa1f1b8cacdb44ebf64ab9478b6&w=360",
      title: "Stylish Modern Outfit"
    }
  ];

  return (
    <div className="w-full px-6 py-10">
      {/* Heading Section */}
      <div
        ref={animation2}
        className="bg-amber-200 text-black font-bold text-lg md:text-xl lg:text-2xl py-3 px-5 rounded-xl inline-block mb-8"
      >
        NEW ARRIVALS
      </div>

      {/* Product Grid */}
      <div
        ref={animation}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="max-w-[400px] w-full border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-xl mix-blend-darken"
            />
            <h2 className="text-md font-bold text-black mt-3">{item.title}</h2>
            <p className="text-xs font-semibold text-gray-700 mt-1 flex items-center justify-between">
              Explore Now
              <button className="ml-2 text-black hover:text-amber-600 transition">
                <GrLinkNext />
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
