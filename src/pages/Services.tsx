import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  Ship,
  ClipboardCheck,
  Shield,
  Compass,
  Wrench,
  Search,
  Droplet,
  Box,
  Ruler,
  Leaf,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Naval Architecture & Basic Design of Ships (All Types)",
    description: "Complete naval architecture services for all vessel types including design, calculations, and technical specifications",
    details: [
      "Hull design and optimization",
      "General arrangement plans",
      "Stability calculations",
      "Structural design and analysis",
      "Performance predictions",
      "Tank capacity calculations",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Project Management and Consultancy",
    description: "From new builds to complex retrofitting projects, we offer project management services that streamline processes and ensure timely delivery within budgetary constraints.",
    details: [
      "Timeline management and scheduling",
      "Budget control and cost optimization",
      "Quality assurance and control",
      "Risk management and mitigation",
      "Stakeholder coordination",
      "Technical documentation management",
    ],
  },
  {
    icon: Shield,
    title: "All Regulatory Compliance Documentation (Flag & IMO)",
    description: "Staying abreast of constantly evolving regulations is crucial in the maritime industry. Our consultants ensure that your operations adhere to all relevant international and local standards.",
    details: [
      "Flag state requirements and documentation",
      "IMO regulations compliance",
      "Classification society rules",
      "SOLAS and MARPOL compliance",
      "Statutory certificates preparation",
      "Audit support and representation",
    ],
  },
  {
    icon: Compass,
    title: "Ship Design and Optimization",
    description: "Advanced ship design services focusing on performance optimization, fuel efficiency, and operational excellence",
    details: [
      "Hull form optimization",
      "Propulsion system design",
      "Fuel efficiency improvements",
      "Performance analysis and testing",
      "Computational fluid dynamics",
      "Speed and power predictions",
    ],
  },
  {
    icon: Wrench,
    title: "Modification & Repair Consultancy",
    description: "Expert technical support for vessel modifications, conversions, and repair projects",
    details: [
      "Structural modification planning",
      "System upgrades and retrofits",
      "Conversion project management",
      "Damage assessment and repair",
      "Life extension studies",
      "Modernization programs",
    ],
  },
  {
    icon: Search,
    title: "Marine Surveying and Inspections",
    description: "Comprehensive vessel inspection and surveying services including ultrasonic thickness measurement",
    details: [
      "Pre-purchase surveys",
      "Condition and damage surveys",
      "Ultrasonic thickness measurement",
      "Load line surveys",
      "Hull inspections",
      "Machinery surveys",
    ],
  },
  {
    icon: Droplet,
    title: "Ballast Water Treatment and Retrofits",
    description: "Environmental compliance solutions for ballast water management systems",
    details: [
      "BWTS system selection",
      "Installation design and support",
      "Compliance documentation",
      "Type approval assistance",
      "Retrofit engineering",
      "Testing and commissioning",
    ],
  },
  {
    icon: Box,
    title: "3D Twins of Ships and Rigs",
    description: "Advanced digital twin technology for vessels and offshore rigs",
    details: [
      "3D modeling and visualization",
      "Virtual simulation capabilities",
      "Planning and optimization",
      "Training and presentation tools",
      "Asset management integration",
      "Retrofit planning support",
    ],
  },
  {
    icon: Ruler,
    title: "Production Drawings Preparation",
    description: "Detailed technical drawing services for shipbuilding and repair",
    details: [
      "General arrangement drawings",
      "Structural detail drawings",
      "System layout drawings",
      "Fabrication drawings",
      "Workshop drawings",
      "As-built documentation",
    ],
  },
  {
    icon: Leaf,
    title: "Green Technology & Sustainable Shipping Concepts",
    description: "As advocates for sustainable practices, we assist clients in adopting eco-friendly technologies and strategies to minimize environmental impact.",
    details: [
      "Emission reduction strategies",
      "Alternative fuel assessment",
      "Energy efficiency improvements",
      "Hybrid propulsion systems",
      "Carbon footprint analysis",
      "Environmental compliance",
    ],
  },
];

const vessels = [
  { name: "Tank Barge", classification: "CLASS" },
  { name: "Spud Barge Conversion", classification: "CLASS" },
  { name: "Barge Conversion", classification: "CLASS" },
  { name: "Tugs", classification: "CLASS + GCC" },
  { name: "Pleasure Yachts", classification: "CLASS" },
  { name: "Houseboats", classification: "NEW BUILDS" },
  { name: "Crew Boats", classification: "GCC" },
  { name: "VIP Boats", classification: "NEW BUILDS" },
  { name: "Pleasure Yacht", classification: "NEW BUILD" },
  { name: "Offshore Supply Vessel", classification: "CLASS" },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary to-secondary text-white flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4 opacity-90">
            <Link to="/" className="hover:underline">Home</Link> &gt; Services
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90">Comprehensive Maritime Solutions Tailored to Your Needs</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are a shipping company, port authority, or maritime service provider, we are dedicated to supporting your business goals with our comprehensive range of services.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full p-6 flex items-start gap-4 hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedService === index ? (
                        <ChevronUp className="h-6 w-6 text-primary" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {expandedService === index && (
                    <div className="px-6 pb-6 pt-0 bg-muted/30 animate-fade-in">
                      <div className="ml-[72px]">
                        <h4 className="font-semibold mb-3 text-primary">Key Services Include:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <Link to="/contact">
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              Request Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vessels We Handle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Types of Vessels We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across all vessel categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {vessels.map((vessel, index) => (
              <Card key={index} className="card-hover border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <Ship className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2 text-sm">{vessel.name}</h4>
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {vessel.classification}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

              {/* Steps */}
              {[
                {
                  step: 1,
                  title: "Consultation & Assessment",
                  points: ["Initial meeting", "Requirement analysis", "Feasibility study"],
                },
                {
                  step: 2,
                  title: "Design & Planning",
                  points: ["Technical design", "Documentation", "Approval process"],
                },
                {
                  step: 3,
                  title: "Implementation & Execution",
                  points: ["Project management", "Quality control", "Timeline monitoring"],
                },
                {
                  step: 4,
                  title: "Quality Assurance & Delivery",
                  points: ["Final inspections", "Documentation delivery", "Post-delivery support"],
                },
              ].map((process, index) => (
                <div key={index} className="relative flex items-start gap-6 mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl z-10">
                    {process.step}
                  </div>
                  <Card className="flex-1 border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                      <ul className="space-y-2">
                        {process.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Maritime Consultancy?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is ready to discuss your project requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
