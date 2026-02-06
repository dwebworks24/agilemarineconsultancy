import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, PenTool, Layers, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-production-drawings.jpg";

const ProductionDrawings = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Production Drawings Preparation"
        subtitle="Detailed Technical Documentation for Construction"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Production Drawings", path: "/services/production-drawings" }
        ]}
        backgroundImage={bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Technical Documentation</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our production drawing services provide comprehensive technical documentation for vessel construction and repair.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We prepare detailed drawings that meet classification society requirements and facilitate efficient fabrication and assembly.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Drawing Types</h3>
              <ul className="space-y-3">
                {[
                  "General Arrangement (GA) drawings",
                  "Structural drawings (shell expansion, sections, details)",
                  "Outfitting drawings",
                  "Piping system layouts",
                  "Electrical single-line diagrams",
                  "HVAC system drawings",
                  "Detail and fabrication drawings",
                  "Assembly drawings"
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
            <h2 className="text-3xl font-bold mb-4">Drawing Packages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "New Build Package", desc: "Complete construction drawings" },
              { icon: PenTool, title: "Modification Package", desc: "As-fitted and modification drawings" },
              { icon: Layers, title: "Repair Package", desc: "Repair specifications and details" },
              { icon: FileText, title: "As-Built Package", desc: "Final as-built documentation" },
              { icon: PenTool, title: "Classification Package", desc: "Drawings for class approval" }
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
          <h2 className="text-4xl font-bold mb-6">Get Your Production Drawings</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Professional technical drawings for efficient construction and fabrication.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductionDrawings;
