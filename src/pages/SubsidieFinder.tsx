import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const SubsidieFinder = () => {
  const subsidies = [
    {
      name: "WBSO (Speur- en Ontwikkelingswerk)",
      amount: "Tot 40% korting op loonkosten",
      phase: "Alle fases",
      description: "Belastingvoordeel voor bedrijven die technisch onderzoek doen.",
      link: "https://www.rvo.nl/subsidies-financiering/wbso"
    },
    {
      name: "MIT-regeling",
      amount: "Tot €450.000",
      phase: "TRL 1-6",
      description: "Subsidie voor technische ontwikkelingsprojecten met technisch of commercieel risico.",
      link: "https://www.rvo.nl/subsidies-financiering/mit"
    },
    {
      name: "Horizon Europe",
      amount: "Variabel",
      phase: "Alle fases",
      description: "Europees onderzoeks- en innovatieprogramma met diverse regelingen.",
      link: "https://www.horizoneurope.nl/"
    },
    {
      name: "EIC Accelerator",
      amount: "Tot €2.5 miljoen",
      phase: "TRL 6-9",
      description: "Europese subsidie voor innovatieve scale-ups met hoog groei potentieel.",
      link: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en"
    },
    {
      name: "Groeifaciliteit",
      amount: "€50.000 - €2 miljoen",
      phase: "Groeifase",
      description: "Achtergestelde lening voor scale-ups en groeibedrijven.",
      link: "https://www.rvo.nl/subsidies-financiering/groeifaciliteit"
    },
    {
      name: "SDE++ (Duurzaamheid)",
      amount: "Variabel",
      phase: "Implementatie",
      description: "Subsidie voor CO2-reducerende technieken en hernieuwbare energie.",
      link: "https://www.rvo.nl/subsidies-financiering/sde"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Subsidie Finder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontdek welke subsidies beschikbaar zijn voor jouw startup. 
              Filter op fase, bedrag en type om de juiste match te vinden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidies.map((subsidie, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{subsidie.name}</CardTitle>
                    <Badge variant="secondary">{subsidie.phase}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {subsidie.amount}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {subsidie.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(subsidie.link, '_blank')}
                  >
                    Meer informatie
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Tips voor een succesvolle subsidieaanvraag</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Start ruim op tijd met de voorbereiding",
                  "Zorg voor een duidelijk en realistisch projectplan",
                  "Laat je aanvraag door experts reviewen",
                  "Bewijs de innovatieve waarde van je project",
                  "Maak de maatschappelijke impact duidelijk"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SubsidieFinder;
