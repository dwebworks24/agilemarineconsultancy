import { Shield, Award, Globe, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Unwavering commitment to maritime safety standards and best practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional quality in every project we undertake.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide network of experts serving clients across all continents.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock availability for urgent maritime consultations.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Consultants" },
  { value: "40+", label: "Countries Served" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              Navigating Excellence in Maritime Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Agile Marine Consultancy brings together decades of maritime expertise with innovative 
              approaches to solve complex challenges in the shipping and offshore industries. Our team 
              of seasoned professionals delivers tailored solutions that drive operational efficiency 
              and ensure regulatory compliance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From naval architecture to port operations, we provide end-to-end consultancy services 
              that empower our clients to achieve their strategic objectives while maintaining the 
              highest standards of safety and sustainability.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-gradient rounded-2xl p-10 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Our Track Record
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
