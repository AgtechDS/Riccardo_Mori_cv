
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";

const NaturalNight = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const creationDate = "15 Giugno 2023";
  const registrationNumber = "IP-AT2023-0427";

  const handleDownload = () => {
    // In a real implementation, this would be a link to an actual PDF file
    toast({
      title: "Download iniziato",
      description: "Il certificato di proprietà intellettuale è in download.",
    });
    
    // Simulate a download
    setTimeout(() => {
      toast({
        title: "Download completato",
        description: "Il certificato è stato scaricato con successo.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation bar */}
      <div className="w-full bg-cv-blue text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:text-cv-goldlight transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Torna alla home</span>
          </Link>
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/dda9a5e4-8e8b-42b0-bed2-9452824ffbfa.png" 
              alt="AgTechDesigne Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium">AgTechDesigne</span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-gold border border-cv-goldlight/20 overflow-hidden"
        >
          {/* Header section */}
          <div className="relative bg-cv-blue p-8 text-white">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute right-0 top-0 w-64 h-64 bg-contain bg-no-repeat bg-right opacity-15"
              style={{ 
                backgroundImage: "url('/lovable-uploads/c2a1060b-21aa-4d38-9682-3da4bce455df.png')",
                backgroundSize: "contain"
              }}
            />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Natural Night</h1>
              <p className="text-cv-goldlight italic">Luce naturale, design senza tempo.</p>
            </div>
          </div>

          {/* Certificate content */}
          <div className="p-8">
            {/* Ownership declaration */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cv-blue mb-4">Dichiarazione di Proprietà Intellettuale</h2>
              <div className="p-4 border border-cv-goldlight/30 rounded-md bg-cv-lightblue/10">
                <p className="mb-4">
                  Con il presente documento si attesta che <strong>Natural Night</strong> è un progetto originale di <strong>Riccardo Mori</strong>. 
                  Tutti i diritti di proprietà intellettuale, inclusi ma non limitati a design, concetto, metodologie di produzione e 
                  specifiche tecniche sono di proprietà esclusiva di Riccardo Mori
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Numero di registrazione:</span>
                    <p className="font-medium">{registrationNumber}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Data di creazione:</span>
                    <p className="font-medium">{creationDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Creatore:</span>
                    <p className="font-medium">Riccardo Mori</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Società:</span>
                    <p className="font-medium">AgTechDesigne</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Project description */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cv-blue mb-4">Descrizione del Progetto</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="aspect-square relative rounded-md overflow-hidden border border-cv-goldlight/30">
                    {!isImageLoaded && (
                      <Skeleton className="absolute inset-0 bg-muted/50" />
                    )}
                    <img 
                      src="/lovable-uploads/c2a1060b-21aa-4d38-9682-3da4bce455df.png" 
                      alt="Paralume Natural Night" 
                      className="w-full h-full object-cover object-center"
                      onLoad={() => setIsImageLoaded(true)}
                      style={{ opacity: isImageLoaded ? 1 : 0 }}
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-lg font-medium text-cv-blue mb-2">Materiali e Concetto</h3>
                  <p className="mb-4 text-muted-foreground">
                    Natural Night è un paralume esclusivo realizzato con un autentico uovo di struzzo. 
                    Ogni pezzo è unico, lavorato a mano per diffondere la luce in modo naturale e suggestivo, 
                    creando atmosfere intime e raffinate.
                  </p>
                  
                  <h3 className="text-lg font-medium text-cv-blue mb-2">Principi di Design Illuminotecnico</h3>
                  <p className="mb-4 text-muted-foreground">
                    Il design ottimizza la diffusione della luce attraverso la porosità naturale del guscio, 
                    creando un perfetto equilibrio tra estetica e funzionalità. Le microforature personalizzabili 
                    permettono di creare pattern luminosi unici.
                  </p>
                  
                  <h3 className="text-lg font-medium text-cv-blue mb-2">Sostenibilità</h3>
                  <p className="text-muted-foreground">
                    Natural Night incorpora principi di sostenibilità utilizzando materiali naturali e 
                    illuminazione LED a basso consumo energetico, riducendo l'impatto ambientale senza 
                    compromettere qualità e design.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal declaration */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cv-blue mb-4">Dichiarazione Legale</h2>
              <div className="p-4 border border-cv-blue/20 rounded-md bg-cv-blue/5">
                <p className="text-sm">
                  È severamente vietata la riproduzione non autorizzata del design, della tecnologia o del 
                  concept di Natural Night. I diritti di utilizzo e commercializzazione sono esclusivamente 
                  riservati ad AgTechDesigne. Qualsiasi violazione di questa proprietà intellettuale sarà 
                  perseguita a termini di legge.
                </p>
              </div>
            </section>

            {/* Contacts */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cv-blue mb-4">Contatti</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:agtechdesigne@gmail.com" className="flex items-center gap-2 text-cv-blue hover:text-cv-azure transition-colors">
                  <Mail size={18} />
                  <span>Riccardomori@gmail.com</span>
                </a>
                <a href="https://instagram.com/agtechdesigne" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cv-blue hover:text-cv-azure transition-colors">
                  <Instagram size={18} />
                  <span>@agtechdesigne</span>
                </a>
              </div>
            </section>

            {/* Download button */}
            <div className="flex justify-center mt-12">
              <Button 
                onClick={handleDownload} 
                className="bg-cv-blue hover:bg-cv-blue/90 text-white flex items-center gap-2 px-8 py-6"
                size="lg"
              >
                <Download size={20} />
                <span>Scarica il Certificato Ufficiale (PDF)</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-12 p-6 bg-cv-blue/5 border-t border-cv-blue/10">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgTechDesigne. Tutti i diritti riservati.</p>
          <p className="mt-1">
            Questo documento certifica la proprietà intellettuale di Natural Night.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NaturalNight;
