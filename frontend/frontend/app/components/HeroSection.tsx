'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample Kenyan counties
const COUNTIES = [
  'Nairobi',
  'Mombasa',
  'Kisumu',
  'Nakuru',
  'Eldoret',
  'Thika',
  'Uasin Gishu',
  'Kiambu',
  'Kajiado',
];

export default function HeroSection() {
  const [selectedCounty, setSelectedCounty] = useState('');

  const handleOrderClick = () => {
    if (selectedCounty) {
      // Navigate to vendors page with selected county
      window.location.href = `/vendors?county=${selectedCounty}`;
    }
  };

  return (
    <section className="w-full relative text-white py-20 px-4">
      <div className="absolute inset-0">
        <img src="/image.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-left mb-6">
          <img src="/logo.jpg" alt="MajiGo Logo" className="h-16 w-auto" />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Order Clean Water Near You</h1>
        <p className="text-xl mb-12 opacity-90">
          Fast, reliable water delivery service right to your door
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <label className="block text-gray-800 font-semibold mb-2">
            Select County
          </label>
          <select
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a county...</option>
            {COUNTIES.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>

          <button
            onClick={handleOrderClick}
            disabled={!selectedCounty}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Find Vendors
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
