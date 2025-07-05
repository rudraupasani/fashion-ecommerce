import React, { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FiUpload } from "react-icons/fi";

const UploadProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    images: [],
  });

  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...product.images, ...files];
    setProduct((prev) => ({ ...prev, images: updatedImages }));

    const updatedPreviews = [
      ...previews,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
    setPreviews(updatedPreviews);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const updatedImages = [...product.images, ...files];
    setProduct((prev) => ({ ...prev, images: updatedImages }));
    const updatedPreviews = [
      ...previews,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
    setPreviews(updatedPreviews);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const uploadedImages = await Promise.all(
        product.images.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "react-upload-preset");
          const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/rudraupasani/image/upload",
            formData
          );
          return data.secure_url;
        })
      );

      const productData = {
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        image: uploadedImages,
      };

      await axios.post("http://localhost:3000/api/products", productData);

      setProduct({
        name: "",
        price: "",
        description: "",
        category: "",
        images: [],
      });
      setPreviews([]);
    } catch (error) {
      console.error("Error uploading product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <NavBar />

      <main className="ml-64 py-12 px-10 flex-1">
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-gray-200"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            🛒 Upload Product
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="col-span-1 md:col-span-2 px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Price"
              className="px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Category"
              className="px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Description"
              rows="4"
              className="col-span-1 md:col-span-2 px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              required
            />

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="col-span-1 md:col-span-2"
            >
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 bg-white hover:border-blue-500 rounded-xl p-8 text-gray-500 cursor-pointer transition"
              >
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <FiUpload className="text-2xl mb-2" />
                <p className="text-sm text-center">
                  Click or drag & drop images to upload
                </p>
              </label>

              {previews.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {previews.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`preview-${i}`}
                      className="w-full h-40 object-cover rounded-xl border animate-fadeIn"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
                ) : (
                  "🚀 Upload Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadProduct;
