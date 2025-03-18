
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleMenuClick = () => {
    // Smooth scroll to the Services section
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-6 px-6 md:px-10",
        scrolled ? "bg-cv-blue/90 backdrop-blur-md shadow-md py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className={cn(
            "text-white font-light transition-all duration-300",
            scrolled ? "text-2xl" : "text-3xl md:text-4xl"
          )}>
            <span className="font-bold">Riccardo</span> Mori
          </div>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleMenuClick}
            className="bg-cv-gold text-cv-blue hover:bg-cv-gold/90 transition-colors duration-200 py-2 px-4 rounded-full font-medium flex items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/dda9a5e4-8e8b-42b0-bed2-9452824ffbfa.png" 
                alt="AgTechDesigne Logo" 
                className="w-6 h-6 object-contain"
              />
              <span className="hidden sm:inline">AgTechDesigne</span>
            </div>
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-6"
          >
            <ContactItem icon={<Mail size={16} />} text="riccardo.mori@email.com" />
            <ContactItem icon={<Phone size={16} />} text="+39 123 456 7890" />
            <ContactItem icon={<MapPin size={16} />} text="Milano, Italia" />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Github size={18} />} />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="flex items-center text-white/90 hover:text-white transition-colors duration-200 text-sm">
      <span className="mr-2 text-cv-azure">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 cursor-pointer">
      {icon}
    </div>
  );
};
