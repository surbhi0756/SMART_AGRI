"use client"

import { Sprout, Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
            <Sprout className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground tracking-tight">SoilHealth Pro</h1>
            <p className="text-xs text-muted-foreground">Sustainable Farming Intelligence</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-foreground hover:text-primary transition-colors font-medium">Dashboard</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fields</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reports</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground text-[10px]">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50">
            <User className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </header>
  )
}
