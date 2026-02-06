import { Anchor, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="w-8 h-8 text-accent" />
              <span className="font-display text-xl font-bold">Agile Marine</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Delivering innovative maritime solutions and expert consultancy services to the global shipping industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Naval Architecture</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Marine Surveying</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Technical Consulting</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Port Operations</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">News & Insights</a></li>
              <li><a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Agile Marine Consultancy. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Registered in England & Wales. Company No. 12345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
