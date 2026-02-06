import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { image: hero1, title: "Navigating Excellence", subtitle: "Engineering Innovation" },
  { image: hero2, title: "Expert Maritime Solutions", subtitle: "Trusted Worldwide" },
  { image: hero3, title: "Naval Architecture", subtitle: "Precision & Excellence" },
  { image: hero4, title: "Offshore Engineering", subtitle: "Comprehensive Services" },
  { image: hero5, title: "Yacht & Vessel Design", subtitle: "Luxury Meets Engineering" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>

          <div className="relative h-full flex items-center px-4">
            <div className="max-w-3xl text-white animate-fade-in pl-[80px] md:pl-[150px]">
              <h1 className="text-3xl md:text-[52px] lg:text-[52px] font-bold mb-4 animate-fade-in text-left leading-tight">
                {index === 0 ? (
                  <>
                    <span className="whitespace-nowrap">Navigating Excellence,</span>
                    <br />
                    <span className="whitespace-nowrap">Engineering Innovation</span>
                  </>
                ) : slide.title}
              </h1>
              <p className="text-base md:text-xl lg:text-xl mb-8 animate-fade-in opacity-90 text-left">
                {index === 0 ? "Expert Maritime Solutions & Consultancy Services" : slide.subtitle}
              </p>
              {index === 0 && (
                <div className="flex flex-wrap gap-4 relative z-20">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform text-white shadow-lg">
                    <Link to="/services">
                      Explore Services
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-[20px] md:left-[60px] top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm h-12 w-12 md:h-14 md:w-14 rounded-full z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-[20px] md:right-[60px] top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm h-12 w-12 md:h-14 md:w-14 rounded-full z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
