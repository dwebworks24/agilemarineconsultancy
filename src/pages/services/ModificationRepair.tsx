import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, Settings, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-modification-repair.jpg";

const ModificationRepair = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Modification & Repair Consultancy"
        subtitle="Expert Technical Support for Vessel Upgrades"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Modification & Repair", path: "/services/modification-repair" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Modification Services</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our modification and repair consultancy services provide expert technical support for vessel alterations, conversions, and repair projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From structural modifications to system upgrades, we ensure that all work meets regulatory requirements and maintains vessel integrity.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Services Offered</h3>
              <ul className="space-y-3">
                {[
                  "Structural modification design",
                  "System upgrade engineering",
                  "Conversion project management",
                  "Repair specifications and scope development",
                  "Damage assessment and recommendations",
                  "Life extension studies",
                  "Modernization projects",
                  "Survey and inspection coordination"
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
            <h2 className="text-3xl font-bold mb-4">Common Modifications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Accommodation Upgrades", desc: "Enhanced crew/passenger facilities" },
              { icon: Settings, title: "Cargo System Modifications", desc: "Improved cargo handling" },
              { icon: RefreshCw, title: "Propulsion Upgrades", desc: "Engine and propeller modifications" },
              { icon: Wrench, title: "Structural Strengthening", desc: "Deck and hull reinforcement" },
              { icon: Settings, title: "Equipment Installation", desc: "Cranes, winches, BWTS, scrubbers" },
              { icon: RefreshCw, title: "Conversion Projects", desc: "Purpose change conversions" }
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
          <h2 className="text-4xl font-bold mb-6">Plan Your Modification Project</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Expert engineering support for all vessel modification and repair needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModificationRepair;
