import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroImages = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600',
  'https://images.unsplash.com/photo-1585282263861-f55e341878f8?w=1600',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600',
  'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1600',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-gray-900 w-8'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Verifica notizie e scopri storie nei dati pubblici
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            12.000+ portali trasparenza PA scalabili: tutti i comuni italiani, ministeri, regioni. Un patrimonio informativo senza eguali.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed mb-8"
          >
            Utilizza la nostra piattaforma per accedere a dati pubblici, verificare informazioni e scoprire storie basate su fatti concreti.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors hover:scale-105 transform duration-200">
              Inizia ad esplorare
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors hover:scale-105 transform duration-200">
              Verifica un fatto
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
