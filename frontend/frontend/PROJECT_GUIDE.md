# MajiGo Frontend - Water Delivery App

A modern water delivery application built with **Next.js 16**, **React 19**, and **Tailwind CSS**.

## Project Structure

```
app/
├── components/           # Reusable components
│   ├── HeroSection.tsx  # Hero section with county selector
│   ├── FeaturesSection.tsx  # Features showcase
│   ├── VendorCard.tsx   # Individual vendor card component
│   └── OrderForm.tsx    # Order placement form
├── vendors/             # Vendors page route
│   └── page.tsx
├── order/               # Order page route
│   └── page.tsx
├── types/               # TypeScript types
│   └── index.ts
├── page.tsx             # Homepage
├── layout.tsx           # Root layout
└── globals.css          # Global styles
```

## Pages

### 1. **Homepage** (`/`)
- **Hero Section**: County selection dropdown and "Find Vendors" CTA button
- **Features Section**: Displays 4 key features (Fast Delivery, Quality Assured, Best Prices, Easy Ordering)
- Uses dynamic county selection to navigate to vendors page

### 2. **Vendors Page** (`/vendors?county=...`)
- Displays all available vendors for selected county
- Shows vendor name, distance, and price per liter
- "Order Now" button that navigates to order page with vendor details
- Loading state and empty state handling
- Responsive grid layout (1 column on mobile, 3 columns on desktop)

### 3. **Order Page** (`/order`)
- Comprehensive order form with fields:
  - Liters (number input with 0.5L increments)
  - Delivery location (textarea)
  - Payment method (dropdown: M-Pesa, Card, Bank Transfer, Cash on Delivery)
  - Phone number (tel input with validation)
- Real-time total price calculation
- Form validation and submission handling
- Success message display

## React Concepts Used

### 1. **Components**
- Functional components (modern approach)
- Component composition and reusability
- Props passing for data flow

### 2. **Hooks**

#### `useState`
- Used in:
  - `HeroSection.tsx`: Manage selected county state
  - `OrderForm.tsx`: Manage form fields (liters, location, payment method, phone number)
  - `VendorsPage`: Manage vendors list and loading state
  - `OrderForm.tsx`: Manage submission state and success message

```tsx
const [selectedCounty, setSelectedCounty] = useState('');
```

#### `useEffect`
- Used in: `VendorsPage`
- Fetches vendors when county changes
- Simulates API call with 500ms delay

```tsx
useEffect(() => {
  // Fetch vendors when county changes
}, [county]);
```

### 3. **Fetch API / Data Management**
- Mock data structure for vendors by county
- Simulated API calls with delays (`setTimeout`)
- Ready to integrate with real backend

### 4. **Forms**
- Controlled form inputs with `onChange` handlers
- Form submission with `handleSubmit`
- Form validation (required fields, input patterns)
- Real-time calculation (total price updates as liters change)

```tsx
<input
  type="number"
  value={liters}
  onChange={(e) => setLiters(e.target.value)}
  required
/>
```

### 5. **Dynamic Routes**
- Page routes: `/vendors/page.tsx`, `/order/page.tsx`
- Query parameters: `?county=Nairobi`, `?vendorId=1`
- Uses `useSearchParams()` hook to read URL params

```tsx
const searchParams = useSearchParams();
const county = searchParams.get('county') || '';
```

### 6. **Client Components**
- `'use client'` directive for client-side interactivity
- Used in components that need hooks or event handlers

### 7. **Tailwind CSS Layouts**
- Responsive grid system: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexbox layouts for alignment
- Utility classes for spacing, colors, typography
- Hover and transition effects
- Dark mode support ready

## Key Features

✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Form Validation** - Phone number pattern matching, required fields
✅ **Loading States** - Simulated API calls with loading indicators
✅ **Error Handling** - Empty states when no vendors available
✅ **Real-time Calculations** - Total price updates instantly
✅ **TypeScript** - Full type safety with interfaces

## Running the App

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## User Flow

1. **Homepage** → Select county and click "Find Vendors"
2. **Vendors Page** → Browse vendors with prices and distances
3. **Order Page** → Fill order form and place order
4. **Success** → Confirmation message displays

## API Integration Ready

The app is structured to easily integrate with a backend:
- Replace mock data in `/vendors/page.tsx` with fetch calls
- Update `OrderForm.tsx` to send orders to backend
- Add error handling for API failures

## Concepts Practiced

- ✅ React Components (functional, reusable)
- ✅ Props (passing data to components)
- ✅ useState Hook (manage component state)
- ✅ useEffect Hook (side effects, data fetching)
- ✅ Fetch API (ready for backend integration)
- ✅ Forms (controlled inputs, validation, submission)
- ✅ Dynamic Routes (dynamic pages with query params)
- ✅ Tailwind CSS (responsive layouts, utility classes)
- ✅ useSearchParams Hook (reading URL parameters)
- ✅ Conditional Rendering (loading, empty, error states)
- ✅ Array Mapping (rendering lists of components)
- ✅ Event Handling (onClick, onChange, onSubmit)
