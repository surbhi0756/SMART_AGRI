import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Clock, TrendingDown, Leaf } from "lucide-react";

const stats = [
  {
    icon: Droplets,
    value: "30%",
    label: "Water Savings",
    description: "Average reduction in water usage",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    value: "2.5 hrs",
    label: "Time Saved",
    description: "Daily irrigation planning time",
    color: "text-accent",
    bg: "bg-accent/20",
  },
  {
    icon: TrendingDown,
    value: "25%",
    label: "Cost Reduction",
    description: "Lower water and energy bills",
    color: "text-chart-1",
    bg: "bg-chart-1/10",
  },
  {
    icon: Leaf,
    value: "40%",
    label: "Yield Increase",
    description: "Better crop health outcomes",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center mb-4`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
