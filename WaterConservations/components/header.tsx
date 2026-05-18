import { Droplets, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AquaFarm</h1>
              <p className="text-xs text-muted-foreground">Smart Water Management</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#map" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Irrigation Map
            </a>
            <a href="#estimator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Evaporation
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
          </nav>
          <Button size="sm" className="gap-2">
            <Leaf className="h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
