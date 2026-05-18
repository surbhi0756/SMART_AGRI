"use client"

import { Bug, Leaf, Shield } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">CropGuard</h1>
            <p className="text-xs text-muted-foreground">Pest Early Warning System</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#map" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Bug className="h-4 w-4" />
              Outbreak Map
            </a>
            <a href="#encyclopedia" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Leaf className="h-4 w-4" />
              Pest Encyclopedia
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
