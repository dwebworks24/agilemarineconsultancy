import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Ship, Compass, Waves, FileText, Anchor, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-naval-architecture.jpg";

const NavalArchitecture = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Naval Architecture & Basic Design"
        subtitle="Precision Engineering for All Vessel Types"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Naval Architecture", path: "/services/naval-architecture" }
        ]}
        backgroundImage={bannerImage}
      />

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Naval Architecture Services</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our naval architecture services encompass the complete design process for vessels of all types and sizes. From initial concept to detailed design, we provide comprehensive engineering solutions that meet international maritime standards and exceed client expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our experienced naval architects utilize state-of-the-art software and industry best practices to deliver innovative, efficient, and seaworthy designs. Whether you're building a new vessel or modifying an existing one, our team ensures structural integrity, stability, and optimal performance.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Services</h3>
              <ul className="space-y-3">
                {[
                  "Hull form design and optimization",
                  "Stability and hydrostatic calculations",
                  "General arrangement planning",
                  "Structural design and analysis",
                  "Weight estimation and longitudinal strength",
                  "Propulsion system design",
                  "Regulatory compliance and classification",
                  "Technical specifications development"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design packages tailored to your project requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Ship, title: "Concept Design", desc: "Initial design concepts and feasibility studies" },
              { icon: Waves, title: "Stability Analysis", desc: "Complete stability booklets and calculations" },
              { icon: Compass, title: "Structural Plans", desc: "Detailed structural design drawings" },
              { icon: Ship, title: "3D Models", desc: "Advanced 3D modeling and visualization" },
              { icon: FileText, title: "Technical Specs", desc: "Comprehensive technical specifications" },
              { icon: CheckCircle, title: "Class Approval", desc: "Full classification society documentation" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "Requirements gathering and feasibility analysis" },
              { step: "02", title: "Concept Development", desc: "Preliminary design and optimization" },
              { step: "03", title: "Detailed Design", desc: "Complete engineering and documentation" },
              { step: "04", title: "Approval & Delivery", desc: "Classification approval and final delivery" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Vessel Design?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert naval architects bring your vision to life with precision engineering and innovative design solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default NavalArchitecture;
