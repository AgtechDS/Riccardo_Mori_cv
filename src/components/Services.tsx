
import { motion } from "framer-motion";
import { Cpu, Code, Server, FileSpreadsheet, Brain, Globe, Coffee } from "lucide-react";

export const Services = () => {
  return (
    <section id="services-section" className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-cv-lightblue/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/dda9a5e4-8e8b-42b0-bed2-9452824ffbfa.png" 
              alt="AgTechDesigne Logo" 
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-3xl font-bold text-cv-blue">
              Scopri i Servizi di <span className="gold-text">AgTechDesigne</span>
            </h2>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Benvenuto in AgTechDesigne, il tuo partner per soluzioni digitali avanzate! 
            Offriamo servizi innovativi per aziende e privati.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-cv-blue text-white p-8 rounded-2xl gold-border"
        >
          <div className="flex items-center justify-center mb-4">
            <Coffee size={24} className="text-cv-gold mr-2" />
            <h3 className="text-xl font-bold">Supporta lo sviluppo di software pubblici!</h3>
          </div>
          <p className="mb-6">
            Con le tue donazioni, contribuisci alla crescita di progetti innovativi come IAm, 
            il social network che incentiva gli incontri reali.
          </p>
          <button className="bg-white text-cv-blue px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 ease-in-out">
            Fai una donazione
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-cv-blue font-medium">
            📩 Contattaci su agtechdesigne@gmail.com o Instagram @agtechdesigne
          </p>
          <p className="text-cv-blue font-bold mt-2">
            🚀 Scopri di più e collabora con noi!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-cv-lightblue/30"
    >
      <div className="w-12 h-12 rounded-full bg-cv-azure/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cv-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const serviceItems = [
  {
    icon: <Code size={24} className="text-cv-azure" />,
    title: "Sviluppo Software Personalizzato",
    description: "Creiamo applicazioni e software su misura per ogni esigenza, in vari linguaggi di programmazione."
  },
  {
    icon: <Server size={24} className="text-cv-azure" />,
    title: "Noleggio NodePI",
    description: "Mettiamo a disposizione nodi Raspberry Pi per test e sviluppo delle tue applicazioni."
  },
  {
    icon: <FileSpreadsheet size={24} className="text-cv-azure" />,
    title: "Excel Personalizzati",
    description: "Realizziamo fogli di calcolo avanzati con automazioni su misura per ottimizzare i tuoi processi."
  },
  {
    icon: <Brain size={24} className="text-cv-azure" />,
    title: "Intelligenza Artificiale",
    description: "Sviluppiamo agenti AI personalizzati per ottimizzare il tuo lavoro e automatizzare processi."
  },
  {
    icon: <Globe size={24} className="text-cv-azure" />,
    title: "Creazione Siti Web & Web App",
    description: "Progettiamo piattaforme scalabili con tecnologie moderne per la tua presenza online."
  },
  {
    icon: <Cpu size={24} className="text-cv-azure" />,
    title: "Soluzioni IoT",
    description: "Integriamo dispositivi smart per automazione e monitoraggio di ambienti domestici e industriali."
  }
];
