import { Anchor, Ship, Compass, Settings, Users, FileCheck } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Naval Architecture",
    description: "Comprehensive ship design and structural analysis services ensuring optimal vessel performance and safety compliance.",
  },
  {
    icon: Compass,
    title: "Marine Surveying",
    description: "Expert condition surveys, damage assessments, and classification society coordination for all vessel types.",
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description: "Strategic engineering solutions for fleet optimization, maintenance planning, and operational efficiency.",
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description: "Advisory services for port infrastructure, logistics optimization, and maritime terminal management.",
  },
  {
    icon: Users,
    title: "Crew Management",
    description: "Training programs, certification support, and crew competency development aligned with industry standards.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Guidance through IMO regulations, flag state requirements, and international maritime conventions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive maritime solutions tailored to meet the unique challenges of the global shipping industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-secondary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
