export interface Vendor {
  id: string;
  name: string;
  distance: number;
  pricePerLiter: number;
  county: string;
}

export interface Order {
  liters: number;
  location: string;
  paymentMethod: string;
  phoneNumber: string;
  vendorName: string;
  totalPrice: number;
}
