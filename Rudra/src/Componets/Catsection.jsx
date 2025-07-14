import React from 'react'
import { GrLinkNext } from "react-icons/gr"

const categories = [
  {
    name: "T-shirts",
    img: "data:image/jpeg;base64,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", // replace with real image
  },
  {
    name: "Shirts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiofWsb0UBDog_zhvzvZftAP7Nt8QQ9wf6_A&s",
  },
  {
    name: "Shoes",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERITEhEWFhMVFxcYFxUYFhoVExcWGBUXFxgaFhUaHSghGBonHBUYIjEiJSkrLi4uFx8zODUsNygtLysBCgoKDg0ODg0PFSsZFRktKzcrKysrKysrLS0tNysrKy0tKzcrKysrKysrLSstLSs3LS0rNysrKysrLSstKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABJEAABAwIDBQQFBwgHCQAAAAABAAIDBBEFEiEGBzFBYRMiUXEygZGhsRQjQlJicoIkM5KywcPR0xdEU4OiwvAWJTVjc7PS4fH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/ALoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEQlARAiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKi9623Mk0r6SnktA05ZABrI4Hm7m37OnDW/AWRvI2k+R0j8pIkka9rXAXyHI7KT5vyt9ZPAEjzpSvAvI7ieF9SfE9Srg32DY3VUmUwVL4zzZ6UR82Hu+5WlslvUimIirGiCQ6CQfmHeZOsZ87jqFSHyxpOpt1I09vL12XGoqg3iDbx5e3h4Ko9cAoqh3F7WvlMlDK4uEbO0hJNyGBwa9l/AFzSPDXlYC3llRERAREQEREBERAREQEREBERAREQEREBERAREQERRzeLWiHDKx5cQTEWNy8cz7MaL8hd2vS6Cjt6O0orK2TK93YxnIwG2U5ARmFidCXPIPg7ksbB3YbkaKgOc8jvF5kZGzo0ROB9Zv5BRgvzEg38bcrcL35cVM9g8Boqt5ZI1wkZ3nMzuAe2/Ed7hwv5haRmYzu3aQJKV5iLgHNZKc8LgdRkmAu0W17wI+0FB8UwyqpTaaKSK/A8Y3c+68Xa71FekoadjImxNaBG1oa1tu6GgWAWvGzgLXfOd1/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B/QyE2j4+BDnfgCvUG3Ej1kLEpqKOIZYaSnjbe9msa27uFyGt1PVZMckg4BjfCwv+wIOwPvw18tVy731Xfon+C6XSy6Xk87NI9ne0XW7OeMr/Vlt8CgyHNdb0T7LfFbHAB3X+OYXHPhotC6M83uPnl/gtxsy2wk1vqPDr4KDdoiKKIiICIiDAxzCIquB8E7c0b7X5EEG4c08iCqixncvOCTTVEUjeTZM0bwPvAODj6groma4+i7L+HN+1YUtLUn0alg84M37wIPPlRu6xWB2ZtI8kcHxPY/2ZXZvcupuN4tSem+pjaP7eN5bp1lbw8lfklDiHKuh9dIf5yxpKDFvo4hTW60bv5ytFRUG9mpH5yGGUeLXGN3rPeHuUgo97NObdrBMzxLcsjR67g+5SjEdlK+b87Ph0n/Uw8O/WeVoqndXO+93YeL82Ur4j/geEqM2n3jYe+35QW/ejkHvy296zo9rsPdwraf8UjW/rEKHv3J1B4VcDegZKf1nlcf6D6jX8viF+QicfiUosKnxKnfqyeF9+bXsdceYOq7xCw6hjD1ytPvsq3O42fT8uhNv+S7/AMlxZuSqmm7KyAG3JkjfgUosoQNHBjR+EBcDTttbI23hlHwsoA3dPibb5cSb6pZ2/C67Y92mMAC2K66a/KKj4WQTnsW/Ubpw7o08tF97EXvlbfxyi/wUQbsHjWlsVYNde/I7T1xrl/sNjd/+Kx283fy0EwAX3Koedhsbuf8AezLfiB/7a4f7BY0Sb4s31OkH+RBM8i+5VBJN3GMHQ4v6xPO33ALpfutxU8cV9s9QUFhZFwcAOOnmq6k3Q4ieOIxnzfO74rG/oOqSSXVVOSfsSH3oLFlrom+lNGPN7R8SsCfaSiabOracHw7Zl/ZmUNh3IzjjNTuHMfOAHx4Nv7CtnTboMvpMpn9DLUj3tIQbOXbGgH9ciPk7N8LqQ7D47T1PbiCTPkyZu65oGbPb0gL+ieHgtDRbtYo/6hRnzqKs+51wppgWFMp2FrKeGG5uRFexPi4loJPmlGzREUUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==", // replace with real image
  },
  {
    name: "Wallets",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgm2rVvClUdLfLRaGJqizjSf0mHygPCza_Ww&s",
  },
  {
    name: "Bags",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdiUehW00KKazv2HKFr3y-HOvnHZABHQWUQ&s",
  },
]

const Catsection = () => {
  return (
    <div className='w-full px-4 lg:px-20 mt-16 mb-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='font-bold text-gray-900 text-3xl lg:text-4xl mb-4'>Shop By Product</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>Explore our carefully curated categories to find exactly what you're looking for</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20'>
          {categories.map((item, index) => (
            <div key={index} className='group bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
              <div className='relative overflow-hidden'>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 h-16'>
                <p className='font-bold text-gray-900 text-sm lg:text-base'>{item.name}</p>
                <button className='cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-white/50'>
                  <GrLinkNext size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
              <span className='text-3xl'>🚚</span>
            </div>
            <h3 className='font-bold text-gray-900 mb-3 text-lg'>Free Shipping</h3>
            <p className='text-gray-600 leading-relaxed'>On orders over $50</p>
          </div>
          
          <div className='group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
              <span className='text-3xl'>↩️</span>
            </div>
            <h3 className='font-bold text-gray-900 mb-3 text-lg'>Easy Returns</h3>
            <p className='text-gray-600 leading-relaxed'>30-day return policy</p>
          </div>
          
          <div className='group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
              <span className='text-3xl'>💬</span>
            </div>
            <h3 className='font-bold text-gray-900 mb-3 text-lg'>24/7 Support</h3>
            <p className='text-gray-600 leading-relaxed'>Always here to help</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catsection