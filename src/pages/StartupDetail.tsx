import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, TrendingUp, Calendar, Globe, Target, DollarSign } from "lucide-react";
import { useState } from "react";
import { ContactDetailsDialog } from "@/components/ContactDetailsDialog";

// Mock data - in a real app this would come from an API
const mockFundingData: Record<string, any> = {
  "1": {
    name: "Innovation Capital Partners",
    stage: "Series A-B",
    sector: "Technology",
    industry: "AI/ML",
    location: "Amsterdam, NL",
    investment: "€1M - €5M",
    founded: "2018",
    website: "innovation-capital.nl",
    email: "contact@innovation-capital.nl",
    phone: "+31 20 123 4567",
    description: "Gespecialiseerde venture capital firma gericht op AI en machine learning startups in Europa. Actief portfolio management en toegang tot internationaal netwerk.",
    fullDescription: `Innovation Capital Partners is een toonaangevende venture capital firma gespecialiseerd in AI en machine learning startups in Europa. Met een bewezen track record sinds 2018, investeren wij in innovatieve bedrijven die klaar zijn om te schalen.

Ons team bestaat uit ervaren investeerders en ondernemers die hands-on begeleiding bieden op het gebied van strategie, product development en internationale expansie. We bieden niet alleen kapitaal, maar ook toegang tot ons uitgebreide netwerk van bedrijfsleiders, technische experts en potentiële klanten.`,
    metrics: {
      employees: "Portfolio: 25+ bedrijven",
      growth: "Focus op groeifase",
      investments: "€50M+ geïnvesteerd",
      exits: "8 succesvolle exits",
    },
    goals: [
      "Uitbreiding naar Oost-Europese markten in 2025",
      "Focus op deep tech en AI startups",
      "Partnership met top universiteiten",
      "Groei naar €100M+ onder beheer",
    ],
    highlights: [
      "Gemiddeld rendement van 3.2x",
      "Partnerships met Microsoft en Google",
      "95% van portfolio companies nog actief",
      "Actief in 12 Europese landen",
    ],
  },
};

const FundingDetail = () => {
  const { id } = useParams();
  const funding = mockFundingData[id || "1"] || mockFundingData["1"];
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleContactClick = () => {
    setContactDialogOpen(true);
  };

  const handleContactSubmit = (details: { name: string; email: string; phone: string }) => {
    console.log("Contact details submitted:", details);
    setShowFullDetails(true);
    setContactDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/results">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar resultaten
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">{funding.name}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{funding.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">{funding.stage}</Badge>
                <Badge variant="secondary">{funding.sector}</Badge>
                <Badge variant="secondary">{funding.industry}</Badge>
                <Badge variant="accent">{funding.investment}</Badge>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button variant="accent" size="lg" onClick={handleContactClick}>
                Kom in contact
              </Button>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{funding.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Over {funding.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {showFullDetails ? (
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {funding.fullDescription}
                  </p>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      {funding.description}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Voor meer informatie, klik op "Kom in contact" om je gegevens te delen.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {showFullDetails && (
              <>
                {/* Key Metrics */}
                <Card className="animate-scale-in" style={{ animationDelay: "100ms" }}>
                  <CardHeader>
                    <CardTitle>Belangrijke Statistieken</CardTitle>
                  </CardHeader>
                  <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">Portfolio</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{funding.metrics.employees}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span className="text-sm">Focus</span>
                      </div>
                      <p className="text-2xl font-bold text-primary">{funding.metrics.growth}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span className="text-sm">Investeringen</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{funding.metrics.investments}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Target className="w-4 h-4 mr-2" />
                        <span className="text-sm">Exits</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{funding.metrics.exits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Objectives */}
              <Card className="animate-scale-in" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle>Strategische Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {funding.goals.map((goal: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <Card className="animate-scale-in" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <CardTitle>Belangrijkste Hoogtepunten</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {funding.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Basic Information */}
            <Card className="animate-scale-in sticky top-20">
              <CardHeader>
                <CardTitle>Basis Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Opgericht</p>
                    <p className="font-medium text-foreground">{funding.founded}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a href={`https://${funding.website}`} className="font-medium text-primary hover:underline">
                      {funding.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ContactDetailsDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        onSubmit={handleContactSubmit}
        title="Kom in contact"
        description="Vul je gegevens in om de volledige details te bekijken en in contact te komen."
      />
    </div>
  );
};

export default FundingDetail;