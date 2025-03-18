
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lightbulb, ShoppingCart, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Paralume Uovo di Struzzo",
      description: "Paralume di lusso realizzato con un uovo di struzzo naturale, progettato secondo i principi del design illuminotecnico. Crea un effetto di luce diffusa ed elegante, perfetto per ambienti esclusivi.",
      technical: "• Materiale: Guscio naturale di uovo di struzzo (2-4 mm)\n• Sorgente luminosa: LED 2700K-3000K\n• Diffusione: Superficie porosa per luce morbida\n• Forature personalizzabili per pattern luminosi\n• Montaggio: Disponibile come sospensione o da tavolo",
      image: "/lovable-uploads/c2a1060b-21aa-4d38-9682-3da4bce455df.png",
      price: 390,
      certificationLink: "/natural-night" 
    },
    {
      id: 2,
      title: "Linea LED Parete",
      description: "Profilo LED lineare installato verticalmente che crea un effetto drammatico di luce radente sulla parete. La luce si diffonde dolcemente creando un'illuminazione d'ambiente indiretta.",
      technical: "• Striscia LED ad alta efficienza 20W/m\n• Temperatura colore: 3000K\n• Profilo in alluminio con diffusore opalino\n• Installazione a scomparsa\n• Driver dimmerabile incluso",
      image: "/lovable-uploads/f6d9f8a7-cfd2-4423-9f7f-487784e78bc2.png",
      price: 350
    },
    {
      id: 3,
      title: "Composizione Sospensioni Multiple",
      description: "Sistema di lampade a sospensione multiple con diffusori in vetro soffiato, posizionabili a diverse altezze per creare una composizione dinamica e personalizzata.",
      technical: "• 3-5 sospensioni indipendenti\n• Diffusori in vetro soffiato a mano\n• Rosone multiplo in metallo\n• Cavi regolabili in altezza\n• Compatibile con lampadine LED E27",
      image: "/lovable-uploads/76bff173-08a0-4ef7-8223-534a195a7fcc.png",
      price: 580
    },
    {
      id: 4,
      title: "Sistema Illuminazione Integrata",
      description: "Soluzione completa che combina illuminazione d'accento a parete e sospensioni decorative, creando un ambiente armonioso e stratificato con punti luce complementari.",
      technical: "• Progettazione illuminotecnica personalizzata\n• Studio dei livelli di illuminazione\n• Combinazione di luce funzionale e decorativa\n• Analisi ergonomica degli spazi\n• Impianto elettrico ottimizzato",
      image: "/lovable-uploads/dedf4556-d9f9-4b8f-b672-b9621afdd133.png",
      price: 890
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cv-blue/10 to-cv-lightblue/20 z-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-cv-blue"
          >
            Progetti Personalizzati
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Soluzioni illuminotecniche su misura che combinano funzionalità ed estetica. 
            Ogni progetto è pensato per valorizzare gli spazi e creare l'atmosfera perfetta.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border border-cv-goldlight/30 shadow-gold overflow-hidden h-full flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-cv-blue">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="text-xs space-y-1 text-muted-foreground text-left">
                        <h4 className="font-semibold text-sm text-cv-blue mb-1">Specifiche tecniche:</h4>
                        {project.technical.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between border-t border-cv-goldlight/20">
                      <p className="font-semibold text-cv-blue">{project.price} €</p>
                      <div className="flex items-center gap-2">
                        {project.certificationLink && (
                          <Link to={project.certificationLink}>
                            <Button variant="outline" size="sm" className="gap-1">
                              <FileText size={14} />
                              <span className="hidden sm:inline">Certificato</span>
                            </Button>
                          </Link>
                        )}
                        <Button variant="default" size="sm" className="gap-2">
                          <ShoppingCart size={16} />
                          Acquista
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-white/50 backdrop-blur-sm border border-cv-goldlight/30 rounded-lg shadow-gold"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 p-4 bg-cv-blue/10 rounded-full">
              <Lightbulb size={50} className="text-cv-blue" />
            </div>
            <div className="flex-grow text-left">
              <h3 className="text-xl font-semibold text-cv-blue mb-2">Richiedi un Progetto Personalizzato</h3>
              <p className="text-muted-foreground mb-4">
                Hai un'idea specifica o uno spazio da valorizzare? Posso progettare una soluzione illuminotecnica 
                esclusiva per le tue esigenze, con un sopralluogo gratuito nella zona di Milano e provincia.
              </p>
              <Button size="lg" className="bg-cv-blue hover:bg-cv-blue/90">
                Contattami per una consulenza
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
