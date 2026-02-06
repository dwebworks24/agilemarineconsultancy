import { useState } from "react";
import SubBanner from "@/components/SubBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projectsBanner from "@/assets/projects-banner.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";

const projects = [
  {
    id: 1,
    name: "Tank Barge Classification",
    vesselType: "Tank Barge",
    service: "Classification",
    year: "2024",
    category: "Modifications",
    description: "Complete classification and compliance documentation for 5000 DWT tank barge",
    image: service1,
  },
  {
    id: 2,
    name: "Pleasure Yacht New Build",
    vesselType: "Luxury Yacht",
    service: "Naval Architecture",
    year: "2024",
    category: "New Builds",
    description: "45m luxury yacht design with cutting-edge amenities and performance",
    image: service2,
  },
  {
    id: 3,
    name: "Tug Modification Project",
    vesselType: "Harbor Tug",
    service: "Modifications",
    year: "2023",
    category: "Modifications",
    description: "Bollard pull upgrade and propulsion system enhancement",
    image: service3,
  },
  {
    id: 4,
    name: "Offshore Supply Vessel Survey",
    vesselType: "OSV",
    service: "Marine Surveying",
    year: "2024",
    category: "Surveys",
    description: "Comprehensive pre-purchase survey and condition assessment",
    image: service4,
  },
  {
    id: 5,
    name: "Spud Barge Conversion",
    vesselType: "Spud Barge",
    service: "Conversion Engineering",
    year: "2023",
    category: "Conversions",
    description: "Conversion of cargo barge to specialized accommodation platform",
    image: service5,
  },
  {
    id: 6,
    name: "VIP Boat Design",
    vesselType: "VIP Boat",
    service: "Ship Design",
    year: "2024",
    category: "New Builds",
    description: "Custom 15m VIP transport vessel with premium finishes",
    image: service6,
  },
  {
    id: 7,
    name: "Houseboat New Build",
    vesselType: "Houseboat",
    service: "New Build Construction",
    year: "2024",
    category: "New Builds",
    description: "Eco-friendly floating home with modern amenities",
    image: service1,
  },
  {
    id: 8,
    name: "Crew Boat Compliance",
    vesselType: "Crew Boat",
    service: "Regulatory Compliance",
    year: "2023",
    category: "Surveys",
    description: "Flag state and IMO compliance documentation package",
    image: service2,
  },
  {
    id: 9,
    name: "Platform Supply Vessel Refit",
    vesselType: "PSV",
    service: "Refit Engineering",
    year: "2024",
    category: "Modifications",
    description: "Major refit and life extension project for aging PSV",
    image: service3,
  },
];

const categories = ["All Projects", "New Builds", "Conversions", "Modifications", "Surveys"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Sub-banner */}
      <SubBanner
        title="Our Projects"
        subtitle="Showcasing Maritime Excellence Across the Globe"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/projects" },
        ]}
        backgroundImage={projectsBanner}
      />

      {/* Filter Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "hover:border-primary"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-[250px] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.vesselType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-sm font-medium text-secondary">
                        {project.service}
                      </span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="group-hover:text-primary"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More (if needed) */}
          {filteredProjects.length > 9 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and bring your maritime vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
