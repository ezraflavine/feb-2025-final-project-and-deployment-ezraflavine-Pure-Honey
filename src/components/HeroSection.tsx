
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({ title, subtitle, image, buttonText, buttonLink }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-honey-100">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-honey-500/30 to-honey-300/20"></div>
      </div>
      <div className="container-custom relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl mb-6 text-honey-800">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-honey-700">{subtitle}</p>
          {buttonText && buttonLink && (
            <Link to={buttonLink}>
              <Button size="lg" className="honey-btn text-lg">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
