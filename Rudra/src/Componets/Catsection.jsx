import React from 'react'
import { GrLinkNext } from "react-icons/gr"

const categories = [
  {
    name: "T-shirts",
    img: "https://via.placeholder.com/150", // replace with real image
  },
  {
    name: "Shirts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiofWsb0UBDog_zhvzvZftAP7Nt8QQ9wf6_A&s",
  },
  {
    name: "Shoes",
    img: "https://via.placeholder.com/150", // replace with real image
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
    <div className='w-full px-4 lg:px-20 mt-10'>
      <h1 className='font-bold text-black text-lg lg:text-2xl mb-5'>Shop By Product</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {categories.map((item, index) => (
          <div key={index} className='bg-white shadow rounded-lg overflow-hidden'>
            <img src={item.img} alt={item.name} className='w-full h-40 object-cover' />
            <div className='flex items-center justify-between px-4 py-2 bg-blue-50 h-12'>
              <p className='font-bold text-black text-md'>{item.name}</p>
              <button className='cursor-pointer text-black'><GrLinkNext /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catsection
