
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wildflower Honey",
    description: "A sweet and floral honey collected from various wildflowers.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Raw Honey",
    featured: true
  },
  {
    id: 2,
    name: "Clover Honey",
    description: "A light, mild honey with a pleasant, slightly floral taste.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1555211652-5c6222f9215e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Raw Honey",
    featured: true
  },
  {
    id: 3,
    name: "Manuka Honey",
    description: "Premium honey known for its unique antibacterial properties.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608691389398-ea619153195b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Specialty Honey",
    featured: true
  },
  {
    id: 4,
    name: "Honey Comb",
    description: "Raw honeycomb straight from our hives to your table.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1601563420507-88976d3b7637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Raw Honey",
    featured: false
  },
  {
    id: 5,
    name: "Creamed Honey",
    description: "Smooth, spreadable honey with a delightful creamy texture.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1566114954192-f1765059246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Specialty Honey",
    featured: false
  },
  {
    id: 6,
    name: "Lavender Honey",
    description: "Delicate honey with a subtle lavender essence.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Floral Honey",
    featured: true
  }
];
