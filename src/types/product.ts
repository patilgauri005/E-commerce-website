export interface Product {
  _id?: string; // Optional for MongoDB documents
  id: number; // Unique identifier for the product
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  inStock: boolean;
  features: string[];
}
