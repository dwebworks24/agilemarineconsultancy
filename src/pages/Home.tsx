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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">Welcome to Agile Marine Consultancy</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 animate-fade-in text-justify">
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Agile Marine Consultancy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in maritime excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col bg-white">
                      <h3 className="text-2xl font-bold mb-3 gradient-text">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-justify flex-1">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-navy-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <stat.icon className="h-12 w-12 text-white relative z-10 animate-float" style={{ animationDelay: `${index * 200}ms` }} />
                </div>
                <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-xl opacity-90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Navigate Your Maritime Challenges?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in">
              Let's discuss how we can help optimize your maritime operations
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform animate-fade-in">
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
