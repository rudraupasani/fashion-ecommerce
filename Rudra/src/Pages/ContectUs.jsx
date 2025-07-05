import { useState } from 'react';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('✅ Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-indigo-50 via-white to-pink-100 min-h-screen py-16 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/30">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md">
              Contact Us
            </h1>
            <p className="mt-2 text-gray-700 text-lg">
              Have questions? Reach out and we’ll respond as soon as we can.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
              >
                ✉️ Send Message
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-600 border-t pt-6">
            <p>
              Or reach out at <span className="font-medium text-indigo-600">support@yourecommerce.com</span> <br />
              or call us at <span className="font-medium text-indigo-600">(555) 123-4567</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
