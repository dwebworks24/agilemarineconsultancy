import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "@/assets/logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum display time of 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="flex flex-col items-center">
            {/* Logo with pulse animation */}
            <motion.img
              src={logo}
              alt="Agile Marine Consultancy"
              className="w-32 h-32 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Spinning Ring */}
            <div className="relative w-36 h-36 -mt-32">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: '#1572B9',
                  borderRightColor: '#6BB700',
                }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </div>
            
            {/* Loading Text */}
            <motion.p
              className="mt-6 text-gray-600 font-medium text-base"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
