import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  color: string;
  angle: number; // degrees
}

const services: Service[] = [
  { name: "Project Management", color: "bg-marine-green", angle: 0 },
  { name: "Naval Architecture", color: "bg-ocean-blue", angle: 36 },
  { name: "Surveying & Inspections", color: "bg-yellow-500", angle: 72 },
  { name: "Green Technology & Sustainable Shipping", color: "bg-marine-green", angle: 108 },
  { name: "Ballast Water Treatment & Retrofits", color: "bg-ocean-blue", angle: 144 },
  { name: "Production Drawings", color: "bg-marine-green", angle: 180 },
  { name: "3D Twins of Ships & Rigs", color: "bg-yellow-500", angle: 216 },
  { name: "All Regulatory Compliance Documentation", color: "bg-orange-500", angle: 252 },
  { name: "Modification & Repairs", color: "bg-yellow-500", angle: 288 },
  { name: "Ship Design & Optimization", color: "bg-ocean-blue", angle: 324 },
];

const ServicesCircle = () => {
  const [centerVisible, setCenterVisible] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !centerVisible) {
          // Phase 1: Center appears (0-600ms)
          setCenterVisible(true);
          
          // Phase 2: Lines appear (600-1000ms)
          setTimeout(() => {
            setLinesVisible(true);
          }, 600);
          
          // Phase 3: Circles appear sequentially (1000ms+, 150ms between each)
          setTimeout(() => {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices((prev) => [...prev, index]);
              }, index * 150); // 0.15 second delay between each
            });
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [centerVisible]);

  const getCirclePosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180); // -90 to start from top
    const x = 50 + radius * Math.cos(radian);
    const y = 50 + radius * Math.sin(radian);
    return { x, y };
  };

  const radius = 38; // percentage radius from center

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Maritime Solutions Tailored to Your Needs
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '1' }}>
          {/* Center Ellipse - Reduced Size */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-out ${
              centerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              <div 
                className="rounded-full bg-gradient-to-br from-ocean-blue to-primary flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ width: '200px', height: '140px' }}
              >
                <div className="text-center px-4">
                  <p className="text-white font-bold text-sm leading-tight">
                    AGILE MARINE
                    <br />
                    CONSULTANCY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines - Stop at Center Border */}
          {linesVisible && services.map((service, index) => {
            const isServiceVisible = visibleServices.includes(index);
            const pos = getCirclePosition(service.angle, radius);
            const centerX = 50;
            const centerY = 50;
            const centerRadiusX = 6.25; // 100px / 1600px = 6.25% for 200px width ellipse
            const centerRadiusY = 4.375; // 70px / 1600px = 4.375% for 140px height ellipse
            const serviceCircleRadius = 7; // Percentage radius of service circles
            
            // Calculate angle from center to service
            const angleRad = Math.atan2(pos.y - centerY, pos.x - centerX);
            
            // Line starts at center ellipse border
            const lineStartX = centerX + centerRadiusX * Math.cos(angleRad);
            const lineStartY = centerY + centerRadiusY * Math.sin(angleRad);
            
            // Line ends at service circle edge
            const distance = Math.sqrt(Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2));
            const lineEndX = centerX + (distance - serviceCircleRadius) * Math.cos(angleRad);
            const lineEndY = centerY + (distance - serviceCircleRadius) * Math.sin(angleRad);
            
            const lineLength = Math.sqrt(
              Math.pow(lineEndX - lineStartX, 2) + 
              Math.pow(lineEndY - lineStartY, 2)
            );

            return (
              <svg
                key={`line-${index}`}
                className={`absolute transition-all duration-400 ${
                  isServiceVisible ? "opacity-100" : "opacity-0"
                } ${hoveredService === index ? "opacity-100" : "opacity-40"}`}
                style={{
                  left: `${lineStartX}%`,
                  top: `${lineStartY}%`,
                  width: `${lineLength}%`,
                  height: '2px',
                  transform: `rotate(${angleRad}rad)`,
                  transformOrigin: 'left center',
                  overflow: 'visible',
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
              </svg>
            );
          })}

          {/* Service Circles */}
          {services.map((service, index) => {
            const isServiceVisible = visibleServices.includes(index);
            const pos = getCirclePosition(service.angle, radius);
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ${
                  isServiceVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-[10deg]"
                } ${hoveredService === index ? "z-20" : "z-10"}`}
                style={{
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: isServiceVisible ? '0ms' : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  perspective: '1000px',
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`relative w-28 h-28 md:w-36 md:h-36 cursor-pointer`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredService === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 900ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 rounded-full ${service.color} flex items-center justify-center shadow-xl backface-hidden`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <p className="text-white font-semibold text-xs md:text-sm text-center px-3 leading-tight">
                      {service.name}
                    </p>
                  </div>
                  
                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 rounded-full ${service.color} flex items-center justify-center shadow-xl backface-hidden`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <Link to={`/services/${service.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>
                      <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                        Know More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Explore our comprehensive range of maritime consultancy services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
