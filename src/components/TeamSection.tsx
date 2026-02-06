import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown, Calculator, Monitor, UserCheck, Compass, HardHat, Settings, PenTool, Lightbulb } from "lucide-react";

interface TeamLevel {
  role: string;
  count: number;
  icon: any;
  level: number;
}

const teamStructure: TeamLevel[] = [
  // Level 1 - Executive
  { role: "Managing Director", count: 1, icon: Crown, level: 1 },
  
  // Level 2 - Department Heads
  { role: "Accounts Manager", count: 1, icon: Calculator, level: 2 },
  { role: "IT & PR Officer", count: 1, icon: Monitor, level: 2 },
  { role: "Assistant Manager", count: 2, icon: UserCheck, level: 2 },
  
  // Level 3 - Senior Engineers
  { role: "Sr. Naval Architect", count: 1, icon: Compass, level: 3 },
  { role: "Sr. Structural Engineer", count: 1, icon: HardHat, level: 3 },
  { role: "Sr. Piping & Machinery Engineer", count: 1, icon: Settings, level: 3 },
  
  // Level 4 - Support Team
  { role: "Draughtsman", count: 2, icon: PenTool, level: 4 },
  { role: "Maritime Consultant", count: 2, icon: Lightbulb, level: 4 },
];

const TeamSection = () => {
  const getTeamByLevel = (level: number) => teamStructure.filter(t => t.level === level);
  const totalTeam = teamStructure.reduce((acc, t) => acc + t.count, 0);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizational Excellence in Maritime Consulting
          </p>
        </div>

        {/* Level 1 - Executive */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-center mb-6">
            {getTeamByLevel(1).map((member, index) => (
              <Card 
                key={index}
                className="w-80 border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-2">
                    {member.count}
                  </div>
                  <p className="text-sm text-muted-foreground">Strategic Leadership & Operations</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connecting Line Level 1 to 2 */}
          <div className="flex justify-center mb-6">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-secondary"></div>
          </div>
        </div>

        {/* Level 2 - Department Heads */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {getTeamByLevel(2).map((member, index) => (
              <Card 
                key={index}
                className="border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <member.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.role}</h3>
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-bold mb-2">
                    {member.count}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {member.role.includes("Accounts") ? "Financial Management" : 
                     member.role.includes("IT") ? "Tech & PR" : "Operations"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connecting Line Level 2 to 3 */}
          <div className="flex justify-center mb-6">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-secondary"></div>
          </div>
        </div>

        {/* Level 3 - Senior Engineers */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {getTeamByLevel(3).map((member, index) => (
              <Card 
                key={index}
                className="border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <member.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.role}</h3>
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-bold mb-2">
                    {member.count}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {member.role.includes("Naval") ? "Ship Design" : 
                     member.role.includes("Structural") ? "Structural Analysis" : "Mechanical Systems"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connecting Line Level 3 to 4 */}
          <div className="flex justify-center mb-6">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-secondary"></div>
          </div>
        </div>

        {/* Level 4 - Support Team */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {getTeamByLevel(4).map((member, index) => (
              <Card 
                key={index}
                className="border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <member.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.role}</h3>
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-bold mb-2">
                    {member.count}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {member.role.includes("Draughtsman") ? "Technical Drawings" : "Specialized Expertise"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Total Team Counter & CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="border-none shadow-md bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8">
              <div className="text-6xl font-bold gradient-text mb-2">{totalTeam}</div>
              <p className="text-lg text-muted-foreground font-medium mb-6">Expert Professionals</p>
              <p className="text-sm text-muted-foreground mb-6">Dedicated to Maritime Excellence</p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform text-white shadow-lg"
                >
                  Join Our Team
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
