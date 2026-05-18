"use client"

import { Header } from "@/components/header"
import { IndiaOutbreakMap } from "@/components/india-outbreak-map"
import { InsectEncyclopedia } from "@/components/insect-encyclopedia"
import { StatsSection } from "@/components/stats-section"
import { Shield, ArrowRight, CheckCircle2, Leaf, Bug, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Bug,
    title: "Real-time Pest Tracking",
    description: "Community-powered pest sighting reports with instant alerts to nearby farmers",
  },
  {
    icon: Bell,
    title: "Early Warning Alerts",
    description: "Get notified when pests are spotted in your region before they spread",
  },
  {
    icon: Leaf,
    title: "Prevention Methods",
    description: "Access organic and chemical prevention techniques for every pest type",
  },
]

const benefits = [
  "Reduce crop losses by up to 40%",
  "Make informed decisions on pest control",
  "Connect with local farming community",
  "Access expert recommendations",
  "Track seasonal pest patterns",
  "Save money on unnecessary treatments",
]

export default function PestWarningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              Protecting Indian Farmers Since 2024
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Pest & Disease{" "}
              <span className="text-primary">Early Warning</span> System
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Empowering farmers with real-time pest outbreak alerts and prevention methods. 
              Report sightings, protect your crops, and make better decisions together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <a href="#map" className="flex items-center gap-2">
                  View Outbreak Map
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <a href="#encyclopedia" className="flex items-center gap-2">
                  Browse Pest Encyclopedia
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <StatsSection />
      </section>

      {/* Features Section */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="container py-12">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Community Outbreak Map
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Real-time pest sighting reports from farmers across India. Click on markers to see details 
                or report a new pest sighting in your area.
              </p>
            </div>
          </div>
          <IndiaOutbreakMap />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 border-y">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Better Decision Making for Farmers
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our early warning system helps you stay ahead of pest outbreaks, 
                saving your crops and reducing unnecessary pesticide use.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Join 12,500+ Farmers</CardTitle>
                <CardDescription className="text-base">
                  Be part of India&apos;s largest pest monitoring community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" className="w-full">
                  Report Your First Sighting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Encyclopedia Section */}
      <section id="encyclopedia" className="container py-16">
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Insect Encyclopedia
            </h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive guide to common pests in India with identification tips, 
              symptoms, and both organic and chemical prevention methods.
            </p>
          </div>
          <InsectEncyclopedia />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">CropGuard</h3>
                  <p className="text-xs text-muted-foreground">Pest Early Warning System</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Empowering Indian farmers with real-time pest monitoring and prevention methods. 
                Together, we can protect our crops and secure our harvests.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#map" className="hover:text-foreground transition-colors">Outbreak Map</a></li>
                <li><a href="#encyclopedia" className="hover:text-foreground transition-colors">Pest Encyclopedia</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Prevention Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Report an Issue</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 CropGuard. Dedicated to protecting Indian agriculture.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
