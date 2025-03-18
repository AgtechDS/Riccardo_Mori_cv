
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-cv-blue/95 text-white/70 text-sm text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <p>© {currentYear} Riccardo Mori. Tutti i diritti riservati.</p>
        <p className="mt-2">Elettricista Professionale - Soluzioni Illuminotecniche - P.IVA: 12345678901</p>
        <p className="mt-2">In collaborazione con <span className="text-cv-gold">AgTechDesigne</span> - agtechdesigne@gmail.com</p>
      </motion.div>
    </footer>
  );
};
