"use client";

import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Sprout } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Sprout className="h-4 w-4" />
            <span>Cultivating Connections, Growing Together</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Community & Future Scope
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            Join thousands of farmers sharing knowledge, celebrating success, and
            building the future of agriculture together. Connect, learn, and grow
            with our vibrant community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Users className="h-5 w-5" />
              Join Community
            </Button>
            <Button
              size="lg"
              className="gap-2 bg-[#e6ab0f] text-foreground hover:bg-[#d49609]"
            >
              <MessageCircle className="h-5 w-5" />
              Start a Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
