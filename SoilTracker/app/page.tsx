import { SoilStatsCards } from "@/components/soil-stats-cards"
import { SoilNutrientChart } from "@/components/soil-nutrient-chart"
import { TreatmentScheduler } from "@/components/treatment-scheduler"
import { PHLevelMonitor } from "@/components/ph-level-monitor"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sprout, TrendingUp, Shield, Leaf } from "lucide-react"

export default function SoilHealthTracker() {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                Sustainable Farming
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30">
                Smart Agriculture
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
              Smart Soil Health & Treatment Tracker
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Monitor your soil&apos;s vital signs, track nutrient levels, and receive intelligent treatment recommendations for sustainable, long-term farming success.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <Sprout className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">12 Fields</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">+23%</p>
                <p className="text-xs text-muted-foreground">Yield Increase</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <Shield className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Health Score</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <Leaf className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Eco</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <SoilStatsCards />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <SoilNutrientChart />
          <PHLevelMonitor />
        </div>

        {/* Treatment Scheduler - Full Width */}
        <TreatmentScheduler />

        {/* Footer Info */}
        <footer className="text-center py-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">●</span> Data synced in real-time · Last updated: Just now
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Building sustainable farming practices through intelligent soil management
          </p>
        </footer>
      </main>
    </div>
  )
}
