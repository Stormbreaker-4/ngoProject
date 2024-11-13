import React from 'react';

const HomePage = () => (
  <div className="space-y-12 py-8">
    {/* Hero Section */}
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Make a Difference Today</h1>
        <p className="text-xl mb-8">Your generosity can change lives. Join us in making the world a better place.</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:bg-blue-100">
          Start Donating
        </button>
      </div>
    </div>

    {/* About Us Section */}
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 leading-relaxed">
            We are dedicated to making a positive impact in our community through the power of giving. 
            Our platform connects generous donors with those in need, ensuring that your contributions 
            make the maximum impact where they're needed most.
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg">
          {/* Placeholder for about image */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            About Image Placeholder
          </div>
        </div>
      </div>
    </div>

    {/* Photo Gallery */}
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 h-48 rounded-lg">
            {/* Placeholder for gallery images */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Photo {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;