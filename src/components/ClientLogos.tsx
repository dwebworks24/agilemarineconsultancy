import liwaMarine from "@/assets/clients/liwa-marine.jpg";
import ahMarine from "@/assets/clients/ah-marine.jpg";
import seaSafari from "@/assets/clients/sea-safari.jpg";
import blueIris from "@/assets/clients/blue-iris.jpg";
import questMarine from "@/assets/clients/quest-marine.png";
import trioMarine from "@/assets/clients/trio-marine.jpg";
import tripleSeven from "@/assets/clients/triple-seven.jpg";
import xclusiveYachts from "@/assets/clients/xclusive-yachts.jpg";
import clearwaterShipping from "@/assets/clients/clearwater-shipping.jpg";
import michiganPropulsion from "@/assets/clients/michigan-propulsion.jpg";
import shipsBoatsMaintenance from "@/assets/clients/ships-boats-maintenance.jpg";
import alHamoor from "@/assets/clients/al-hamoor.jpg";
import alGaith from "@/assets/clients/al-gaith.jpg";
import alkousMarine from "@/assets/clients/alkous-marine.jpg";
import liwaShipbuilding from "@/assets/clients/liwa-shipbuilding.png";
import neaShipYacht from "@/assets/clients/nea-ship-yacht.jpg";
import tourDubai from "@/assets/clients/tour-dubai.jpg";
import almazrooeiBoats from "@/assets/clients/almazrooei-boats.jpg";
import mayaMaritime from "@/assets/clients/maya-maritime.jpg";
import neptuneDiving from "@/assets/clients/neptune-diving.jpg";
import ajplShip from "@/assets/clients/ajpl-ship.jpg";
import hydroSports from "@/assets/clients/hydro-sports.jpg";
import amShipyard from "@/assets/clients/am-shipyard.jpg";
import dgSeaLeisure from "@/assets/clients/dg-sea-leisure.png";
import ibharMarine from "@/assets/clients/ibhar-marine.jpg";
import solasMarine from "@/assets/clients/solas-marine.png";

const clients = [
  { name: "Liwa Marine Services", logo: liwaMarine },
  { name: "AH Marine", logo: ahMarine },
  { name: "Sea Safari Cruises LLC", logo: seaSafari },
  { name: "Blue Iris Marine Services", logo: blueIris },
  { name: "Quest Marine", logo: questMarine },
  { name: "Trio Marine", logo: trioMarine },
  { name: "Triple Seven Solutions LLC", logo: tripleSeven },
  { name: "Xclusive Yachts", logo: xclusiveYachts },
  { name: "ClearWater Shipping", logo: clearwaterShipping },
  { name: "Michigan Propulsion", logo: michiganPropulsion },
  { name: "Ships & Boats Maintenance", logo: shipsBoatsMaintenance },
  { name: "Al Hamoor Restaurant Cruises", logo: alHamoor },
  { name: "Al Gaith Boats", logo: alGaith },
  { name: "Alkous Marine", logo: alkousMarine },
  { name: "Liwa Shipbuilding LLC", logo: liwaShipbuilding },
  { name: "NEA Ship and Yacht Design", logo: neaShipYacht },
  { name: "Tour Dubai", logo: tourDubai },
  { name: "Almazrooei Boats", logo: almazrooeiBoats },
  { name: "Maya Maritime Ship Management", logo: mayaMaritime },
  { name: "Neptune Diving Centre", logo: neptuneDiving },
  { name: "AJPL Ship Management", logo: ajplShip },
  { name: "Hydro Sports Yachts & Boats", logo: hydroSports },
  { name: "AM Shipyard", logo: amShipyard },
  { name: "DG Sea Leisure", logo: dgSeaLeisure },
  { name: "Ibhar Marine Services", logo: ibharMarine },
  { name: "Solas Marine Services", logo: solasMarine },
];

const ClientLogos = () => {
  // Split clients into two rows
  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Valued Clients</h2>
        <p className="text-center text-muted-foreground text-lg">
          Trusted by Leading Maritime Companies
        </p>
      </div>

      {/* Top Row - Scrolling Left */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {[...firstRow, ...firstRow].map((client, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-[220px] mx-4"
            >
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-border h-[120px] flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-[90px] max-w-[180px] w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...secondRow, ...secondRow].map((client, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-[220px] mx-4"
            >
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-border h-[120px] flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-[90px] max-w-[180px] w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
