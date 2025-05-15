
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';

const Home = () => {
  // Filter featured products
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Pure Honey, Straight from Nature" 
        subtitle="Discover the rich flavors of our ethically harvested honey, made by happy bees in pristine environments."
        image="https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        buttonText="Discover Our Products"
        buttonLink="/products"
      />
      
      {/* About Section */}
      <section className="section-padding honeycomb">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576879556679-5efd605adc08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Beekeeper harvesting honey"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionTitle title="Our Honey Story" />
              <p className="mb-6">At Pure Natural Honey, we've been passionate about bees and their amazing products for over 25 years. Our journey began with a single hive and has grown into a thriving family business dedicated to producing the finest quality honey while protecting these vital pollinators.</p>
              <p className="mb-6">Our honey is harvested using sustainable methods that respect the bees and their environment. We never heat-treat our honey, ensuring all the natural enzymes, antioxidants, and beneficial properties remain intact.</p>
              <Link to="/about">
                <Button variant="outline" className="border-honey-500 text-honey-700 hover:bg-honey-500 hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Featured Products" 
            subtitle="Discover our most popular honey varieties, harvested with care and delivered fresh to your doorstep."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button className="honey-btn">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-honey-100">
        <div className="container-custom">
          <SectionTitle 
            title="Benefits of Natural Honey" 
            subtitle="Pure honey is not just delicious but also packed with health benefits"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Natural Energy Source</h3>
              <p>Honey provides a quick, natural energy boost with its perfect blend of glucose and fructose.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Antioxidant Properties</h3>
              <p>Raw honey contains powerful antioxidants that help protect your body from cell damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Soothing Properties</h3>
              <p>Honey has natural soothing qualities, perfect for calming coughs and sore throats.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Customers Say" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <p className="italic mb-4">"I've been buying honey from many sources over the years, but Pure Natural Honey truly stands out. The flavor is rich and complex, and I love knowing it comes from ethical beekeeping practices."</p>
              <p className="font-bold text-honey-700">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <p className="italic mb-4">"The wildflower honey has become a staple in our household. My kids love it on toast, and I use it in my tea every morning. You can really taste the difference of pure, raw honey!"</p>
              <p className="font-bold text-honey-700">- Michael Thompson</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-honey-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Pure Natural Honey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover the difference that ethically harvested, raw honey can make in your life.</p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-honey-700 hover:bg-honey-100">Shop Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
