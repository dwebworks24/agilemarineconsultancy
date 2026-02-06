import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Sun, Wind, Zap, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-green-technology.jpg";

const GreenTechnology = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Green Technology & Sustainable Shipping"
        subtitle="Environmental Solutions for Modern Maritime"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Green Technology", path: "/services/green-technology" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainable Maritime Solutions</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                As advocates for sustainable practices, we assist clients in adopting eco-friendly technologies and strategies to minimize environmental impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our green technology services help vessel owners reduce emissions, improve energy efficiency, and comply with environmental regulations.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Green Solutions</h3>
              <ul className="space-y-3">
                {[
                  "Emission reduction strategies",
                  "Alternative fuel feasibility studies",
                  "Energy efficiency optimization",
                  "Renewable energy integration (solar, wind)",
                  "EEXI and CII compliance",
                  "Exhaust gas cleaning systems (scrubbers)",
                  "Shore power (cold ironing) installations",
                  "Waste heat recovery systems"
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
            <h2 className="text-3xl font-bold mb-4">Green Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "Solar Integration", desc: "Solar panel installations and systems" },
              { icon: Wind, title: "Wind Assistance", desc: "Wind-assisted propulsion solutions" },
              { icon: Zap, title: "Battery Hybrid", desc: "Battery hybrid power systems" },
              { icon: Leaf, title: "Alternative Fuels", desc: "LNG, methanol, ammonia feasibility" },
              { icon: Sun, title: "Energy Management", desc: "Advanced energy management systems" }
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
          <h2 className="text-4xl font-bold mb-6">Go Green with Your Fleet</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sustainable maritime solutions for environmental compliance and reduced operational costs.
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

export default GreenTechnology;
