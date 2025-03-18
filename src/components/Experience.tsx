
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  index: number;
}

export const Experience = () => {
  const experiences = [
    {
      title: "Capo Elettricista",
      company: "Elettrotek S.r.l.",
      period: "2015 - Presente",
      description: "Supervisione e coordinamento di progetti elettrici complessi in ambito industriale e commerciale.",
      achievements: [
        "Gestione di un team di 5 elettricisti",
        "Riduzione dei tempi di completamento del 20%",
        "Implementazione di sistemi domotici avanzati",
        "Sviluppo di soluzioni personalizzate per clienti premium"
      ]
    },
    {
      title: "Elettricista Senior",
      company: "ImpiElect Milano",
      period: "2008 - 2015",
      description: "Installazione e manutenzione di impianti elettrici per clienti residenziali e commerciali.",
      achievements: [
        "Specializzazione in automazione industriale",
        "Formazione di personale junior",
        "Gestione di oltre 200 progetti",
        "Zero incidenti di sicurezza in 7 anni"
      ]
    },
    {
      title: "Elettricista",
      company: "Electra Impianti",
      period: "2003 - 2008",
      description: "Installazione e manutenzione di impianti elettrici residenziali e piccoli impianti commerciali.",
      achievements: [
        "Acquisizione di competenze in sistemi di sicurezza",
        "Specializzazione in impianti a risparmio energetico",
        "Collaborazione con architetti per progetti di design",
        "Ottimizzazione dei costi di materiali del 15%"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-cv-lightblue/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-cv-azure/10 flex items-center justify-center mr-4"
          >
            <Briefcase size={20} className="text-cv-azure" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-cv-blue"
          >
            Esperienza <span className="gold-text">Lavorativa</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-cv-azure/20" />

          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              achievements={exp.achievements}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, description, achievements, index }: ExperienceItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative mb-16 last:mb-0">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-cv-azure border-4 border-white z-10"
      />
      
      <div className={`md:w-1/2 ${isEven ? 'ml-10 md:ml-auto md:mr-10' : 'ml-10'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg gold-border relative"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl text-cv-blue">{title}</h3>
            <div className="flex items-center text-cv-azure">
              <Calendar size={14} className="mr-1" />
              <span className="text-sm">{period}</span>
            </div>
          </div>
          
          <h4 className="text-cv-azure font-medium mb-4">{company}</h4>
          
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div>
            <h5 className="font-medium text-cv-blue mb-3">Risultati chiave:</h5>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <CheckSquare size={16} className="text-cv-gold flex-shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
