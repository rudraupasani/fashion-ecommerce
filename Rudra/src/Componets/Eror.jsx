import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Error = () => {  // Changed 'Eror' to 'Error' for correct spelling
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.to(circleRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear"
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link to="/">
          <button className="px-6 py-3 text-lg bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
            Go Home
          </button>
        </Link>
      </div>
      <div ref={circleRef} className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-64 h-64 bg-blue-500 rounded-full opacity-30" />
      </div>
    </div>
  );
}

export default Error;
