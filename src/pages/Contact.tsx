import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, User, Building, Ship, MessageSquare, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SubBanner from "@/components/SubBanner";
import contactBanner from "@/assets/services-banner.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_km3nilv",
        "template_lo0dzkh",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        "zK7PxPCjSdKZ6YEfl"
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Hero Banner */}
      <SubBanner
        title="Get In Touch"
        subtitle="Let's Navigate Your Maritime Challenges Together"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
        backgroundImage={contactBanner}
      />

      {/* Two-Column Layout */}
      <section className="py-20 bg-background w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-primary" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="flex items-center gap-2 mb-2">
                    <Ship className="h-4 w-4 text-primary" />
                    Service Interest *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="naval-architecture">Naval Architecture & Basic Design</SelectItem>
                      <SelectItem value="project-management">Project Management & Consultancy</SelectItem>
                      <SelectItem value="regulatory-compliance">Regulatory Compliance Documentation</SelectItem>
                      <SelectItem value="ship-design">Ship Design & Optimization</SelectItem>
                      <SelectItem value="modification-repair">Modification & Repair Consultancy</SelectItem>
                      <SelectItem value="marine-surveying">Marine Surveying & Inspections</SelectItem>
                      <SelectItem value="ballast-water">Ballast Water Treatment</SelectItem>
                      <SelectItem value="3d-twins">3D Twins of Ships & Rigs</SelectItem>
                      <SelectItem value="production-drawings">Production Drawings</SelectItem>
                      <SelectItem value="green-technology">Green Technology & Sustainability</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    minLength={20}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length} / 1000 characters
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              {/* Call Us */}
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <div className="space-y-2">
                        <a href="tel:+971528707320" className="block text-muted-foreground hover:text-primary transition-colors">
                          +971 52 870 7320
                        </a>
                        <a href="tel:+971581178856" className="block text-muted-foreground hover:text-primary transition-colors">
                          +971 58 117 8856
                        </a>
                        <a href="tel:+971581178869" className="block text-muted-foreground hover:text-primary transition-colors">
                          +971 58 117 8869
                        </a>
                      </div>
                      <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                        Available 24/7
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Us */}
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <div className="space-y-2">
                        <a
                          href="mailto:operations@agilemarineconsultancy.ae"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          operations@agilemarineconsultancy.ae
                          <span className="block text-xs opacity-75">General Operations</span>
                        </a>
                        <a
                          href="mailto:projects@agilemarineconsultancy.ae"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          projects@agilemarineconsultancy.ae
                          <span className="block text-xs opacity-75">Project Inquiries</span>
                        </a>
                        <a
                          href="mailto:accounts@agilemarineconsultancy.ae"
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          accounts@agilemarineconsultancy.ae
                          <span className="block text-xs opacity-75">Billing & Accounts</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM GST</p>
                        <p>Saturday: 9:00 AM - 2:00 PM GST</p>
                        <p>Sunday: Closed</p>
                        <p>Public Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground mb-3">Abu Dhabi, United Arab Emirates</p>
                      <Button variant="outline" size="sm">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What services does Agile Marine Consultancy offer?",
                  a: "We provide comprehensive maritime solutions including naval architecture, project management, regulatory compliance, ship design, marine surveying, ballast water treatment, 3D digital twins, production drawings, and green technology consulting.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on scope and complexity. Simple surveys may take days while complete ship designs can take months. We provide detailed timelines during initial consultation.",
                },
                {
                  q: "Do you handle international projects?",
                  a: "Yes, we work with clients worldwide and are experienced with international maritime regulations and standards.",
                },
                {
                  q: "What certifications does your company hold?",
                  a: "Agile Marine Consultancy holds ISO 9001, ISO 14001, and ISO 45001 certifications from UAF AMERICO.",
                },
                {
                  q: "How do I request a quote for services?",
                  a: "Fill out our contact form, call us directly, or email your requirements to projects@agilemarineconsultancy.ae",
                },
                {
                  q: "What types of vessels do you specialize in?",
                  a: "We handle all vessel types including tank barges, tugs, pleasure yachts, houseboats, crew boats, VIP boats, offshore supply vessels, and various conversions.",
                },
                {
                  q: "Do you provide emergency or urgent services?",
                  a: "Yes, we offer rapid response services for urgent projects. Contact us 24/7 for emergency support.",
                },
                {
                  q: "How experienced is your team?",
                  a: "Our team comprises 14 seasoned professionals including senior naval architects, structural engineers, and consultants with extensive maritime industry experience.",
                },
                {
                  q: "What software and tools do you use?",
                  a: "We utilize industry-leading software including DraftSight, Auto Hydro, DNV Nauticus, Rhino, Zoho, and Microsoft tools for comprehensive project delivery.",
                },
                {
                  q: "How do you ensure regulatory compliance?",
                  a: "Our consultants stay current with evolving Flag State, IMO, and Classification Society regulations, ensuring all projects meet or exceed required standards.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
