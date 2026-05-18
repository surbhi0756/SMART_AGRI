"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  Bot,
  Bell,
  Sparkles,
  TrendingUp,
  Shield,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const comingSoonFeatures = [
  {
    id: 1,
    title: "Financial Support",
    subtitle: "Access to Agricultural Loans & Subsidies",
    icon: Wallet,
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/20 text-amber-600",
    status: "In Development",
    progress: 65,
    features: [
      "Government scheme integration",
      "Quick loan approvals",
      "Subsidy tracking dashboard",
      "Financial planning tools",
    ],
    description:
      "Get easy access to agricultural loans, government subsidies, and financial planning tools designed specifically for farmers.",
  },
  {
    id: 2,
    title: "AI Automation",
    subtitle: "Smart Farming with Artificial Intelligence",
    icon: Bot,
    color: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/20 text-emerald-600",
    status: "Coming Q3 2026",
    progress: 40,
    features: [
      "Crop disease detection",
      "Yield prediction models",
      "Automated irrigation",
      "Weather-based alerts",
    ],
    description:
      "Leverage cutting-edge AI technology for disease detection, yield prediction, and automated farm management systems.",
  },
];

export function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState<number[]>([]);

  const handleNotify = (featureId: number) => {
    if (email && !notified.includes(featureId)) {
      setNotified([...notified, featureId]);
    }
  };

  return (
    <section className="py-16 lg:py-24" id="coming-soon">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Coming Soon
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            The Future of Farming
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            We&apos;re building powerful new features to revolutionize your farming
            experience. Be the first to know when they launch!
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {comingSoonFeatures.map((feature) => (
            <Card
              key={feature.id}
              className="group relative overflow-hidden border-border bg-card shadow-lg transition-all hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50`}
              />
              <CardContent className="relative p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`rounded-2xl p-4 ${feature.iconBg} transition-transform group-hover:scale-110`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-primary"
                  >
                    {feature.status}
                  </Badge>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">
                  {feature.subtitle}
                </p>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Development Progress</span>
                    <span className="font-semibold text-foreground">
                      {feature.progress}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                </div>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {feature.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Notify Me */}
                {notified.includes(feature.id) ? (
                  <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-4 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">
                      You&apos;ll be notified when this launches!
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-background"
                    />
                    <Button
                      onClick={() => handleNotify(feature.id)}
                      className="gap-2 bg-primary hover:bg-primary/90"
                    >
                      <Bell className="h-4 w-4" />
                      Notify Me
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Coming Features Preview */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            More Features on the Horizon
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, label: "Market Analytics", eta: "Q4 2026" },
              { icon: Shield, label: "Crop Insurance", eta: "Q1 2027" },
              { icon: Cpu, label: "IoT Integration", eta: "Q2 2027" },
              { icon: Zap, label: "Energy Solutions", eta: "Q3 2027" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-muted/50"
              >
                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.eta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
