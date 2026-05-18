'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import OrderForm from '../components/OrderForm';

export default function OrderPage() {
  const searchParams = useSearchParams();
  const vendorName = searchParams.get('vendorName') || 'Unknown Vendor';
  const pricePerLiterStr = searchParams.get('pricePerLiter') || '0';
  const pricePerLiter = parseFloat(pricePerLiterStr);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Place Your Order</h1>
        </div>

        {/* Order Form */}
        <OrderForm vendorName={vendorName} pricePerLiter={pricePerLiter} />

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">1.</span>
              <span>Fill in the order form with your details</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">2.</span>
              <span>Choose your preferred payment method</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">3.</span>
              <span>Confirm your delivery location</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">4.</span>
              <span>
                Receive a confirmation call and your water will be delivered
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
