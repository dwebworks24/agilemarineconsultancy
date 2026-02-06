import { useEffect, useRef, useState } from "react";

interface Stakeholder {
  name: string;
  color: string;
  position: number; // position in hexagon arrangement (0-5)
}

const stakeholders: Stakeholder[] = [
  { name: "COMMERCIAL OWNERS", color: "#FF6B35", position: 0 }, // Top
  { name: "CLASSIFICATION SOCIETIES", color: "#FFD700", position: 1 }, // Top-right
  { name: "PRIVATE OWNERS", color: "#C4D600", position: 2 }, // Bottom-right
  { name: "SHIPPING AGENTS", color: "#8BC34A", position: 3 }, // Bottom
  { name: "SHIPYARDS", color: "#2E7D32", position: 4 }, // Bottom-left
  { name: "FLAGS & GOVERNMENT ENTITIES", color: "#1B5E20", position: 5 }, // Top-left
];

const StakeholdersHexagon = () => {
  const [centerVisible, setCenterVisible] = useState(false);
  const [connectorsVisible, setConnectorsVisible] = useState(false);
  const [visibleStakeholders, setVisibleStakeholders] = useState<number[]>([]);
  const [hoveredStakeholder, setHoveredStakeholder] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !centerVisible) {
          // Phase 1: Center appears (0-600ms)
          setCenterVisible(true);
          
          // Phase 2: Connectors appear (600-900ms)
          setTimeout(() => {
            setConnectorsVisible(true);
          }, 600);
          
          // Phase 3: Hexagons appear sequentially (900ms+, 150ms between each)
          setTimeout(() => {
            stakeholders.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStakeholders((prev) => [...prev, index]);
              }, index * 150); // 0.15 second delay between each
            });
          }, 900);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [centerVisible]);

  const getHexagonPosition = (position: number) => {
    const angle = (position * 60 - 90) * (Math.PI / 180); // 60° apart, starting from top
    const radius = 40; // Reduced from 45 to 40 (10% reduction for tighter gaps)
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Stakeholder Network</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building Strong Partnerships Across the Maritime Industry
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '1' }}>
          {/* Center Hexagon */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-out ${
              centerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div 
              className="relative flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
              style={{
                width: '200px',
                height: '230px',
                background: '#1572B9',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <div className="text-center px-6">
                <p className="text-white font-bold text-sm leading-tight">
                  AGILE MARINE
                  <br />
                  CONSULTANCY
                </p>
              </div>
            </div>
          </div>

          {/* Connector Lines/Shapes */}
          {connectorsVisible && stakeholders.map((stakeholder, index) => {
            const pos = getHexagonPosition(stakeholder.position);
            const centerX = 50;
            const centerY = 50;
            
            return (
              <div
                key={`connector-${index}`}
                className={`absolute transition-all duration-300 ${
                  connectorsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                  style={{
                    top: `${(centerY + pos.y) / 2}%`,
                    left: `${(centerX + pos.x) / 2}%`,
                    width: '20px',
                    height: '20px',
                    background: '#FFE4E1',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    transform: 'translate(-50%, -50%)',
                    transitionDelay: '0ms',
                  }}
              />
            );
          })}

          {/* Stakeholder Hexagons */}
          {stakeholders.map((stakeholder, index) => {
            const isVisible = visibleStakeholders.includes(index);
            const pos = getHexagonPosition(stakeholder.position);
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-[15deg]"
                } ${hoveredStakeholder === index ? "z-20 scale-110" : "z-10"}`}
                style={{
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={() => setHoveredStakeholder(index)}
                onMouseLeave={() => setHoveredStakeholder(null)}
              >
                <div
                  className="flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:brightness-110"
                  style={{
                    width: '160px',
                    height: '185px',
                    background: stakeholder.color,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  <p className="text-white font-bold text-xs text-center px-4 leading-tight">
                    {stakeholder.name}
                  </p>
                </div>
                
                {hoveredStakeholder === index && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap z-30 animate-fade-in max-w-xs">
                    <p className="text-sm font-medium text-foreground">{stakeholder.name}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StakeholdersHexagon;
