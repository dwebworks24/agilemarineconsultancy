import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/HeroSlider";
import ClientLogos from "@/components/ClientLogos";
import ServicesCircle from "@/components/ServicesCircle";
import {
  Users,
  Ship,
  Award,
  Shield,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import value1 from "@/assets/value-1.jpg";
import value2 from "@/assets/value-2.jpg";
import value3 from "@/assets/value-3.jpg";
import value4 from "@/assets/value-4.jpg";

const stats = [
  { icon: Users, number: 15, label: "Happy Clients", suffix: "+", gradient: "from-blue-500 to-cyan-500" },
  { icon: Ship, number: 40, label: "Vessels Handled", suffix: "+", gradient: "from-primary to-blue-600" },
  { icon: Award, number: 10, label: "Service Types", suffix: "+", gradient: "from-secondary to-green-600" },
  { icon: Shield, number: 3, label: "ISO Certifications", suffix: "", gradient: "from-amber-500 to-orange-600" },
];

const values = [
  { image: value1, title: "Excellence", description: "Delivering high-quality services that exceed expectations" },
  { image: value2, title: "Innovation", description: "Embracing cutting-edge solutions for maritime challenges" },
  { image: value3, title: "Expertise", description: "Deep industry knowledge and technical proficiency" },
  { image: value4, title: "Client-Centric", description: "Your success is our priority" },
];

const Home = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.number;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const valuesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setTimeout(() => {
              setVisibleValues((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const valueCards = document.querySelectorAll(".value-card");
    valueCards.forEach((card) => valuesObserver.observe(card));

    return () => valuesObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* About Snippet */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in">Welcome to Agile Marine Consultancy</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8 animate-fade-in text-justify">
              We specialize in delivering innovative solutions and expert consultancy services tailored to the maritime
              industry. With a deep commitment to excellence and a passion for maritime engineering, we are dedicated to
              helping our clients navigate challenges and optimize their operations efficiently.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 animate-fade-in">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview - Circular Diagram */}
      <ServicesCircle />

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Agile Marine Consultancy</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in maritime excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-index={index}
                className={`value-card transition-all duration-700 ${
                  visibleValues.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group border-none shadow-md overflow-hidden h-full hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-32 md:h-52 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-3 md:p-6 flex-1 flex flex-col bg-white">
                      <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 gradient-text">{value.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-justify flex-1">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={statsRef} className="py-12 md:py-20 bg-gradient-to-br from-navy-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 md:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-white relative z-10 animate-float" style={{ animationDelay: `${index * 200}ms` }} />
                </div>
                <div className="text-3xl md:text-6xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-xl opacity-90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos />

      {/* CTA Section with Testimonials */}
      <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
              Ready to Navigate Your Maritime Challenges?
            </h2>
            <p className="text-base md:text-xl mb-8 md:mb-12 opacity-90 animate-fade-in">
              Let's discuss how we can help optimize your maritime operations
            </p>
            
            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
              {[
                {
                  quote: "Agile Marine Consultancy provided exceptional support for our vessel certification. Their expertise saved us time and money.",
                  name: "Captain Ahmed",
                  company: "Al Hamoor Marine"
                },
                {
                  quote: "Professional, reliable, and always available. They understood our needs and delivered beyond expectations.",
                  name: "Mohammad Al Rashid",
                  company: "Liwa Shipbuilding"
                },
                {
                  quote: "Their naval architecture team is outstanding. The design optimization reduced our fuel consumption significantly.",
                  name: "Sarah Johnson",
                  company: "Clearwater Shipping"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm md:text-base opacity-90 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs opacity-70">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 hover:scale-105 transition-transform animate-fade-in">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
