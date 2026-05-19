import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { IrrigationMap } from "@/components/irrigation-map";
import { EvaporationEstimator } from "@/components/evaporation-estimator";
import { StatsCards } from "@/components/stats-cards";
import { Droplets, Leaf, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Stats Section */}
        <section id="benefits" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why Smart Irrigation Matters
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Data-driven water management delivers measurable results for your farm
              </p>
            </div>
            <StatsCards />
          </div>
        </section>

        {/* Irrigation Map Section */}
        <section id="map" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Map Your Field&apos;s Water Distribution
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Click or drag to mark wet and dry zones. Visualize where water is needed most.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <IrrigationMap />
            </div>
          </div>
        </section>

        {/* Evaporation Estimator Section */}
        <section id="estimator" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Predict Water Loss & Optimize Timing
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Use weather data to estimate evaporation and find the best time to irrigate
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <EvaporationEstimator />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Leaf className="h-12 w-12 mx-auto text-primary-foreground/80 mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Ready to Optimize Your Water Usage?
            </h2>
            <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
              Join thousands of farmers who are saving water, time, and money with smart irrigation planning.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">AquaFarm</p>
                <p className="text-xs text-muted-foreground">Smart Water Management</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 AquaFarm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
