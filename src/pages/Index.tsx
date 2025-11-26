import { Navigation } from "@/components/Navigation";
import { SearchForm } from "@/components/SearchForm";
import { TrendingUp, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Vind Jouw Perfecte
              <span className="block text-primary">Funding Match</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Verbind met investeerders die passen bij jouw groeifase, sector en investeringsdoelen. 
              Ontdek kansen op maat voor jouw startup.
            </p>
          </div>

          {/* Search Form */}
          <div className="mt-12 md:mt-16">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-semibold text-center mb-6 text-foreground">
                Vul Je Criteria In
              </h2>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waarom Kiezen Voor Funding Finder?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ons platform stroomlijnt het ontdekkingsproces met geavanceerde match-algoritmes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Precieze Matching</h3>
              <p className="text-muted-foreground">
                Geavanceerde algoritmes matchen jou met investeerders die perfect passen bij jouw criteria
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Groei Inzichten</h3>
              <p className="text-muted-foreground">
                Toegang tot gedetailleerde groeimetrics en toekomstprojecties voor weloverwogen beslissingen
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Snelle Connecties</h3>
              <p className="text-muted-foreground">
                Kom direct in contact met investeerders om jouw funding proces te versnellen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  2K+
                </div>
                <p className="text-xl text-muted-foreground">
                  Succesvolle Matches
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  10K+
                </div>
                <p className="text-xl text-muted-foreground">
                  Financieringsmogelijkheden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-hero rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Klaar Om Jouw Perfecte Match Te Vinden?
            </h2>
            <p className="text-lg opacity-90">
              Sluit je aan bij honderden startups die hun ideale investeerder vonden
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
