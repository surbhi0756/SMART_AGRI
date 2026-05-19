"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Leaf, AlertTriangle, CheckCircle2, Info, ArrowRight } from "lucide-react"

interface PHRecommendation {
  level: string
  status: "acidic" | "optimal" | "alkaline"
  treatments: {
    name: string
    description: string
    application: string
  }[]
}

const getRecommendations = (ph: number): PHRecommendation => {
  if (ph < 5.5) {
    return {
      level: "Very Acidic",
      status: "acidic",
      treatments: [
        {
          name: "Agricultural Lime",
          description: "Calcium carbonate to raise pH gradually",
          application: "Apply 50-100 lbs per 1000 sq ft",
        },
        {
          name: "Wood Ash",
          description: "Natural source of potassium and calcium",
          application: "Apply 10-15 lbs per 1000 sq ft",
        },
        {
          name: "Dolomitic Limestone",
          description: "Adds magnesium while raising pH",
          application: "Apply 40-80 lbs per 1000 sq ft",
        },
      ],
    }
  } else if (ph < 6.0) {
    return {
      level: "Moderately Acidic",
      status: "acidic",
      treatments: [
        {
          name: "Bone Meal",
          description: "Organic phosphorus source that raises pH",
          application: "Apply 10 lbs per 100 sq ft",
        },
        {
          name: "Crushed Oyster Shells",
          description: "Slow-release calcium carbonate",
          application: "Apply 5-10 lbs per 100 sq ft",
        },
      ],
    }
  } else if (ph <= 7.0) {
    return {
      level: "Optimal",
      status: "optimal",
      treatments: [
        {
          name: "Maintain Current Practice",
          description: "Your soil pH is in the ideal range for most crops",
          application: "Continue regular organic matter additions",
        },
        {
          name: "Compost Application",
          description: "Maintain soil health and buffer pH",
          application: "Apply 2-4 inches annually",
        },
      ],
    }
  } else if (ph <= 7.5) {
    return {
      level: "Slightly Alkaline",
      status: "alkaline",
      treatments: [
        {
          name: "Elemental Sulfur",
          description: "Gradually lowers pH as bacteria oxidize it",
          application: "Apply 1-2 lbs per 100 sq ft",
        },
        {
          name: "Peat Moss",
          description: "Organic amendment that acidifies soil",
          application: "Mix 2-3 inches into top 6 inches",
        },
      ],
    }
  } else {
    return {
      level: "Very Alkaline",
      status: "alkaline",
      treatments: [
        {
          name: "Aluminum Sulfate",
          description: "Fast-acting pH reducer",
          application: "Apply 5 lbs per 100 sq ft",
        },
        {
          name: "Iron Sulfate",
          description: "Lowers pH and adds iron",
          application: "Apply 2-4 lbs per 100 sq ft",
        },
        {
          name: "Acidifying Fertilizers",
          description: "Ammonium-based fertilizers lower pH",
          application: "Use as directed on product",
        },
      ],
    }
  }
}

const statusConfig = {
  acidic: {
    icon: AlertTriangle,
    color: "text-chart-4",
    bgColor: "bg-chart-4/20",
    borderColor: "border-chart-4/30",
    label: "Acidic Soil",
  },
  optimal: {
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/20",
    borderColor: "border-primary/30",
    label: "Optimal Range",
  },
  alkaline: {
    icon: Info,
    color: "text-chart-3",
    bgColor: "bg-chart-3/20",
    borderColor: "border-chart-3/30",
    label: "Alkaline Soil",
  },
}

export function PHLevelMonitor() {
  const [phValue, setPHValue] = useState<string>("6.5")
  const [showRecommendations, setShowRecommendations] = useState(true)
  
  const ph = parseFloat(phValue) || 7.0
  const recommendations = getRecommendations(ph)
  const config = statusConfig[recommendations.status]
  const StatusIcon = config.icon
  
  const phPosition = Math.max(0, Math.min(100, ((ph - 4) / 6) * 100))

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-primary" />
          pH Level Monitor
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Input your soil pH for natural treatment recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="ph" className="text-foreground">Current Soil pH</Label>
              <Input
                id="ph"
                type="number"
                step="0.1"
                min="0"
                max="14"
                value={phValue}
                onChange={(e) => setPHValue(e.target.value)}
                className="bg-secondary/50 border-border/50 text-lg font-mono"
              />
            </div>
            <Button 
              onClick={() => setShowRecommendations(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Analyze
            </Button>
          </div>
          
          {/* pH Scale Visualization */}
          <div className="space-y-2">
            <div className="relative h-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
                <div className="flex-1 bg-gradient-to-r from-yellow-500 via-green-500 to-green-600" />
                <div className="flex-1 bg-gradient-to-r from-green-600 via-blue-500 to-blue-700" />
              </div>
              <div 
                className="absolute top-0 bottom-0 w-1 bg-foreground shadow-lg transition-all duration-300"
                style={{ left: `${phPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-2 py-0.5 rounded">
                  {ph.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>4.0 (Acidic)</span>
              <span>7.0 (Neutral)</span>
              <span>10.0 (Alkaline)</span>
            </div>
          </div>
        </div>

        {showRecommendations && (
          <div className="space-y-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${config.bgColor} ${config.borderColor} border`}>
                <StatusIcon className={`w-5 h-5 ${config.color}`} />
              </div>
              <div>
                <p className="font-medium text-foreground">{recommendations.level}</p>
                <p className="text-sm text-muted-foreground">{config.label}</p>
              </div>
              <Badge 
                variant="outline" 
                className={`ml-auto ${config.borderColor} ${config.color}`}
              >
                pH {ph.toFixed(1)}
              </Badge>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                Recommended Natural Treatments
              </h4>
              <div className="space-y-2">
                {recommendations.treatments.map((treatment, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-medium text-foreground flex items-center gap-2">
                          {treatment.name}
                          <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>
                        <p className="text-xs text-primary mt-2 font-medium">{treatment.application}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
