import React from 'react';

const products = [
  {
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with 40 hours of battery life.',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
  },
  {
    name: 'Smartphone',
    description: 'Latest-gen 5G smartphone with AMOLED display and triple camera system.',
    image: 'https://via.placeholder.com/300x200?text=Smartphone',
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker with rich bass and 12-hour playtime.',
    image: 'https://via.placeholder.com/300x200?text=Speaker',
  },
  {
    name: 'Smart Watch',
    description: 'Fitness-focused smartwatch with heart rate monitoring and GPS.',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
  },
];

const GetStartedPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get Started with Electronics</h1>
        <p className="text-lg text-gray-600">
          Discover our curated collection of essential electronics to power your day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedPage;
