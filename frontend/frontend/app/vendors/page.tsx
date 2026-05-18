'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import VendorCard from '../components/VendorCard';

interface Vendor {
  id: string;
  name: string;
  distance: number;
  pricePerLiter: number;
  county: string;
}

// Mock vendor data for different counties
const MOCK_VENDORS: Record<string, Vendor[]> = {
  Nairobi: [
    {
      id: '1',
      name: 'Aqua Fresh',
      distance: 2,
      pricePerLiter: 20,
      county: 'Nairobi',
    },
    {
      id: '2',
      name: 'Pure Water Ltd',
      distance: 5,
      pricePerLiter: 18,
      county: 'Nairobi',
    },
    {
      id: '3',
      name: 'Crystal Clear',
      distance: 3,
      pricePerLiter: 22,
      county: 'Nairobi',
    },
  ],
  Mombasa: [
    {
      id: '4',
      name: 'Coast Water Co',
      distance: 1,
      pricePerLiter: 19,
      county: 'Mombasa',
    },
    {
      id: '5',
      name: 'Ocean Pure',
      distance: 4,
      pricePerLiter: 20,
      county: 'Mombasa',
    },
  ],
  Kisumu: [
    {
      id: '6',
      name: 'Lake Fresh',
      distance: 2,
      pricePerLiter: 17,
      county: 'Kisumu',
    },
    {
      id: '7',
      name: 'Kisumu Water Hub',
      distance: 6,
      pricePerLiter: 16,
      county: 'Kisumu',
    },
  ],
  Nakuru: [
    {
      id: '8',
      name: 'Valley Water',
      distance: 3,
      pricePerLiter: 19,
      county: 'Nakuru',
    },
    {
      id: '9',
      name: 'Pure Springs',
      distance: 2,
      pricePerLiter: 21,
      county: 'Nakuru',
    },
  ],
  Eldoret: [
    {
      id: '10',
      name: 'Highland Water',
      distance: 1,
      pricePerLiter: 18,
      county: 'Eldoret',
    },
  ],
  Thika: [
    {
      id: '11',
      name: 'Thika Fresh Water',
      distance: 2,
      pricePerLiter: 20,
      county: 'Thika',
    },
  ],
  'Uasin Gishu': [
    {
      id: '12',
      name: 'Uasin Water Supply',
      distance: 4,
      pricePerLiter: 19,
      county: 'Uasin Gishu',
    },
  ],
  Kiambu: [
    {
      id: '13',
      name: 'Kiambu Pure',
      distance: 3,
      pricePerLiter: 19,
      county: 'Kiambu',
    },
  ],
  Kajiado: [
    {
      id: '14',
      name: 'Kajiado Clear Water',
      distance: 5,
      pricePerLiter: 17,
      county: 'Kajiado',
    },
  ],
};

export default function VendorsPage() {
  const searchParams = useSearchParams();
  const county = searchParams.get('county') || '';
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch vendors
    setIsLoading(true);
    const timer = setTimeout(() => {
      const countyVendors = MOCK_VENDORS[county] || [];
      setVendors(countyVendors);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [county]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Available Vendors
          </h1>
          {county && (
            <p className="text-xl text-gray-600">
              Clean water vendors in <span className="font-bold">{county}</span>
            </p>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <div className="text-blue-600 text-3xl">⏳</div>
            </div>
            <p className="text-gray-600 mt-4">Loading vendors...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && vendors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No vendors found
            </h2>
            <p className="text-gray-600 mb-6">
              {county
                ? `Sorry, no vendors available in ${county} yet.`
                : 'Please select a county to view available vendors.'}
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Select a County
            </Link>
          </div>
        )}

        {/* Vendors Grid */}
        {!isLoading && vendors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                id={vendor.id}
                name={vendor.name}
                distance={vendor.distance}
                pricePerLiter={vendor.pricePerLiter}
                county={vendor.county}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
