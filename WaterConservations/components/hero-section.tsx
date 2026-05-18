import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Droplets, Sprout, Sun } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
            <Sprout className="h-4 w-4 mr-2 text-primary" />
            Smart Resource Allocation
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Water Conservation & Irrigation{" "}
            <span className="text-primary">Mapping</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Optimize your water usage with intelligent irrigation planning. 
            Save time, reduce costs, and increase crop yields through data-driven water management.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Droplets className="h-5 w-5" />
              Start Mapping
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Sun className="h-5 w-5" />
              Check Evaporation
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <a 
              href="#map" 
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Explore Tools</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Zone Mapping</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Visualize wet and dry areas across your field for targeted irrigation
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sun className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground">Evaporation Tracking</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Predict water loss based on weather to time irrigation perfectly
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Smart Savings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Reduce water bills and improve crop health with data insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
