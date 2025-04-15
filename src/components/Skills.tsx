
import { motion } from "framer-motion";
import { Star, Book, Globe } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const technicalSkills = [
    { name: "Impianti Elettrici Civili", level: 98 },
    { name: "Impianti Elettrici Industriali", level: 95 },
    { name: "Domotica e Automazione", level: 90 },
    { name: "Quadri Elettrici", level: 92 },
    { name: "Sistemi di Sicurezza", level: 85 },
    { name: "Risparmio Energetico", level: 88 },
    { name: "Normative CEI", level: 96 },
    { name: "Lettura Schemi Elettrici", level: 95 }
  ];

  const education = [
    { title: "Diploma di Perito Elettrotecnico", institution: "tramello", year: "2003" },
  ];

  const languages = [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "Intermedio (B2)" },
     ];

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-cv-azure/10 flex items-center justify-center mr-4"
          >
            <Star size={20} className="text-cv-azure" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-cv-blue"
          >
            Competenze e <span className="gold-text">Formazione</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg gold-border"
          >
            <h3 className="text-xl font-bold text-cv-blue mb-6">Competenze Tecniche</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg gold-border"
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-cv-azure/10 flex items-center justify-center mr-3">
                  <Book size={16} className="text-cv-azure" />
                </div>
                <h3 className="text-xl font-bold text-cv-blue">Istruzione e Formazione</h3>
              </div>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-cv-blue">{item.title}</h4>
                      <span className="text-cv-azure text-sm">{item.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{item.institution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg gold-border"
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-cv-azure/10 flex items-center justify-center mr-3">
                  <Globe size={16} className="text-cv-azure" />
                </div>
                <h3 className="text-xl font-bold text-cv-blue">Lingue</h3>
              </div>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-cv-azure text-sm">{language.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-gray-700">{name}</span>
        <span className="text-cv-azure font-medium text-sm">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-cv-azure to-cv-blue rounded-full"
        />
      </div>
    </div>
  );
};
