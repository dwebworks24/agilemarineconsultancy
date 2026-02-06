import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ClipboardCheck, Users, Calendar, DollarSign, Shield, CheckCircle, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-project-management.jpg";

const ProjectManagement = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Project Management & Consultancy"
        subtitle="Expert Guidance from Concept to Completion"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Project Management", path: "/services/project-management" }
        ]}
        backgroundImage={bannerImage}
      />

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Project Management</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                From new builds to complex retrofitting projects, we offer comprehensive project management services that streamline processes, ensure timely delivery, and maintain budgetary constraints.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our experienced project managers coordinate all aspects of maritime projects, acting as the single point of contact between owners, shipyards, classification societies, and regulatory authorities.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Services</h3>
              <ul className="space-y-3">
                {[
                  "Project planning and scheduling",
                  "Budget management and cost control",
                  "Vendor and contractor coordination",
                  "Quality assurance and inspections",
                  "Risk management",
                  "Stakeholder communication",
                  "Documentation management",
                  "Site supervision and progress monitoring"
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

      {/* What We Manage */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Manage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ClipboardCheck, title: "New Build Projects", desc: "Complete oversight of vessel construction" },
              { icon: Calendar, title: "Retrofit Projects", desc: "Modernization and upgrade management" },
              { icon: Users, title: "Repair Projects", desc: "Coordination of repair and maintenance work" },
              { icon: Shield, title: "Conversion Projects", desc: "Management of vessel conversion engineering" },
              { icon: DollarSign, title: "Compliance Projects", desc: "Regulatory approval project management" },
              { icon: ClipboardCheck, title: "Multi-Vessel Projects", desc: "Fleet-wide project coordination" }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Project Management?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us handle the complexity while you focus on your core business. Our project management expertise ensures successful delivery every time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement;
