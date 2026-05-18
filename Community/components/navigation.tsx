"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  Menu,
  X,
  Users,
  Award,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Community", href: "#community", icon: Users },
  { name: "Success Stories", href: "#success-stories", icon: Award },
  { name: "Coming Soon", href: "#coming-soon", icon: Sparkles },
  { name: "Education", href: "#education", icon: GraduationCap },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">FarmConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90">
            Join Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-foreground hover:bg-muted md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="h-5 w-5 text-primary" />
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
              Join Community
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
