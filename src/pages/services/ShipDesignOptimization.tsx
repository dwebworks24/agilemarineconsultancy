import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Gauge, Fuel, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-ship-design.jpg";

const ShipDesignOptimization = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Ship Design & Optimization"
        subtitle="Maximize Performance, Minimize Costs"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Ship Design & Optimization", path: "/services/ship-design-optimization" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Performance Enhancement Services</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our ship design and optimization services focus on enhancing vessel performance, fuel efficiency, and operational excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Using advanced computational tools and hydrodynamic analysis, we optimize hull forms, propulsion systems, and operational parameters to deliver measurable improvements.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Optimization Services</h3>
              <ul className="space-y-3">
                {[
                  "Hull form optimization for reduced resistance",
                  "Propulsion efficiency analysis",
                  "Speed-power performance optimization",
                  "Fuel consumption reduction studies",
                  "Seakeeping and motion analysis",
                  "Operational profile optimization",
                  "Retrofit recommendations",
                  "Trim and ballast optimization"
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
            <h2 className="text-3xl font-bold mb-4">Performance Improvements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Fuel, title: "Fuel Efficiency", desc: "5-15% reduction in fuel consumption" },
              { icon: Gauge, title: "Speed Optimization", desc: "Enhanced speed-power curves" },
              { icon: TrendingUp, title: "Seakeeping", desc: "Improved comfort and safety" },
              { icon: Zap, title: "Emissions Reduction", desc: "Lower environmental impact" },
              { icon: TrendingUp, title: "Operational Costs", desc: "Reduced maintenance and running costs" }
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
          <h2 className="text-4xl font-bold mb-6">Optimize Your Vessel Performance</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Achieve significant cost savings and performance improvements with our optimization expertise.
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

export default ShipDesignOptimization;
