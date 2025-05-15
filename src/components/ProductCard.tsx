
import { Product } from '../data/products';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-honey-700">{product.name}</h3>
          <span className="text-honey-600 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4">
          <Link 
            to={`/products/${product.id}`} 
            className="inline-block text-honey-600 hover:text-honey-700 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
