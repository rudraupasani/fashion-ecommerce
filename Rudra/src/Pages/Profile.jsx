import React from "react";
import {
  ShoppingBag,
  CreditCard,
  Heart,
  LogOut,
  Settings,
  Edit,
  ChevronRight,
} from "lucide-react";
import Navbar from "../Componets/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("✅ Logged out successfully");
  };

  const menuItems = [
    { icon: <ShoppingBag size={20} />, label: "My Orders" },
    { icon: <CreditCard size={20} />, label: "Payment Methods" },
    { icon: <Heart size={20} />, label: "Wishlist" },
    { icon: <Settings size={20} />, label: "Account Settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white">
      <Navbar />

      <main className="w-full px-4 sm:px-8 py-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Profile Card */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition">
              <div className="relative inline-block">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFAgMGB//EAC0QAQACAQIGAQIFBQEAAAAAAAABAgMEEQUSITFBUWETcSIyUoGhM0JiscEU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0QAAAAAAAAT8R1n4Ira1uWInm9bdQQLuPhuW0b3vWnx3Tk4bkiN6ZK2n1MbAojvLiyYp2yUmP9OAAAAAAARKUSkAAAAAABY0mlnUfinpjidplXb2Gn0sdaRH5Y2/cDDhx4a7Y6xHz5l3MRvvsAAAItWLxy2iJifEs/V6DaJvp+0d6NE7dgfPCzxDHGPUzt0i0cysAAAACJSiUgAAAAAA7wxvlpE9ptEfy33z9Lcl62jxMS34mLRFo7TG8AAAAAAAzeLx1xzHfaVBe4taJy0p6jqogAAAAiUolIAAAAAAO8WOcuStK95lt4Mc4sVaTbm5em8sfR3imqxzPbfaW2AAAAAADG19cn/pvbJG3N2+yuv8Xt+PHXztMqAAAAAIlKJSAAAAAABt67trTammalIi0TkmOtd+rFeunyfSz0v6nr9gbgbxPYAAAJ7eP3GfxXJ+TFHvmn/gKmsyfW1N7R2idoeIAAAAAiUolIAAAAAABIbbg2OH5JyaaObvXpusq3DqzXSV36bzMrIAAIvbkpa3qN2DkyWy5LXtPWZb2SvNS1fcTD5/aY6T38gAAAAAAiUolIAAAbm4A98WkzZdprXaPdui5j4bjj+pa1viOkAzYibTtWJmfhd0/D7W2tn/DX9PmWhiw48MbY6RHz5dgREViIjtAAAAClqtBGS03xTy2nvHiV0BgZMd8duW9ZiflzD6C9K3rtasTHyq5OHYbfkmafbsDKQtZtBlxzvSIvHx3Ve0zExMTHiQAARKUSkAHeLHOXLTHH909we2k0ltRPNaZrj97d/s0sOlw4etabz7t1l61rFKxWOkR0hIHgAAAAAAAAAAABxlw480bZKRPz5dgM3U8PmlZvhmbf4z3UH0LI4jh+lqOaI2rfrER49gqSlEpAXeF05s1rz/bH8ypS1eF05cE2/VILgAAAAAAAAAAAAAAACnxSnNp4v5rMLjz1FPqYMlfdZBgylEpAbejjbS4tv0xIA9gAAAAAAAAAAAAAAAAAfP5YiuS8R2i0oAH/2Q=="
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow"
                />
                <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition">
                  <Edit size={16} />
                </button>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">Rudra Upasani</h2>
              <p className="text-sm text-gray-500">rudra@example.com</p>
              <p className="text-xs text-gray-400 mt-1">Member since Jan 2024</p>

              <button
                onClick={handleLogout}
                className="mt-6 inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Right Section: Full-Width Panels */}
          <div className="lg:col-span-2 w-full space-y-8">
            {/* Menu Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <ul className="divide-y divide-gray-100">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-blue-600">{item.icon}</span>
                        <span className="text-base font-medium text-gray-800">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight size={20} className="text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Orders Section */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition">
              <div className="px-6 py-5 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
              </div>
              <div className="px-6 py-10 text-center text-gray-400 text-sm">
                You don't have any recent orders yet.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
