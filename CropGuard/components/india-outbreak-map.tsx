"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps"
import { MapPin, AlertTriangle, Bug, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

// India political map with state boundaries
const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"

interface PestReport {
  id: string
  coordinates: [number, number]
  pestName: string
  severity: "low" | "medium" | "high"
  location: string
  reportedBy: string
  date: string
  description: string
}

const initialReports: PestReport[] = [
  {
    id: "1",
    coordinates: [77.209, 28.6139],
    pestName: "Fall Armyworm",
    severity: "high",
    location: "Delhi",
    reportedBy: "Farmer Singh",
    date: "2024-01-15",
    description: "Severe infestation in maize crops affecting 5 hectares",
  },
  {
    id: "2",
    coordinates: [72.8777, 19.076],
    pestName: "Brown Planthopper",
    severity: "medium",
    location: "Mumbai, Maharashtra",
    reportedBy: "Ramesh Patel",
    date: "2024-01-14",
    description: "Moderate presence in rice paddies",
  },
  {
    id: "3",
    coordinates: [88.3639, 22.5726],
    pestName: "Aphids",
    severity: "low",
    location: "Kolkata, West Bengal",
    reportedBy: "Amit Das",
    date: "2024-01-13",
    description: "Early signs detected in mustard fields",
  },
  {
    id: "4",
    coordinates: [80.2707, 13.0827],
    pestName: "Pink Bollworm",
    severity: "high",
    location: "Chennai, Tamil Nadu",
    reportedBy: "Kumar S",
    date: "2024-01-12",
    description: "Critical infestation in cotton crops",
  },
  {
    id: "5",
    coordinates: [75.7873, 26.9124],
    pestName: "Locust Swarm",
    severity: "high",
    location: "Jaipur, Rajasthan",
    reportedBy: "Vikram Sharma",
    date: "2024-01-11",
    description: "Large swarm spotted moving towards farmlands",
  },
  {
    id: "6",
    coordinates: [73.8567, 18.5204],
    pestName: "Stem Borer",
    severity: "medium",
    location: "Pune, Maharashtra",
    reportedBy: "Suresh More",
    date: "2024-01-10",
    description: "Affecting sugarcane crops in multiple villages",
  },
]

const severityColors = {
  low: "fill-success",
  medium: "fill-warning",
  high: "fill-destructive",
}

const severityBadgeColors = {
  low: "bg-success text-success-foreground",
  medium: "bg-warning text-warning-foreground",
  high: "bg-destructive text-destructive-foreground",
}

export function IndiaOutbreakMap() {
  const [reports, setReports] = useState<PestReport[]>(initialReports)
  const [selectedReport, setSelectedReport] = useState<PestReport | null>(null)
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [center, setCenter] = useState<[number, number]>([78.9629, 22.5937])

  const [newReport, setNewReport] = useState({
    pestName: "",
    severity: "medium" as "low" | "medium" | "high",
    location: "",
    description: "",
    reportedBy: "",
  })

  const handleZoomIn = () => {
    if (zoom < 4) setZoom(zoom * 1.5)
  }

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom / 1.5)
  }

  const handleSubmitReport = () => {
    const coordinates: [number, number] = [
      75 + Math.random() * 10,
      20 + Math.random() * 10,
    ]

    const report: PestReport = {
      id: Date.now().toString(),
      coordinates,
      pestName: newReport.pestName,
      severity: newReport.severity,
      location: newReport.location,
      reportedBy: newReport.reportedBy,
      date: new Date().toISOString().split("T")[0],
      description: newReport.description,
    }

    setReports([...reports, report])
    setNewReport({
      pestName: "",
      severity: "medium",
      location: "",
      description: "",
      reportedBy: "",
    })
    setIsReportDialogOpen(false)
  }

  return (
    <div className="relative rounded-xl border bg-card overflow-hidden">
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          className="rounded-full shadow-lg"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          className="rounded-full shadow-lg"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button className="shadow-lg gap-2">
              <AlertTriangle className="h-4 w-4" />
              Report Pest Sighting
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-primary" />
                Report Pest Outbreak
              </DialogTitle>
              <DialogDescription>
                Help your fellow farmers by reporting pest sightings in your area.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="pestName">Pest Name</Label>
                <Input
                  id="pestName"
                  placeholder="e.g., Fall Armyworm, Aphids"
                  value={newReport.pestName}
                  onChange={(e) =>
                    setNewReport({ ...newReport, pestName: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="severity">Severity Level</Label>
                <Select
                  value={newReport.severity}
                  onValueChange={(value: "low" | "medium" | "high") =>
                    setNewReport({ ...newReport, severity: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Early Detection</SelectItem>
                    <SelectItem value="medium">Medium - Spreading</SelectItem>
                    <SelectItem value="high">High - Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Village/District, State"
                  value={newReport.location}
                  onChange={(e) =>
                    setNewReport({ ...newReport, location: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reportedBy">Your Name</Label>
                <Input
                  id="reportedBy"
                  placeholder="Your name"
                  value={newReport.reportedBy}
                  onChange={(e) =>
                    setNewReport({ ...newReport, reportedBy: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the pest situation, affected crops, area..."
                  value={newReport.description}
                  onChange={(e) =>
                    setNewReport({ ...newReport, description: e.target.value })
                  }
                />
              </div>
            </div>
            <Button onClick={handleSubmitReport} className="w-full">
              Submit Report
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="absolute bottom-4 left-4 z-10 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
        <p className="text-sm font-medium mb-2">Severity Legend</p>
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">High Risk</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border max-w-xs">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="h-4 w-4 text-primary" />
          <p className="text-sm font-medium">Active Reports</p>
        </div>
        <p className="text-2xl font-bold text-primary">{reports.length}</p>
        <p className="text-xs text-muted-foreground">pest sightings this week</p>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937],
        }}
        className="w-full h-[500px] md:h-[600px]"
      >
        <ZoomableGroup zoom={zoom} center={center} onMoveEnd={({ coordinates }) => setCenter(coordinates as [number, number])}>
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="transition-all cursor-pointer outline-none"
                  style={{
                    default: { 
                      fill: "#f5f5f0",
                      stroke: "#52b788",
                      strokeWidth: 1.5,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    hover: { 
                      fill: "#e8f5e9",
                      stroke: "#2d6a4f",
                      strokeWidth: 2,
                    },
                    pressed: { 
                      fill: "#c8e6c9",
                      stroke: "#1b4332",
                      strokeWidth: 2,
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {reports.map((report) => (
            <Marker
              key={report.id}
              coordinates={report.coordinates}
              onClick={() => setSelectedReport(report)}
            >
              <circle
                r={8}
                className={`${severityColors[report.severity]} cursor-pointer hover:opacity-80 transition-opacity`}
                stroke="#fff"
                strokeWidth={2}
              />
              <circle
                r={12}
                className={`${severityColors[report.severity]} opacity-30 animate-ping`}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {selectedReport && (
        <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-primary" />
                {selectedReport.pestName}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className={severityBadgeColors[selectedReport.severity]}>
                  {selectedReport.severity.toUpperCase()} SEVERITY
                </Badge>
              </div>
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedReport.location}</span>
                </div>
                <p className="text-muted-foreground">{selectedReport.description}</p>
                <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
                  <span>Reported by: {selectedReport.reportedBy}</span>
                  <span>{selectedReport.date}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
