
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div>
      <HeroSection 
        title="Our Story & Mission" 
        subtitle="Learn about our passion for bees and commitment to sustainable beekeeping"
        image="https://images.unsplash.com/photo-1473973266408-ed4e00bb6fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Honey Journey" />
              <p className="mb-4">Pure Natural Honey began in 1995 when founders James and Emily Wilson discovered their passion for beekeeping on their small family farm. What started as two hives quickly grew as they realized the incredible quality of honey their bees produced in the unspoiled meadows of their property.</p>
              <p className="mb-4">Over the years, we've grown from that small family operation to working with a network of dedicated local beekeepers who share our values of sustainability, ethical bee management, and exceptional quality. Despite our growth, we've maintained our commitment to traditional harvesting methods that preserve the honey's natural properties.</p>
              <p>Today, we're proud to offer a diverse range of pure, raw honey varieties, each with its unique flavor profile reflecting the flowers and environment where the bees forage.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544929636-0a895a3b2766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Pure Natural Honey founders"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-honey-100">
        <div className="container-custom">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Bee Welfare</h3>
              <p>We prioritize the health and well-being of our bee colonies, never taking more honey than they can spare and ensuring they have safe, pesticide-free environments to thrive in.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Environmental Stewardship</h3>
              <p>We're committed to sustainable practices that protect and enhance the natural habitats our bees depend on, planting pollinator-friendly flowers and advocating for bee conservation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-honey-700 mb-4">Quality & Purity</h3>
              <p>We never compromise on the quality of our honey. Our products are always raw, unfiltered, and free from additives, preserving all the natural enzymes and beneficial properties.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="From Hive to Table: Our Process" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-honey-500 text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-honey-700 mb-2">Happy Bees</h3>
              <p>Our bees forage in pristine meadows and forests, collecting nectar from diverse wildflowers.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-honey-500 text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-honey-700 mb-2">Ethical Harvesting</h3>
              <p>We carefully collect honey frames, leaving plenty for the bees to sustain their colony.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-honey-500 text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-honey-700 mb-2">Gentle Extraction</h3>
              <p>Using traditional methods, we extract honey without heat to preserve its natural properties.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-honey-500 text-white text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-honey-700 mb-2">Quality Control</h3>
              <p>Every batch is tested for purity and quality before being carefully bottled and delivered to you.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="section-padding bg-honey-50">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate people behind Pure Natural Honey"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="James Wilson"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-honey-700">James Wilson</h3>
              <p className="text-gray-600 mb-4">Founder & Master Beekeeper</p>
              <p>With over 30 years of experience in beekeeping, James oversees our apiaries and ensures the health of our bee colonies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                alt="Emily Wilson"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-honey-700">Emily Wilson</h3>
              <p className="text-gray-600 mb-4">Founder & Product Developer</p>
              <p>Emily's discerning palate and culinary background guide our product development, creating unique honey blends and infusions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Michael Chen"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-honey-700">Michael Chen</h3>
              <p className="text-gray-600 mb-4">Environmental Specialist</p>
              <p>Michael works with local farmers and landowners to create bee-friendly environments and sustainable foraging areas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
