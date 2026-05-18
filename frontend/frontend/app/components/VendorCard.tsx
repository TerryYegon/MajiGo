'use client';

import Link from 'next/link';

interface VendorCardProps {
  id: string;
  name: string;
  distance: number;
  pricePerLiter: number;
  county: string;
}

export default function VendorCard({
  id,
  name,
  distance,
  pricePerLiter,
  county,
}: VendorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Distance:</span>
            <span className="font-semibold text-gray-800">{distance}km away</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price per liter:</span>
            <span className="font-semibold text-blue-600">KES {pricePerLiter}</span>
          </div>
        </div>

        <Link
          href={`/order?vendorId=${id}&vendorName=${name}&pricePerLiter=${pricePerLiter}&county=${county}`}
          className="block w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-center hover:bg-blue-700 transition"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
