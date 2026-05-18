"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  CalendarIcon, 
  Plus, 
  Bell, 
  Sparkles, 
  Droplets, 
  Wheat, 
  Scissors,
  Clock,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns"

interface Task {
  id: string
  title: string
  type: "sowing" | "irrigation" | "harvest" | "fertilizer" | "other"
  date: Date
  time?: string
  notes?: string
  completed: boolean
  aiSuggested?: boolean
  reminder?: boolean
}

const taskTypeConfig = {
  sowing: { icon: Wheat, color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  irrigation: { icon: Droplets, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  harvest: { icon: Scissors, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  fertilizer: { icon: Sparkles, color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  other: { icon: CalendarIcon, color: "bg-slate-500/20 text-slate-400 border-slate-500/30" },
}

const aiSuggestions = [
  { title: "Optimal sowing window for wheat", type: "sowing" as const, date: addDays(new Date(), 3), reason: "Based on soil temperature and moisture levels" },
  { title: "Irrigation recommended", type: "irrigation" as const, date: addDays(new Date(), 1), reason: "Low rainfall predicted for next 5 days" },
  { title: "Harvest tomatoes", type: "harvest" as const, date: addDays(new Date(), 7), reason: "Crops reaching optimal maturity" },
]

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Plant corn seeds - Field A", type: "sowing", date: new Date(), completed: false, reminder: true },
    { id: "2", title: "Irrigate wheat field", type: "irrigation", date: addDays(new Date(), 1), completed: false },
    { id: "3", title: "Apply fertilizer - Tomatoes", type: "fertilizer", date: addDays(new Date(), 2), completed: false, aiSuggested: true },
    { id: "4", title: "Harvest potatoes - Field C", type: "harvest", date: addDays(new Date(), 5), completed: false },
  ])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [newTask, setNewTask] = useState({ title: "", type: "other" as Task["type"], time: "", notes: "" })
  const [dialogOpen, setDialogOpen] = useState(false)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const getTasksForDate = (date: Date) => tasks.filter(task => isSameDay(task.date, date))

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const addTask = () => {
    if (!newTask.title) return
    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      type: newTask.type,
      date: selectedDate,
      time: newTask.time,
      notes: newTask.notes,
      completed: false,
      reminder: true,
    }
    setTasks([...tasks, task])
    setNewTask({ title: "", type: "other", time: "", notes: "" })
    setDialogOpen(false)
  }

  const acceptSuggestion = (suggestion: typeof aiSuggestions[0]) => {
    const task: Task = {
      id: Date.now().toString(),
      title: suggestion.title,
      type: suggestion.type,
      date: suggestion.date,
      completed: false,
      aiSuggested: true,
      reminder: true,
    }
    setTasks([...tasks, task])
  }

  const todayTasks = tasks.filter(task => isSameDay(task.date, new Date()))
  const upcomingTasks = tasks.filter(task => task.date > new Date() && !isSameDay(task.date, new Date())).slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Mini Calendar */}
        <Card className="lg:col-span-2 border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Farm Calendar</CardTitle>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentMonth(addDays(monthStart, -15))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[120px] text-center">
                {format(currentMonth, "MMMM yyyy")}
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentMonth(addDays(monthEnd, 15))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center text-xs text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {daysInMonth.map(day => {
                const dayTasks = getTasksForDate(day)
                const isSelected = isSameDay(day, selectedDate)
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm transition-all relative
                      ${isToday(day) ? "bg-primary/20 text-primary font-bold" : ""}
                      ${isSelected ? "ring-2 ring-primary bg-primary/10" : "hover:bg-secondary"}
                    `}
                  >
                    {format(day, "d")}
                    {dayTasks.length > 0 && (
                      <div className="flex gap-0.5 mt-0.5">
                        {dayTasks.slice(0, 3).map((task, i) => (
                          <div 
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              task.type === "sowing" ? "bg-amber-400" :
                              task.type === "irrigation" ? "bg-blue-400" :
                              task.type === "harvest" ? "bg-emerald-400" :
                              task.type === "fertilizer" ? "bg-orange-400" : "bg-slate-400"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400" /> Sowing</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400" /> Irrigation</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Harvest</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-400" /> Fertilizer</div>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiSuggestions.map((suggestion, i) => {
              const Icon = taskTypeConfig[suggestion.type].icon
              return (
                <div 
                  key={i}
                  className="p-3 rounded-lg bg-secondary/50 border border-border/50 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{suggestion.title}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {format(suggestion.date, "MMM d")}
                    </span>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="h-7 text-xs"
                      onClick={() => acceptSuggestion(suggestion)}
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Tasks Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Tasks */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-semibold">{"Today's Tasks"}</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-1.5">
                  <Plus className="h-4 w-4" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create New Task</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Task Title</Label>
                    <Input 
                      placeholder="e.g., Plant tomato seeds"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Task Type</Label>
                      <Select 
                        value={newTask.type} 
                        onValueChange={(v) => setNewTask({ ...newTask, type: v as Task["type"] })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sowing">Sowing</SelectItem>
                          <SelectItem value="irrigation">Irrigation</SelectItem>
                          <SelectItem value="harvest">Harvest</SelectItem>
                          <SelectItem value="fertilizer">Fertilizer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Time (Optional)</Label>
                      <Input 
                        type="time"
                        value={newTask.time}
                        onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(selectedDate, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => date && setSelectedDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Notes (Optional)</Label>
                    <Textarea 
                      placeholder="Add any additional notes..."
                      value={newTask.notes}
                      onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
                    />
                  </div>
                  <Button onClick={addTask} className="w-full">
                    Create Task
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-2">
            {todayTasks.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No tasks scheduled for today
              </p>
            ) : (
              todayTasks.map(task => {
                const Icon = taskTypeConfig[task.type].icon
                return (
                  <div 
                    key={task.id}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 transition-opacity ${task.completed ? "opacity-50" : ""}`}
                  >
                    <Checkbox 
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${task.completed ? "line-through" : ""}`}>
                        {task.title}
                      </p>
                      {task.time && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {task.time}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {task.aiSuggested && (
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                          AI
                        </Badge>
                      )}
                      {task.reminder && (
                        <Bell className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center justify-between">
              Upcoming Tasks
              <Badge variant="outline" className="font-normal">
                <Smartphone className="h-3 w-3 mr-1" />
                Synced to Mobile
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {upcomingTasks.map(task => {
              const Icon = taskTypeConfig[task.type].icon
              return (
                <div 
                  key={task.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50"
                >
                  <div className={`p-1.5 rounded-md ${taskTypeConfig[task.type].color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{task.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(task.date, "EEE, MMM d")}
                    </p>
                  </div>
                  {task.aiSuggested && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                      AI
                    </Badge>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
