"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const nutrientData = [
  { month: "Jan", nitrogen: 42, phosphorus: 28, potassium: 35 },
  { month: "Feb", nitrogen: 45, phosphorus: 30, potassium: 38 },
  { month: "Mar", nitrogen: 50, phosphorus: 32, potassium: 42 },
  { month: "Apr", nitrogen: 48, phosphorus: 35, potassium: 45 },
  { month: "May", nitrogen: 52, phosphorus: 38, potassium: 48 },
  { month: "Jun", nitrogen: 55, phosphorus: 40, potassium: 50 },
  { month: "Jul", nitrogen: 58, phosphorus: 42, potassium: 52 },
  { month: "Aug", nitrogen: 54, phosphorus: 39, potassium: 49 },
  { month: "Sep", nitrogen: 50, phosphorus: 36, potassium: 46 },
  { month: "Oct", nitrogen: 46, phosphorus: 33, potassium: 42 },
  { month: "Nov", nitrogen: 44, phosphorus: 31, potassium: 40 },
  { month: "Dec", nitrogen: 40, phosphorus: 28, potassium: 36 },
]

const optimalRanges = {
  nitrogen: { min: 40, max: 60, unit: "ppm" },
  phosphorus: { min: 25, max: 45, unit: "ppm" },
  potassium: { min: 150, max: 250, unit: "ppm" },
}

export function SoilNutrientChart() {
  const [timeRange, setTimeRange] = useState("12m")

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Soil Nutrient Log
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Historical N-P-K levels to prevent over-fertilization
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-32 bg-secondary/50 border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3m">3 Months</SelectItem>
            <SelectItem value="6m">6 Months</SelectItem>
            <SelectItem value="12m">12 Months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={nutrientData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="nitrogenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.18 145)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="oklch(0.65 0.18 145)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="phosphorusGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.72 0.16 85)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="oklch(0.72 0.16 85)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="potassiumGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.02 75)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="oklch(0.65 0.02 85)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="oklch(0.65 0.02 85)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "oklch(0.18 0.015 75)", 
                  border: "1px solid oklch(0.28 0.02 75)",
                  borderRadius: "8px",
                  color: "oklch(0.95 0.01 90)"
                }}
                labelStyle={{ color: "oklch(0.95 0.01 90)" }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => <span className="text-muted-foreground capitalize">{value}</span>}
              />
              <Area
                type="monotone"
                dataKey="nitrogen"
                stroke="oklch(0.65 0.18 145)"
                strokeWidth={2}
                fill="url(#nitrogenGradient)"
              />
              <Area
                type="monotone"
                dataKey="phosphorus"
                stroke="oklch(0.72 0.16 85)"
                strokeWidth={2}
                fill="url(#phosphorusGradient)"
              />
              <Area
                type="monotone"
                dataKey="potassium"
                stroke="oklch(0.55 0.15 250)"
                strokeWidth={2}
                fill="url(#potassiumGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground">Nitrogen (N)</span>
            </div>
            <p className="text-xs text-muted-foreground">Optimal: {optimalRanges.nitrogen.min}-{optimalRanges.nitrogen.max} {optimalRanges.nitrogen.unit}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground">Phosphorus (P)</span>
            </div>
            <p className="text-xs text-muted-foreground">Optimal: {optimalRanges.phosphorus.min}-{optimalRanges.phosphorus.max} {optimalRanges.phosphorus.unit}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-chart-3" />
              <span className="text-sm font-medium text-foreground">Potassium (K)</span>
            </div>
            <p className="text-xs text-muted-foreground">Optimal: {optimalRanges.potassium.min}-{optimalRanges.potassium.max} {optimalRanges.potassium.unit}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
