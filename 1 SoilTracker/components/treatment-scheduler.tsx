"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Plus, Bell, Droplets, Bug, Leaf } from "lucide-react"
import { format, isSameDay } from "date-fns"

interface Treatment {
  id: string
  name: string
  type: "fertilizer" | "pesticide" | "organic"
  date: Date
  crop: string
  reminder: boolean
}

const initialTreatments: Treatment[] = [
  { id: "1", name: "NPK 20-20-20", type: "fertilizer", date: new Date(2026, 4, 15), crop: "Wheat", reminder: true },
  { id: "2", name: "Neem Oil Spray", type: "organic", date: new Date(2026, 4, 18), crop: "Tomatoes", reminder: true },
  { id: "3", name: "Insecticide Application", type: "pesticide", date: new Date(2026, 4, 22), crop: "Cotton", reminder: false },
  { id: "4", name: "Compost Addition", type: "organic", date: new Date(2026, 4, 25), crop: "Vegetables", reminder: true },
  { id: "5", name: "Urea Application", type: "fertilizer", date: new Date(2026, 4, 28), crop: "Rice", reminder: true },
]

const typeConfig = {
  fertilizer: { icon: Droplets, color: "bg-primary/20 text-primary border-primary/30" },
  pesticide: { icon: Bug, color: "bg-chart-4/20 text-chart-4 border-chart-4/30" },
  organic: { icon: Leaf, color: "bg-accent/20 text-accent border-accent/30" },
}

export function TreatmentScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [treatments, setTreatments] = useState<Treatment[]>(initialTreatments)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTreatment, setNewTreatment] = useState({
    name: "",
    type: "fertilizer" as Treatment["type"],
    crop: "",
  })

  const treatmentDates = treatments.map(t => t.date)
  const selectedDateTreatments = treatments.filter(t => date && isSameDay(t.date, date))
  const upcomingTreatments = treatments
    .filter(t => t.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  const handleAddTreatment = () => {
    if (newTreatment.name && newTreatment.crop && date) {
      setTreatments([
        ...treatments,
        {
          id: Date.now().toString(),
          ...newTreatment,
          date: date,
          reminder: true,
        },
      ])
      setNewTreatment({ name: "", type: "fertilizer", crop: "" })
      setIsDialogOpen(false)
    }
  }

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-primary" />
          Treatment Scheduler
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Schedule and track pesticide & fertilizer applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border border-border/50 bg-secondary/30 p-3"
              modifiers={{
                treatment: treatmentDates,
              }}
              modifiersStyles={{
                treatment: {
                  backgroundColor: "oklch(0.65 0.18 145 / 0.3)",
                  borderRadius: "50%",
                }
              }}
            />
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Treatment
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Schedule New Treatment</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Add a new treatment for {date ? format(date, "PPP") : "selected date"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Treatment Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., NPK Fertilizer"
                      value={newTreatment.name}
                      onChange={(e) => setNewTreatment({ ...newTreatment, name: e.target.value })}
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-foreground">Type</Label>
                    <Select value={newTreatment.type} onValueChange={(v: Treatment["type"]) => setNewTreatment({ ...newTreatment, type: v })}>
                      <SelectTrigger className="bg-secondary/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fertilizer">Fertilizer</SelectItem>
                        <SelectItem value="pesticide">Pesticide</SelectItem>
                        <SelectItem value="organic">Organic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crop" className="text-foreground">Crop</Label>
                    <Input
                      id="crop"
                      placeholder="e.g., Wheat"
                      value={newTreatment.crop}
                      onChange={(e) => setNewTreatment({ ...newTreatment, crop: e.target.value })}
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleAddTreatment} className="bg-primary text-primary-foreground">Add Treatment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-4">
            {selectedDateTreatments.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Selected Date
                </h4>
                {selectedDateTreatments.map((treatment) => {
                  const config = typeConfig[treatment.type]
                  const Icon = config.icon
                  return (
                    <div
                      key={treatment.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${config.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{treatment.name}</p>
                          <p className="text-xs text-muted-foreground">{treatment.crop}</p>
                        </div>
                      </div>
                      {treatment.reminder && (
                        <Bell className="w-4 h-4 text-accent" />
                      )}
                    </div>
                  )
                })}
              </div>
            )}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Upcoming Treatments
              </h4>
              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                {upcomingTreatments.map((treatment) => {
                  const config = typeConfig[treatment.type]
                  const Icon = config.icon
                  return (
                    <div
                      key={treatment.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                      onClick={() => setDate(treatment.date)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${config.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{treatment.name}</p>
                          <p className="text-xs text-muted-foreground">{treatment.crop}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs border-border/50">
                          {format(treatment.date, "MMM d")}
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
