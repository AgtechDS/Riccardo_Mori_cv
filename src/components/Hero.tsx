
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-cv-blue via-cv-azure to-cv-lightblue">
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              opacity: Math.random() * 0.3,
              animation: `pulse-soft ${Math.random() * 4 + 2}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block mb-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span className="text-white text-sm font-medium">Elettricista Professionale</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Riccardo Mori
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Con oltre 20 anni di esperienza nel settore elettrico, specializzato in impianti civili e industriali, automazione e soluzioni energetiche efficienti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={scrollToContent}
            className="bg-white text-cv-blue px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 ease-in-out flex items-center"
          >
            Scopri di più
            <ArrowDown size={16} className="ml-2" />
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 ease-in-out">
            Contattami
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          onClick={scrollToContent}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>

      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
