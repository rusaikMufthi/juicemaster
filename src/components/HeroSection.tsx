import { Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fresh juices" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up font-display">
          Freshness in Every Sip 🍊
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200 leading-relaxed">
          Welcome to our fresh and vibrant fruit juice shop, where quality meets taste. 😋 
          We serve a wide variety of freshly prepared fruit juices made from carefully 
          selected fruits to give you the perfect refreshment any time of the day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
          <a href="tel:+94703443465" className="btn-primary-juice text-base">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=53+W.A.+Silva+Mawatha,+Colombo+00600,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-juice border-white/80 text-white hover:bg-white/10"
          >
            <MapPin className="w-5 h-5" />
             View Location
          </a>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
