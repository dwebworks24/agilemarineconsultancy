import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, ClipboardCheck, Camera, FileText, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-marine-surveying.jpg";

const MarineSurveying = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Marine Surveying & Inspections"
        subtitle="Comprehensive Vessel Assessments"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Marine Surveying", path: "/services/marine-surveying" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Survey Services</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our marine surveying services provide thorough and objective assessments of vessels and marine structures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our experienced surveyors conduct detailed inspections using advanced equipment including ultrasonic thickness measurement, ensuring accurate evaluation of vessel condition.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Survey Types</h3>
              <ul className="space-y-3">
                {[
                  "Pre-purchase surveys",
                  "Condition surveys",
                  "Damage surveys and claims",
                  "Valuation surveys",
                  "Insurance surveys",
                  "Classification surveys",
                  "On/off-hire surveys",
                  "Ultrasonic thickness measurement (UTM)"
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
            <h2 className="text-3xl font-bold mb-4">What We Inspect</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Hull Structure", desc: "Plating, frames, bulkheads" },
              { icon: ClipboardCheck, title: "Machinery Systems", desc: "Main engines, auxiliaries, pumps" },
              { icon: Camera, title: "Electrical Systems", desc: "Generators, distribution, controls" },
              { icon: FileText, title: "Safety Equipment", desc: "Life-saving and fire-fighting equipment" },
              { icon: Search, title: "Navigation Equipment", desc: "Bridge systems and instruments" },
              { icon: ClipboardCheck, title: "Cargo Systems", desc: "Tanks, hatches, handling equipment" }
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
          <h2 className="text-4xl font-bold mb-6">Schedule a Survey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Professional vessel inspections and comprehensive survey reports.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarineSurveying;
