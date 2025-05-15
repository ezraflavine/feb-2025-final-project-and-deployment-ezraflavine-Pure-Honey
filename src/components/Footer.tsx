
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-honey-600 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pure Natural Honey</h3>
            <p className="mb-4">Bringing nature's sweetness straight from our beehives to your table since 1995.</p>
            <p>&copy; {currentYear} Pure Natural Honey. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/products" className="hover:underline">Our Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p className="mb-2">123 Bee Lane, Honey Valley</p>
              <p className="mb-2">Meadowshire, MS 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@purenaturalhoney.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
