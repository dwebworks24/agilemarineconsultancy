import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Agile Marine Consultancy provided exceptional support for our vessel certification. Their expertise saved us time and money. Highly recommended for any maritime project.",
    name: "Captain Ahmed Al Mansouri",
    company: "Al Hamoor Marine Services",
    role: "Operations Director"
  },
  {
    quote: "Professional, reliable, and always available. They understood our needs and delivered beyond expectations. Their naval architecture team is world-class.",
    name: "Mohammad Al Rashid",
    company: "Liwa Shipbuilding",
    role: "Project Manager"
  },
  {
    quote: "Their design optimization reduced our fuel consumption by 15%. The ROI was evident within the first year. Outstanding technical expertise and customer service.",
    name: "Sarah Johnson",
    company: "Clearwater Shipping LLC",
    role: "Fleet Manager"
  },
  {
    quote: "We've worked with many consultancies, but Agile Marine stands out for their dedication and technical knowledge. They made our retrofit project seamless.",
    name: "Khalid Hassan",
    company: "Neptune Diving Services",
    role: "Technical Director"
  },
  {
    quote: "Their regulatory compliance support was invaluable. They kept us ahead of all deadlines and ensured smooth flag state approvals.",
    name: "James Wilson",
    company: "Sea Safari Marine",
    role: "Compliance Officer"
  },
  {
    quote: "Exceptional 3D modeling and digital twin services. The accuracy and detail exceeded our expectations for our new vessel project.",
    name: "Omar Farouk",
    company: "Quest Marine Trading",
    role: "Chief Engineer"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  };

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading maritime companies across the region
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white h-10 w-10 md:h-12 md:w-12 rounded-full"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white h-10 w-10 md:h-12 md:w-12 rounded-full"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-8 md:px-0">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={currentIndex * itemsPerView + index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
