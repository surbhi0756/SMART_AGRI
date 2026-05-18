"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AgriBackground } from "@/components/utility/agri-background"
import { TaskManager } from "@/components/utility/task-manager"
import { InventoryTracker } from "@/components/utility/inventory-tracker"
import { SettingsPanel } from "@/components/utility/settings-panel"
import { 
  CalendarDays, 
  Package, 
  Settings, 
  Leaf,
  Sparkles,
  Bell,
  TrendingUp,
  Users,
  CloudSun
} from "lucide-react"

export default function UtilityPage() {
  const [activeTab, setActiveTab] = useState("tasks")

  return (
    <div className="min-h-screen bg-background">
      <AgriBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shadow-md">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-foreground">Smart Agri</h1>
                <p className="text-xs text-muted-foreground">Utility & Productivity</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="hidden sm:flex items-center gap-1.5 bg-primary/10 text-primary border-primary/30">
                <Sparkles className="h-3 w-3" />
                AI Powered
              </Badge>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Images */}
      <section className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Manage Your Farm with Smart Tools
              </h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Schedule tasks, track inventory, and get AI-powered insights to maximize your agricultural productivity.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Yield</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">+23%</p>
                  <p className="text-xs text-muted-foreground">vs last season</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">Tasks</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">active today</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <CloudSun className="h-4 w-4" />
                    <span className="text-sm font-medium">Weather</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">28°C</p>
                  <p className="text-xs text-muted-foreground">sunny day</p>
                </div>
              </div>
            </div>
            
            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg border border-border">
                <Image
                  src="/images/tractor-harvest.jpg"
                  alt="Tractor harvesting wheat field"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Harvesting</span>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg border border-border">
                <Image
                  src="/images/seedlings.jpg"
                  alt="Fresh seedlings sprouting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Growing</span>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg border border-border col-span-2">
                <Image
                  src="/images/vegetables-harvest.jpg"
                  alt="Fresh vegetables harvest"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Fresh Produce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="w-full sm:w-auto bg-card border border-border shadow-sm p-1 h-auto flex-wrap">
            <TabsTrigger 
              value="tasks" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2.5"
            >
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Task Manager</span>
              <span className="sm:hidden">Tasks</span>
            </TabsTrigger>
            <TabsTrigger 
              value="inventory" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2.5"
            >
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Inventory Tracker</span>
              <span className="sm:hidden">Inventory</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2.5"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content Headers */}
          <div className="space-y-2">
            {activeTab === "tasks" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground text-balance">Task Manager & Calendar</h2>
                <p className="text-muted-foreground text-pretty">
                  Schedule sowing, irrigation, and harvest tasks with AI-powered suggestions and mobile sync
                </p>
              </div>
            )}
            {activeTab === "inventory" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground text-balance">Inventory & Resource Tracker</h2>
                <p className="text-muted-foreground text-pretty">
                  Track seeds, fertilizers, pesticides, and machinery with low-stock alerts
                </p>
              </div>
            )}
            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground text-balance">Settings & Customization</h2>
                <p className="text-muted-foreground text-pretty">
                  Personalize your experience with themes, languages, and accessibility options
                </p>
              </div>
            )}
          </div>

          <TabsContent value="tasks" className="mt-6">
            <TaskManager />
          </TabsContent>

          <TabsContent value="inventory" className="mt-6">
            <InventoryTracker />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span>Smart Agri 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Empowering farmers with intelligent tools</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
