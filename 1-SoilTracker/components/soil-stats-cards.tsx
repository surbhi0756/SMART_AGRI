"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus, Thermometer, Droplet, Sprout, Wind } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  unit: string
  trend: "up" | "down" | "stable"
  trendValue: string
  icon: React.ReactNode
  status: "good" | "warning" | "critical"
}

function StatCard({ title, value, unit, trend, trendValue, icon, status }: StatCardProps) {
  const trendConfig = {
    up: { icon: TrendingUp, color: "text-primary" },
    down: { icon: TrendingDown, color: "text-destructive" },
    stable: { icon: Minus, color: "text-muted-foreground" },
  }

  const statusConfig = {
    good: "border-primary/30 bg-primary/5",
    warning: "border-accent/30 bg-accent/5",
    critical: "border-destructive/30 bg-destructive/5",
  }

  const TrendIcon = trendConfig[trend].icon

  return (
    <Card className={`border ${statusConfig[status]} backdrop-blur-sm hover:shadow-lg transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">{value}</span>
              <span className="text-sm text-muted-foreground">{unit}</span>
            </div>
            <div className={`flex items-center gap-1 text-xs ${trendConfig[trend].color}`}>
              <TrendIcon className="w-3 h-3" />
              <span>{trendValue}</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-secondary/50">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SoilStatsCards() {
  const stats: StatCardProps[] = [
    {
      title: "Soil Temperature",
      value: "22",
      unit: "°C",
      trend: "up",
      trendValue: "+2°C from last week",
      icon: <Thermometer className="w-5 h-5 text-chart-4" />,
      status: "good",
    },
    {
      title: "Moisture Level",
      value: "45",
      unit: "%",
      trend: "down",
      trendValue: "-5% from last week",
      icon: <Droplet className="w-5 h-5 text-chart-3" />,
      status: "warning",
    },
    {
      title: "Organic Matter",
      value: "3.8",
      unit: "%",
      trend: "stable",
      trendValue: "No change",
      icon: <Sprout className="w-5 h-5 text-primary" />,
      status: "good",
    },
    {
      title: "Soil Aeration",
      value: "Good",
      unit: "",
      trend: "up",
      trendValue: "Improved drainage",
      icon: <Wind className="w-5 h-5 text-accent" />,
      status: "good",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
