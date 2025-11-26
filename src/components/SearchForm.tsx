import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, HelpCircle } from "lucide-react";
import { toast } from "sonner";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [trlPhase, setTrlPhase] = useState("");
  const [sector, setSector] = useState("");
  const [industry, setIndustry] = useState("");
  const [investment, setInvestment] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trlPhase && !sector && !industry && !investment) {
      toast.error("Selecteer minimaal één criterium");
      return;
    }

    toast.success("Zoeken naar matches...");
    navigate("/results", { 
      state: { trlPhase, sector, industry, investment } 
    });
  };

  const handleAdviceReport = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!trlPhase && !sector && !industry && !investment) {
      toast.error("Selecteer minimaal één criterium");
      return;
    }

    toast.success("Advies rapport voorbereiden...");
    navigate("/results", { 
      state: { trlPhase, sector, industry, investment, showAdviceReport: true } 
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sector Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Sector</label>
          <Select value={sector} onValueChange={setSector}>
            <SelectTrigger>
              <SelectValue placeholder="Selecteer sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technologie</SelectItem>
              <SelectItem value="healthcare">Gezondheidszorg</SelectItem>
              <SelectItem value="finance">Financiën</SelectItem>
              <SelectItem value="education">Onderwijs</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="energy">Energie</SelectItem>
              <SelectItem value="manufacturing">Productie</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Industry Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Industrie</label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Selecteer industrie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS</SelectItem>
              <SelectItem value="ai">AI/ML</SelectItem>
              <SelectItem value="fintech">FinTech</SelectItem>
              <SelectItem value="healthtech">HealthTech</SelectItem>
              <SelectItem value="edtech">EdTech</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="biotech">BioTech</SelectItem>
              <SelectItem value="cleantech">CleanTech</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Investment Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Investment Bereik</label>
          <Select value={investment} onValueChange={setInvestment}>
            <SelectTrigger>
              <SelectValue placeholder="Selecteer investment bereik" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100k">€0 - €100K</SelectItem>
              <SelectItem value="100k-500k">€100K - €500K</SelectItem>
              <SelectItem value="500k-1m">€500K - €1M</SelectItem>
              <SelectItem value="1m-5m">€1M - €5M</SelectItem>
              <SelectItem value="5m-10m">€5M - €10M</SelectItem>
              <SelectItem value="10m+">€10M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* TRL Phase Selection */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-foreground">TRL-fase</label>
            <Link to="/mijn-trl-fase" className="text-primary hover:text-primary/80 transition-colors">
              <HelpCircle className="w-4 h-4" />
            </Link>
          </div>
          <Select value={trlPhase} onValueChange={setTrlPhase}>
            <SelectTrigger>
              <SelectValue placeholder="Selecteer TRL-fase" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trl1-3">TRL 1-3: Basis onderzoek</SelectItem>
              <SelectItem value="trl4-6">TRL 4-6: Ontwikkeling & validatie</SelectItem>
              <SelectItem value="trl7-9">TRL 7-9: Implementatie & markt</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search Buttons */}
      <div className="flex justify-center gap-4 pt-4 flex-wrap">
        <Button type="submit" variant="accent" size="lg" className="min-w-[200px]">
          <Search className="w-5 h-5 mr-2" />
          Vind Matches
        </Button>
        <Button type="button" onClick={handleAdviceReport} variant="secondary" size="lg" className="min-w-[200px]">
          <Search className="w-5 h-5 mr-2" />
          Advies Rapport
        </Button>
      </div>
    </form>
  );
};
