"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Thermometer, 
  Wind, 
  Droplets, 
  Sun, 
  CloudRain, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  sunIntensity: number;
}

interface TimeSlot {
  hour: number;
  label: string;
  evaporationRate: number;
  recommendation: "optimal" | "moderate" | "avoid";
}

export function EvaporationEstimator() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 28,
    humidity: 45,
    windSpeed: 12,
    sunIntensity: 75,
  });
  const [isLoading, setIsLoading] = useState(false);

  const calculateEvaporationRate = (data: WeatherData, hourOffset: number = 0): number => {
    // Simplified Penman-Monteith inspired calculation
    const tempFactor = (data.temperature + hourOffset * 2) / 40;
    const humidityFactor = 1 - data.humidity / 100;
    const windFactor = data.windSpeed / 30;
    const sunFactor = (data.sunIntensity - hourOffset * 10) / 100;
    
    const rate = (tempFactor * 0.35 + humidityFactor * 0.25 + windFactor * 0.2 + sunFactor * 0.2) * 10;
    return Math.max(0.5, Math.min(10, rate));
  };

  const getTimeSlots = (): TimeSlot[] => {
    const currentHour = new Date().getHours();
    const slots: TimeSlot[] = [];
    
    for (let i = 0; i < 12; i += 2) {
      const hour = (currentHour + i) % 24;
      const evapRate = calculateEvaporationRate(weather, i);
      
      let recommendation: "optimal" | "moderate" | "avoid";
      if (evapRate < 3) recommendation = "optimal";
      else if (evapRate < 6) recommendation = "moderate";
      else recommendation = "avoid";

      slots.push({
        hour,
        label: `${hour.toString().padStart(2, "0")}:00`,
        evaporationRate: evapRate,
        recommendation,
      });
    }
    return slots;
  };

  const simulateWeatherFetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setWeather({
        temperature: Math.round(20 + Math.random() * 20),
        humidity: Math.round(30 + Math.random() * 50),
        windSpeed: Math.round(5 + Math.random() * 25),
        sunIntensity: Math.round(40 + Math.random() * 60),
      });
      setIsLoading(false);
    }, 800);
  };

  const currentEvapRate = calculateEvaporationRate(weather);
  const timeSlots = getTimeSlots();
  const bestTime = timeSlots.reduce((best, slot) => 
    slot.evaporationRate < best.evaporationRate ? slot : best
  );

  const getEvapColor = (rate: number) => {
    if (rate < 3) return "text-primary";
    if (rate < 6) return "text-accent-foreground";
    return "text-destructive";
  };

  const getEvapBg = (rate: number) => {
    if (rate < 3) return "bg-primary/10";
    if (rate < 6) return "bg-accent/30";
    return "bg-destructive/10";
  };

  return (
    <Card className="border-2 border-border/50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">Evaporation Estimator</CardTitle>
            <CardDescription className="mt-1">
              Calculate water loss based on weather conditions to optimize irrigation timing
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={simulateWeatherFetch}
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh Weather
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Conditions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <Thermometer className="h-6 w-6 mx-auto text-destructive/70 mb-2" />
            <p className="text-2xl font-bold text-foreground">{weather.temperature}°C</p>
            <p className="text-xs text-muted-foreground">Temperature</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <Droplets className="h-6 w-6 mx-auto text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{weather.humidity}%</p>
            <p className="text-xs text-muted-foreground">Humidity</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <Wind className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
            <p className="text-2xl font-bold text-foreground">{weather.windSpeed} km/h</p>
            <p className="text-xs text-muted-foreground">Wind Speed</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <Sun className="h-6 w-6 mx-auto text-accent mb-2" />
            <p className="text-2xl font-bold text-foreground">{weather.sunIntensity}%</p>
            <p className="text-xs text-muted-foreground">Sun Intensity</p>
          </div>
        </div>

        {/* Adjust Weather Manually */}
        <div className="space-y-4 bg-muted/30 rounded-lg p-4">
          <p className="text-sm font-medium text-foreground">Adjust Conditions Manually</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Temperature</span>
                <span className="font-medium">{weather.temperature}°C</span>
              </div>
              <Slider
                value={[weather.temperature]}
                onValueChange={([val]) => setWeather(w => ({ ...w, temperature: val }))}
                min={0}
                max={50}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Humidity</span>
                <span className="font-medium">{weather.humidity}%</span>
              </div>
              <Slider
                value={[weather.humidity]}
                onValueChange={([val]) => setWeather(w => ({ ...w, humidity: val }))}
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Wind Speed</span>
                <span className="font-medium">{weather.windSpeed} km/h</span>
              </div>
              <Slider
                value={[weather.windSpeed]}
                onValueChange={([val]) => setWeather(w => ({ ...w, windSpeed: val }))}
                min={0}
                max={50}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sun Intensity</span>
                <span className="font-medium">{weather.sunIntensity}%</span>
              </div>
              <Slider
                value={[weather.sunIntensity]}
                onValueChange={([val]) => setWeather(w => ({ ...w, sunIntensity: val }))}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </div>
        </div>

        {/* Current Evaporation Rate */}
        <div className={`rounded-lg p-6 text-center ${getEvapBg(currentEvapRate)}`}>
          <p className="text-sm text-muted-foreground mb-2">Current Estimated Evaporation Rate</p>
          <p className={`text-4xl font-bold ${getEvapColor(currentEvapRate)}`}>
            {currentEvapRate.toFixed(1)} mm/day
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {currentEvapRate < 3 && "Low evaporation - Excellent time to irrigate"}
            {currentEvapRate >= 3 && currentEvapRate < 6 && "Moderate evaporation - Consider irrigation timing"}
            {currentEvapRate >= 6 && "High evaporation - Consider waiting for cooler conditions"}
          </p>
        </div>

        {/* Time-based Recommendations */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="font-medium text-foreground">Irrigation Time Recommendations</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {timeSlots.map((slot) => (
              <div
                key={slot.hour}
                className={`
                  rounded-lg p-3 text-center border transition-all
                  ${slot.recommendation === "optimal" ? "bg-primary/10 border-primary/30" : ""}
                  ${slot.recommendation === "moderate" ? "bg-accent/20 border-accent/30" : ""}
                  ${slot.recommendation === "avoid" ? "bg-destructive/10 border-destructive/30" : ""}
                `}
              >
                <p className="text-sm font-medium text-foreground">{slot.label}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {slot.evaporationRate.toFixed(1)} mm
                </p>
                {slot.recommendation === "optimal" && (
                  <CheckCircle2 className="h-4 w-4 mx-auto mt-2 text-primary" />
                )}
                {slot.recommendation === "avoid" && (
                  <AlertTriangle className="h-4 w-4 mx-auto mt-2 text-destructive" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Best Time Highlight */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Best Time to Irrigate: {bestTime.label}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Expected evaporation rate of only {bestTime.evaporationRate.toFixed(1)} mm/day. 
              Irrigating at this time could save up to {Math.round((currentEvapRate - bestTime.evaporationRate) / currentEvapRate * 100)}% 
              of water compared to current conditions.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Optimal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent/50" />
            <span className="text-muted-foreground">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-muted-foreground">Avoid</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
