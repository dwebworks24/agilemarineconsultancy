import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-item-dropdown')) {
        setOpenDropdown(null);
      }
    };
    
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Naval Architecture & Basic Design", path: "/services/naval-architecture" },
        { name: "Project Management & Consultancy", path: "/services/project-management" },
        { name: "Regulatory Compliance Documentation", path: "/services/regulatory-compliance" },
        { name: "Ship Design & Optimization", path: "/services/ship-design-optimization" },
        { name: "Modification & Repair Consultancy", path: "/services/modification-repair" },
        { name: "Marine Surveying & Inspections", path: "/services/marine-surveying" },
        { name: "Ballast Water Treatment & Retrofits", path: "/services/ballast-water-treatment" },
        { name: "3D Twins of Ships & Rigs", path: "/services/3d-twins" },
        { name: "Production Drawings Preparation", path: "/services/production-drawings" },
        { name: "Green Technology & Sustainability", path: "/services/green-technology" },
      ]
    },
    // { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with white background */}
          <Link to="/" className="flex items-center">
            <div className="">
              <img src={logo} alt="Agile Marine Consultancy" className="h-14 md:h-16" style={{ width: 'auto', maxWidth: '180px' }} />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative nav-item-dropdown"
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center gap-1 text-base font-medium transition-colors ${
                        location.pathname.startsWith(item.path)
                          ? "text-primary font-semibold"
                          : "text-foreground hover:text-primary"
                      } link-underline`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-0 w-[280px] bg-white rounded-lg shadow-xl border z-[1000] overflow-hidden animate-fade-in"
                        onMouseLeave={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const mouseY = e.clientY;
                          if (mouseY < rect.top - 20 || mouseY > rect.bottom + 20) {
                            setTimeout(() => setOpenDropdown(null), 100);
                          }
                        }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    } link-underline`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Download Brochure Button */}
          <div className="hidden md:block">
            <a 
              href="/brochure.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-md"
            >
              <Download className="h-5 w-5" />
              Download Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full text-base font-medium py-2 text-foreground"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`block text-base font-medium py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
