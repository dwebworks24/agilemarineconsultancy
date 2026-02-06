import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Box, Scan, Monitor, Database, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-3d-twins.jpg";

const DigitalTwins = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="3D Digital Twins of Ships & Rigs"
        subtitle="Advanced Digital Modeling & Simulation"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "3D Digital Twins", path: "/services/3d-twins" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Digital Twin Services</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our 3D digital twin services create accurate virtual replicas of vessels and offshore structures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These digital models serve multiple purposes including as-built documentation, maintenance planning, training simulations, and modification planning.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Digital Twin Services</h3>
              <ul className="space-y-3">
                {[
                  "Complete 3D as-built modeling",
                  "Laser scanning and point cloud processing",
                  "Detailed compartment modeling",
                  "Equipment and system modeling",
                  "Virtual reality integration",
                  "Maintenance planning support",
                  "Training simulator development",
                  "Modification planning and visualization"
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Applications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Box, title: "As-Built Documentation", desc: "Accurate record of vessel configuration" },
              { icon: Scan, title: "Maintenance Planning", desc: "Visual reference for repairs and inspections" },
              { icon: Monitor, title: "Training", desc: "Virtual walkthroughs and familiarization" },
              { icon: Database, title: "Modification Planning", desc: "Visualize changes before implementation" },
              { icon: Box, title: "Asset Management", desc: "Digital record of vessel systems" }
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

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Create Your Digital Twin</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Advanced 3D modeling and digital documentation for your maritime assets.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwins;
