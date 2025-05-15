
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory && selectedCategory !== 'All'
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <HeroSection 
        title="Our Honey Collection" 
        subtitle="Discover our range of pure, raw honey varieties harvested with care"
        image="https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Explore Our Products" 
            subtitle="Each honey variety has its own unique flavor profile and properties"
            centered
          />
          
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category || (category === 'All' && !selectedCategory)
                    ? 'bg-honey-500 text-white border-honey-500'
                    : 'bg-white text-honey-700 border-honey-300 hover:bg-honey-100'
                } transition-colors`}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Harvesting Process */}
      <section className="section-padding bg-honey-100">
        <div className="container-custom">
          <SectionTitle 
            title="Our Harvesting Process" 
            subtitle="How we preserve the natural goodness of honey"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1587049332298-1c42e83937a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Honey harvesting process"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-honey-700 mb-4">Cold Extraction Method</h3>
              <p className="mb-4">All our honey is harvested using a cold extraction process that preserves the natural enzymes, antioxidants, and beneficial properties of raw honey.</p>
              <p className="mb-4">We never heat-treat our honey, which means it retains its full nutritional value and complex flavor profiles. This traditional method takes more time and care, but the difference in quality is worth it.</p>
              <p>Each jar is carefully bottled by hand, ensuring that what reaches your table is pure, unfiltered honey exactly as nature intended it.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Honey Facts */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Fascinating Honey Facts" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Never Spoils</h3>
              <p>Pure honey is one of the few foods that never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly preserved!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Bee Mathematics</h3>
              <p>To produce just one pound of honey, honey bees must visit approximately 2 million flowers and fly over 55,000 miles, equivalent to more than twice around the world!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Nature's Variety</h3>
              <p>The color and flavor of honey differ depending on the nectar source. There are more than 300 unique types of honey in the United States, each originating from a different floral source.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
