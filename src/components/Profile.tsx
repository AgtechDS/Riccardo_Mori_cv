
import { motion } from "framer-motion";
import { User } from "lucide-react";

export const Profile = () => {
  return (
    <section 
      id="profile" 
      className="py-20 px-6 md:px-10 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-cv-azure/10 flex items-center justify-center mr-4"
          >
            <User size={20} className="text-cv-azure" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-cv-blue"
          >
            Profilo <span className="gold-text">Professionale</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-white to-cv-lightblue/30 rounded-2xl p-8 shadow-xl gold-border"
        >
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Elettricista qualificato con oltre 20 anni di esperienza nel settore elettrico civile e industriale. Specializzato nella progettazione, installazione e manutenzione di impianti elettrici, sistemi di sicurezza e soluzioni di automazione. Esperto nella risoluzione di problemi complessi e nell'implementazione di soluzioni energetiche efficienti.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Possiedo una solida formazione tecnica e una costante volontà di aggiornamento sulle ultime tecnologie e normative del settore. La mia esperienza mi ha permesso di sviluppare eccellenti capacità di comunicazione con i clienti e di gestione del lavoro in team.
          </p>

          <blockquote className="italic text-cv-blue border-l-4 border-cv-gold pl-4 py-2 mb-4">
            "Il mio obiettivo è fornire soluzioni elettriche sicure, efficienti e all'avanguardia, garantendo sempre la massima soddisfazione del cliente."
          </blockquote>

          <div className="flex flex-wrap gap-3 mt-6">
            {["Impianti Civili", "Impianti Industriali", "Domotica", "Automazione", "Sicurezza", "Risparmio Energetico"].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-cv-azure/10 text-cv-blue rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
