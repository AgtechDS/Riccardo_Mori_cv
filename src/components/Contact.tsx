
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-cv-blue text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contatti</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sono disponibile per nuove opportunità lavorative e consulenze. Non esitare a contattarmi per discutere del tuo progetto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Informazioni di Contatto</h3>
            
            <div className="space-y-5">
              <ContactItem icon={<Mail />} label="Email" value="riccardo.mori@email.com" />
              <ContactItem icon={<Phone />} label="Telefono" value="+39 123 456 7890" />
              <ContactItem icon={<MapPin />} label="Indirizzo" value="Milano, Italia" />
              <ContactItem icon={<Calendar />} label="Disponibilità" value="Lunedì - Venerdì, 8:00 - 18:00" />
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white/80 mb-3">Social</h4>
              <div className="flex space-x-4">
                <SocialButton icon={<Linkedin size={20} />} />
                <SocialButton icon={<Github size={20} />} />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Interessi</h3>
            
            <div className="glass rounded-xl p-8 mb-6">
              <div className="flex items-start mb-4">
                <Heart size={20} className="text-cv-azure mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Tecnologia e Innovazione</h4>
                  <p className="text-white/80 text-sm mt-1">
                    Appassionato di nuove tecnologie nel campo dell'elettronica e dell'automazione domestica.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Heart size={20} className="text-cv-azure mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Sostenibilità Energetica</h4>
                  <p className="text-white/80 text-sm mt-1">
                    Interessato alle soluzioni di risparmio energetico e alle energie rinnovabili.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Heart size={20} className="text-cv-azure mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Formazione Continua</h4>
                  <p className="text-white/80 text-sm mt-1">
                    Costantemente alla ricerca di opportunità di apprendimento nel settore elettrico.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-white text-cv-blue font-medium py-3 rounded-full hover:shadow-lg transition-all duration-300">
              Scarica CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white/70 text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
      {icon}
    </button>
  );
};
