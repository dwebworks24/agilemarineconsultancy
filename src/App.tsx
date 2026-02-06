import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import NavalArchitecture from "./pages/services/NavalArchitecture";
import ProjectManagement from "./pages/services/ProjectManagement";
import RegulatoryCompliance from "./pages/services/RegulatoryCompliance";
import ShipDesignOptimization from "./pages/services/ShipDesignOptimization";
import ModificationRepair from "./pages/services/ModificationRepair";
import MarineSurveying from "./pages/services/MarineSurveying";
import BallastWaterTreatment from "./pages/services/BallastWaterTreatment";
import DigitalTwins from "./pages/services/DigitalTwins";
import ProductionDrawings from "./pages/services/ProductionDrawings";
import GreenTechnology from "./pages/services/GreenTechnology";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/naval-architecture" element={<NavalArchitecture />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/services/ship-design-optimization" element={<ShipDesignOptimization />} />
          <Route path="/services/modification-repair" element={<ModificationRepair />} />
          <Route path="/services/marine-surveying" element={<MarineSurveying />} />
          <Route path="/services/ballast-water-treatment" element={<BallastWaterTreatment />} />
          <Route path="/services/3d-twins" element={<DigitalTwins />} />
          <Route path="/services/production-drawings" element={<ProductionDrawings />} />
          <Route path="/services/green-technology" element={<GreenTechnology />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Preloader />
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <WhatsAppButton />
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
