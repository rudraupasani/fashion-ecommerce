import React, { useRef } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Shop2 = () => {
  const anim = useRef();
  const anim2 = useRef();

  useGSAP(() => {
    gsap.from([anim.current, anim2.current], {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: anim2.current,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-20 py-10">
      {/* Section Header */}
      <div
        ref={anim2}
        className="bg-amber-200 text-black font-bold text-lg md:text-xl lg:text-2xl py-3 px-5 rounded-xl inline-block mb-8"
      >
        Young's Favourite
      </div>

      {/* Card Grid */}
      <div
        ref={anim}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Trending on Instagram",
            img: "https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg",
          },
          {
            title: "All under $200",
            img: "https://img.freepik.com/free-photo/rack-clothes-store_23-2148929536.jpg",
          },
          {
            title: "Fashion choice",
            img: "https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828620.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover mix-blend-darken"
            />
            <div className="p-4">
              <p className="text-black font-bold text-lg">{item.title}</p>
              <div className="mt-2 flex items-center justify-between text-sm font-semibold text-gray-700">
                <span>Explore Now</span>
                <GrLinkNext className="text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop2;
