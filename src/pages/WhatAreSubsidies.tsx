import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhatAreSubsidies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Wat zijn subsidies?
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Subsidies zijn financiële bijdragen van de overheid of andere organisaties om innovatie 
            en economische groei te stimuleren.
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Wat is een subsidie?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Een subsidie is een financiële ondersteuning die bedrijven, vooral startups en innovatieve ondernemingen, 
                  kunnen ontvangen om specifieke projecten of activiteiten te financieren. In tegenstelling tot leningen 
                  hoef je subsidies niet terug te betalen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success">Niet terugbetalen</Badge>
                  <Badge variant="secondary">Gericht op innovatie</Badge>
                  <Badge variant="secondary">Overheidssteun</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soorten subsidies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Innovatiesubsidies</h3>
                    <p className="text-muted-foreground">
                      Voor bedrijven die werken aan nieuwe producten, diensten of technologieën. 
                      Voorbeelden: WBSO, MIT-regeling, Horizon Europe.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Groeisubsidies</h3>
                    <p className="text-muted-foreground">
                      Ondersteuning voor bedrijven die willen groeien en schalen. 
                      Voorbeelden: Groeifaciliteit, EIC Accelerator.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Duurzaamheidssubsidies</h3>
                    <p className="text-muted-foreground">
                      Voor projecten gericht op duurzaamheid en klimaat. 
                      Voorbeelden: SDE++, DEI+.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Voordelen van subsidies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Geen terugbetalingsverplichting",
                    "Behoud van volledige eigendom",
                    "Validatie van je concept",
                    "Toegang tot netwerken en expertise",
                    "Verbeterde financieringsmogelijkheden"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hoe subsidies aanvragen?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3">
                  {[
                    "Identificeer geschikte subsidieregelingen voor jouw project",
                    "Controleer de voorwaarden en deadlines",
                    "Bereid een sterk projectplan voor",
                    "Dien een complete aanvraag in",
                    "Volg de voortgang en reageer tijdig op vragen"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground mt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Gebruik onze Subsidie Finder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Met onze Subsidie Finder tool kun je eenvoudig ontdekken welke subsidies 
                  bij jouw startup passen. Beantwoord een paar vragen en ontvang direct 
                  een overzicht van relevante subsidiemogelijkheden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhatAreSubsidies;
