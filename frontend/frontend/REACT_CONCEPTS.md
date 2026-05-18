# React Concepts Reference Guide - MajiGo App

## 1. Components & Props

### Component Definition
```tsx
// Functional component
export default function HeroSection() {
  return (
    <section className="...">
      {/* JSX */}
    </section>
  );
}
```

### Props Example
```tsx
// Parent component
<VendorCard
  id={vendor.id}
  name={vendor.name}
  distance={vendor.distance}
  pricePerLiter={vendor.pricePerLiter}
/>

// Child component receives props
interface VendorCardProps {
  id: string;
  name: string;
  distance: number;
  pricePerLiter: number;
}

export default function VendorCard({
  id,
  name,
  distance,
  pricePerLiter,
}: VendorCardProps) {
  // Use props
}
```

## 2. State Management with useState

### Basic Usage
```tsx
import { useState } from 'react';

export default function HeroSection() {
  // Declare state variable
  const [selectedCounty, setSelectedCounty] = useState('');

  // Update state
  const handleChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  // Use in JSX
  return (
    <select value={selectedCounty} onChange={handleChange}>
      <option value="">Choose...</option>
    </select>
  );
}
```

### Multiple State Variables (OrderForm)
```tsx
const [liters, setLiters] = useState('');
const [location, setLocation] = useState('');
const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
const [phoneNumber, setPhoneNumber] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
```

## 3. Effects with useEffect

### Fetch Data When Dependency Changes
```tsx
import { useEffect } from 'react';

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const county = searchParams.get('county');

  // Run effect when county changes
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call
    const timer = setTimeout(() => {
      const data = MOCK_VENDORS[county] || [];
      setVendors(data);
      setIsLoading(false);
    }, 500);

    // Cleanup
    return () => clearTimeout(timer);
  }, [county]); // Dependency array

  return (/* JSX */);
}
```

### Key Concepts:
- **Dependency Array**: Controls when effect runs
  - `[]` - Runs once on mount
  - `[county]` - Runs when county changes
  - No array - Runs after every render (avoid!)

## 4. Forms & Form Handling

### Controlled Input
```tsx
const [liters, setLiters] = useState('');

<input
  type="number"
  value={liters}
  onChange={(e) => setLiters(e.target.value)}
  placeholder="Enter number of liters"
  required
/>
```

### Form Submission
```tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Prevent page reload

  setIsSubmitting(true);

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Success handling
    setSuccessMessage('Order placed successfully!');

    // Reset form
    setLiters('');
    setLocation('');
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <form onSubmit={handleSubmit}>
    {/* form fields */}
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Processing...' : 'Place Order'}
    </button>
  </form>
);
```

### Form Validation
```tsx
<input
  type="tel"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  required
  pattern="^[0-9+]{10,15}$"
/>

<button
  disabled={!liters || !location || !phoneNumber}
  // Button disabled until all fields filled
/>
```

## 5. Fetch API & Data

### Mock Data Pattern
```tsx
const MOCK_VENDORS: Record<string, Vendor[]> = {
  Nairobi: [
    { id: '1', name: 'Aqua Fresh', distance: 2, pricePerLiter: 20 },
    { id: '2', name: 'Pure Water Ltd', distance: 5, pricePerLiter: 18 },
  ],
  Mombasa: [
    { id: '3', name: 'Coast Water', distance: 1, pricePerLiter: 19 },
  ],
};
```

### Ready for Real API
```tsx
useEffect(() => {
  const fetchVendors = async () => {
    try {
      const response = await fetch(`/api/vendors?county=${county}`);
      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  fetchVendors();
}, [county]);
```

## 6. Dynamic Routes

### Route Structure
```
app/
├── page.tsx              # / (homepage)
├── vendors/
│   └── page.tsx         # /vendors (vendors page)
└── order/
    └── page.tsx         # /order (order page)
```

### Reading URL Parameters
```tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function VendorsPage() {
  const searchParams = useSearchParams();
  const county = searchParams.get('county') || '';
  // Use county value
}
```

### Passing Parameters
```tsx
// Navigation with query params
<a href={`/vendors?county=${selectedCounty}`}>
  Find Vendors
</a>

// Or with Link component
<Link
  href={`/order?vendorId=${id}&vendorName=${name}`}
>
  Order Now
</Link>
```

## 7. Conditional Rendering

### Loading State
```tsx
{isLoading && (
  <div className="text-center">
    <p>Loading vendors...</p>
  </div>
)}
```

### Empty State
```tsx
{!isLoading && vendors.length === 0 && (
  <div className="text-center">
    <h2>No vendors found</h2>
  </div>
)}
```

### Success Message
```tsx
{successMessage && (
  <div className="bg-green-100 text-green-700 p-4 rounded">
    {successMessage}
  </div>
)}
```

## 8. Array Mapping (Rendering Lists)

```tsx
{vendors.map((vendor) => (
  <VendorCard
    key={vendor.id}
    id={vendor.id}
    name={vendor.name}
    distance={vendor.distance}
    pricePerLiter={vendor.pricePerLiter}
  />
))}
```

## 9. Computed Values (Derived State)

```tsx
// Don't store in state - calculate from other state
const totalPrice = liters ? (parseFloat(liters) * pricePerLiter).toFixed(2) : '0.00';

// Update when dependencies change
useEffect(() => {
  // Recalculate derived values
}, [liters, pricePerLiter]);
```

## 10. Client vs Server Components

```tsx
// Server Component (default)
// Can access databases, APIs, etc. directly
export default function HomePage() {
  return <div>Server component</div>;
}

// Client Component (needs interactivity)
'use client';

import { useState } from 'react';

export default function InteractiveForm() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

## 11. Tailwind CSS Responsive Design

```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

// Responsive padding/sizing
<section className="px-4 py-8 md:px-8 md:py-16 lg:px-12 lg:py-20">
  {/* Different padding at different breakpoints */}
</section>

// Hover effects
<button className="bg-blue-600 hover:bg-blue-700 transition">
  Click me
</button>

// Disabled state
<button disabled className="disabled:opacity-50 disabled:cursor-not-allowed">
  Submit
</button>
```

## 12. TypeScript with React

### Props Interface
```tsx
interface VendorCardProps {
  id: string;
  name: string;
  distance: number;
  pricePerLiter: number;
}

export default function VendorCard(props: VendorCardProps) {
  // Type-safe props
}

// Or with destructuring
export default function VendorCard({
  id,
  name,
  distance,
}: VendorCardProps) {
  // ...
}
```

### Form Event Types
```tsx
import { FormEvent, ChangeEvent } from 'react';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

## Practice Exercises

1. **Add a back button** - Use `window.history.back()` or Link to home
2. **Add error handling** - Show error message if vendor fetch fails
3. **Add search/filter** - Filter vendors by name or price
4. **Add sorting** - Sort vendors by distance or price
5. **Save order to localStorage** - Persist order data
6. **Add order history page** - Show past orders
7. **Add quantity in cart** - Increment/decrement liters
8. **Add reviews** - Show vendor ratings and reviews
