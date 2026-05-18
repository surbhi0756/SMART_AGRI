"use client"

import { AlertTriangle, Bug, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: AlertTriangle,
    value: "127",
    label: "Active Alerts",
    description: "Pest outbreaks reported this month",
    color: "text-destructive",
  },
  {
    icon: MapPin,
    value: "18",
    label: "States Covered",
    description: "Real-time monitoring across India",
    color: "text-primary",
  },
  {
    icon: Bug,
    value: "45+",
    label: "Pests Tracked",
    description: "Comprehensive pest database",
    color: "text-warning",
  },
  {
    icon: Users,
    value: "12,500+",
    label: "Farmers Connected",
    description: "Community-driven reporting",
    color: "text-success",
  },
]

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden">
          <CardContent className="p-4 md:p-6">
            <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
            <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
            <p className="text-sm font-medium mt-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5 hidden md:block">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
