import SubBanner from "@/components/SubBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Shield, CheckCircle, Award, ArrowRight } from "lucide-react";
import bannerImage from "@/assets/service-regulatory-compliance.jpg";

const RegulatoryCompliance = () => {
  return (
    <div className="min-h-screen">
      <SubBanner
        title="Regulatory Compliance Documentation"
        subtitle="Navigate Maritime Regulations with Confidence"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Regulatory Compliance", path: "/services/regulatory-compliance" }
        ]}
        backgroundImage={bannerImage}
      />

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Full Compliance Assurance</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Staying abreast of constantly evolving regulations is crucial in the maritime industry. Our consultants ensure that your operations adhere to all relevant international and local standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We prepare comprehensive documentation packages for flag state, IMO, and classification society requirements, ensuring smooth approvals and certifications.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Compliance Services</h3>
              <ul className="space-y-3">
                {[
                  "Flag State documentation and approvals",
                  "IMO convention compliance (SOLAS, MARPOL, etc.)",
                  "Classification society submissions",
                  "Safety management system (ISM Code)",
                  "Security plans (ISPS Code)",
                  "Environmental compliance documentation",
                  "Certificate renewals and surveys",
                  "Audit preparation and support"
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

      {/* Documentation */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Documentation We Prepare</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Stability Booklet", desc: "Approved stability documentation" },
              { icon: Award, title: "Tonnage Certificates", desc: "Gross and net tonnage calculations" },
              { icon: Shield, title: "Load Line Certificates", desc: "Freeboard and load line documentation" },
              { icon: CheckCircle, title: "Safety Certificates", desc: "SOLAS compliance certificates" },
              { icon: FileText, title: "Pollution Prevention", desc: "MARPOL compliance documentation" },
              { icon: Award, title: "Manning & Training", desc: "STCW compliance documents" }
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ensure Full Compliance</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stay compliant with all maritime regulations. Let our experts handle your documentation needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegulatoryCompliance;
