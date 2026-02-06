import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Droplets, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-ballast-water.jpg";

const BallastWaterTreatment = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Ballast Water Treatment & Retrofits"
        subtitle="Environmental Compliance Solutions"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Ballast Water Treatment", path: "/services/ballast-water-treatment" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">BWTS Compliance Solutions</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our ballast water treatment services ensure compliance with IMO and USCG regulations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide complete engineering support for BWTS selection, installation design, and regulatory approval, helping vessel owners meet environmental requirements.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Services Offered</h3>
              <ul className="space-y-3">
                {[
                  "BWTS system selection and evaluation",
                  "Installation design and engineering",
                  "Structural modification design",
                  "Piping and electrical integration",
                  "Commissioning support",
                  "Type approval documentation",
                  "Class and flag approval",
                  "Crew training coordination"
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
            <h2 className="text-3xl font-bold mb-4">BWTS Installation Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "System Selection", desc: "Evaluate suitable systems for vessel" },
              { icon: Shield, title: "Engineering Design", desc: "Detailed installation drawings" },
              { icon: Zap, title: "Installation Support", desc: "Yard supervision and commissioning" }
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
          <h2 className="text-4xl font-bold mb-6">Ensure BWTS Compliance</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Meet environmental regulations with our expert BWTS retrofit solutions.
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

export default BallastWaterTreatment;
