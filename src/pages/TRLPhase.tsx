import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TRLPhase = () => {
  const trlPhases = [
    {
      phase: "TRL 1-3",
      title: "Basis Onderzoek",
      description: "In deze fase wordt het fundamentele onderzoek uitgevoerd. Het concept wordt geformuleerd en de basisprincipes worden onderzocht.",
      stages: [
        "TRL 1: Basisprincipes worden waargenomen",
        "TRL 2: Technologisch concept wordt geformuleerd",
        "TRL 3: Experimenteel bewijs van concept"
      ]
    },
    {
      phase: "TRL 4-6",
      title: "Ontwikkeling & Validatie",
      description: "De technologie wordt verder ontwikkeld en gevalideerd in laboratorium- en relevante omgevingen.",
      stages: [
        "TRL 4: Validatie in laboratoriumomgeving",
        "TRL 5: Validatie in relevante omgeving",
        "TRL 6: Demonstratie in relevante omgeving"
      ]
    },
    {
      phase: "TRL 7-9",
      title: "Implementatie & Markt",
      description: "De technologie wordt getest in operationele omstandigheden en klaargemaakt voor commerciële toepassing.",
      stages: [
        "TRL 7: Demonstratie in operationele omgeving",
        "TRL 8: Systeem is compleet en gekwalificeerd",
        "TRL 9: Succesvol bewezen in operationele omgeving"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mijn TRL-fase
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Technology Readiness Level (TRL) is een meetmethode om de maturiteit van een technologie te bepalen. 
            Ontdek in welke fase jouw startup zich bevindt.
          </p>

          <div className="space-y-6">
            {trlPhases.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span className="text-primary">{item.phase}</span>
                    <span>-</span>
                    <span>{item.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.stages.map((stage, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{stage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Waarom is TRL belangrijk?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Het kennen van je TRL-fase helpt bij het vinden van de juiste investeerders en subsidies. 
                Verschillende financieringsbronnen richten zich op verschillende TRL-fases. 
                Vroege fase (TRL 1-3) wordt vaak gefinancierd door onderzoeksbeurzen en grants, 
                terwijl latere fases (TRL 7-9) meer aantrekkelijk zijn voor venture capital en private equity.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TRLPhase;
