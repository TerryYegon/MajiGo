'use client';

import { useState, FormEvent } from 'react';

interface OrderFormProps {
  vendorName: string;
  pricePerLiter: number;
}

const PAYMENT_METHODS = ['M-Pesa', 'Card', 'Bank Transfer', 'Cash on Delivery'];

export default function OrderForm({ vendorName, pricePerLiter }: OrderFormProps) {
  const [liters, setLiters] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const totalPrice = liters ? (parseFloat(liters) * pricePerLiter).toFixed(2) : '0.00';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage(
        `Order placed successfully! ${liters} liters from ${vendorName} will be delivered to ${location}.`
      );

      // Reset form
      setLiters('');
      setLocation('');
      setPhoneNumber('');
      setPaymentMethod('M-Pesa');

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-2 text-black">Order Details</h2>
      <p className="text-black mb-6">Vendor: {vendorName}</p>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {successMessage}
        </div>
      )}

      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">
          Liters <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          min="1"
          step="0.5"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
          placeholder="Enter number of liters"
          required
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">
          Delivery Location <span className="text-red-500">*</span>
        </label>
        <textarea 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your delivery address"
          required
          rows={3}
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Payment Method <span className="text-red-500">*</span>
        </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {PAYMENT_METHODS.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="254712345678"
          required
          pattern="^[0-9+]{10,15}$"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Total Price:</span>
          <span className="text-2xl font-bold text-blue-600">KES {totalPrice}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !liters || !location || !phoneNumber}
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  );
}
