
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-playfair text-2xl font-bold text-honey-600">Pure Natural Honey</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-honey-500 transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-honey-500 transition-colors">About</Link>
          <Link to="/products" className="font-medium hover:text-honey-500 transition-colors">Products</Link>
          <Link to="/contact" className="font-medium hover:text-honey-500 transition-colors">Contact</Link>
          <Button className="honey-btn">Shop Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link to="/" className="font-medium py-2 hover:text-honey-500 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="font-medium py-2 hover:text-honey-500 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/products" className="font-medium py-2 hover:text-honey-500 transition-colors" onClick={toggleMenu}>Products</Link>
            <Link to="/contact" className="font-medium py-2 hover:text-honey-500 transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button className="honey-btn w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
