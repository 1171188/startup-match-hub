import { Navigation } from "@/components/Navigation";
import { FundingCard } from "@/components/FundingCard";
import { AdviceReportPanel } from "@/components/AdviceReportPanel";
import { useLocation } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactDetailsDialog } from "@/components/ContactDetailsDialog";

// Mock data - in a real app this would come from an API
const mockFunding = [
  {
    id: "1",
    name: "Innovation Capital Partners",
    stage: "Series A-B",
    sector: "Technology",
    industry: "AI/ML",
    location: "Amsterdam, NL",
    investment: "€1M - €5M",
    description: "Gespecialiseerde venture capital firma gericht op AI en machine learning startups in Europa. Actief portfolio management en toegang tot internationaal netwerk.",
    metrics: {
      employees: "Portfolio: 25+ bedrijven",
      growth: "Focus op groeifase",
    },
  },
  {
    id: "2",
    name: "Health Innovation Fund",
    stage: "Seed - Series A",
    sector: "Healthcare",
    industry: "HealthTech",
    location: "Utrecht, NL",
    investment: "€500K - €1M",
    description: "Investeringsfonds gespecialiseerd in digitale gezondheidszorg oplossingen. Sterke connecties met Nederlandse ziekenhuizen en zorgverzekeraars.",
    metrics: {
      employees: "Portfolio: 15+ bedrijven",
      growth: "Vroege fase focus",
    },
  },
  {
    id: "3",
    name: "Green Energy Ventures",
    stage: "Series A-C",
    sector: "Energy",
    industry: "CleanTech",
    location: "Rotterdam, NL",
    investment: "€5M - €10M",
    description: "Toonaangevend fonds in duurzame energie en cleantech innovaties. Onderdeel van groter Europees netwerk met sterke track record.",
    metrics: {
      employees: "Portfolio: 40+ bedrijven",
      growth: "Scale-up specialist",
    },
  },
  {
    id: "4",
    name: "EdTech Growth Partners",
    stage: "Seed - Series A",
    sector: "Education",
    industry: "EdTech",
    location: "Eindhoven, NL",
    investment: "€500K - €1M",
    description: "Investeringsmaatschappij gericht op onderwijstechnologie en e-learning platforms. Sterke banden met onderwijsinstellingen.",
    metrics: {
      employees: "Portfolio: 20+ bedrijven",
      growth: "Vroege tot groeifase",
    },
  },
  {
    id: "5",
    name: "FinTech Innovation Fund",
    stage: "Series A-B",
    sector: "Finance",
    industry: "FinTech",
    location: "Amsterdam, NL",
    investment: "€1M - €5M",
    description: "Gespecialiseerd in financiële technologie en betaalinnovaties. Toegang tot bankpartners en financiële infrastructuur.",
    metrics: {
      employees: "Portfolio: 30+ bedrijven",
      growth: "Groeifase focus",
    },
  },
  {
    id: "6",
    name: "Retail & E-commerce Angels",
    stage: "Pre-seed - Seed",
    sector: "Retail",
    industry: "E-commerce",
    location: "Den Haag, NL",
    investment: "€100K - €500K",
    description: "Angel investeerders netwerk gespecialiseerd in retail innovatie en e-commerce platforms. Hands-on begeleiding voor jonge startups.",
    metrics: {
      employees: "Netwerk: 50+ angels",
      growth: "Vroege fase specialist",
    },
  },
];

const Results = () => {
  const location = useLocation();
  const searchCriteria = location.state || {};
  const showAdviceReport = searchCriteria.showAdviceReport || false;
  const [showAll, setShowAll] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  // Check if we have any search criteria
  const hasCriteria = Object.keys(searchCriteria).filter(key => key !== 'showAdviceReport').length > 0;
  
  // Show general funding options if no criteria
  const displayedFunding = !hasCriteria 
    ? mockFunding.slice(0, 3) 
    : showAll ? mockFunding : mockFunding.slice(0, 3);

  const handleShowMore = () => {
    setContactDialogOpen(true);
  };

  const handleContactSubmit = (details: { name: string; email: string; phone: string }) => {
    console.log("Contact details submitted:", details);
    setShowAll(true);
    setContactDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {hasCriteria ? "Financierings Matches" : "Algemene Financieringsmogelijkheden"}
          </h1>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <p className="text-muted-foreground">
              {hasCriteria 
                ? `${mockFunding.length} financieringsmogelijkheden gevonden die passen bij jouw criteria`
                : "Vul je criteria in om gepersonaliseerde matches te zien"}
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="/">
                <Filter className="w-4 h-4 mr-2" />
                {hasCriteria ? "Verfijn Zoekopdracht" : "Vul Criteria In"}
              </a>
            </Button>
          </div>
        </div>

        {/* Search Criteria Summary */}
        {hasCriteria && Object.keys(searchCriteria).filter(key => key !== 'showAdviceReport').length > 0 && (
          <div className="mb-8 p-4 bg-secondary/50 rounded-lg animate-fade-in">
            <h3 className="text-sm font-semibold text-foreground mb-2">Jouw Zoekcriteria:</h3>
            <div className="flex flex-wrap gap-2">
              {searchCriteria.stage && (
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  Stage: {searchCriteria.stage}
                </span>
              )}
              {searchCriteria.sector && (
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  Sector: {searchCriteria.sector}
                </span>
              )}
              {searchCriteria.industry && (
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  Industry: {searchCriteria.industry}
                </span>
              )}
              {searchCriteria.investment && (
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  Investment: {searchCriteria.investment}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Results Layout - 2 Column: Startups Left, Advice Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Funding Cards */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {displayedFunding.map((funding, index) => (
                <FundingCard key={index} {...funding} />
              ))}
              {!showAll && mockFunding.length > 3 && (
                <div className="flex justify-center pt-4">
                  <Button onClick={handleShowMore} variant="accent" size="lg">
                    Laat meer zien ({mockFunding.length - 3} meer)
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Advice Report Panel */}
          <div className="lg:col-span-1">
            <AdviceReportPanel searchCriteria={searchCriteria} />
          </div>
        </div>
      </div>

      <ContactDetailsDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        onSubmit={handleContactSubmit}
        title="Contactgegevens vereist"
        description="Vul je gegevens in om meer matches te zien."
      />
    </div>
  );
};

export default Results;
