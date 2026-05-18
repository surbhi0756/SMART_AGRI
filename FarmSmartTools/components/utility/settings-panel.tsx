"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Sun, 
  Moon, 
  Monitor,
  Globe,
  Type,
  Volume2,
  Eye,
  Mic,
  MessageSquare,
  Bell,
  Smartphone,
  Mail,
  Check,
  Palette
} from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

const colorThemes = [
  { id: "green", name: "Forest Green", color: "bg-emerald-500" },
  { id: "amber", name: "Golden Wheat", color: "bg-amber-500" },
  { id: "blue", name: "Sky Blue", color: "bg-blue-500" },
  { id: "earth", name: "Earth Brown", color: "bg-orange-700" },
]

const fontOptions = [
  { id: "default", name: "Default (Geist)" },
  { id: "serif", name: "Serif" },
  { id: "dyslexic", name: "OpenDyslexic" },
  { id: "mono", name: "Monospace" },
]

export function SettingsPanel() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  const [colorTheme, setColorTheme] = useState("green")
  const [language, setLanguage] = useState("en")
  const [fontSize, setFontSize] = useState([16])
  const [fontFamily, setFontFamily] = useState("default")
  
  // Accessibility
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [voiceCommands, setVoiceCommands] = useState(false)
  const [screenReader, setScreenReader] = useState(false)
  const [textToSpeech, setTextToSpeech] = useState(false)
  
  // Notifications
  const [pushNotifications, setPushNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [taskReminders, setTaskReminders] = useState(true)
  const [weatherAlerts, setWeatherAlerts] = useState(true)
  const [marketUpdates, setMarketUpdates] = useState(false)

  return (
    <div className="space-y-6">
      {/* Theme & Appearance */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Theme & Appearance
          </CardTitle>
          <CardDescription>Customize how Smart Agri looks on your device</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Theme Mode */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Theme Mode</Label>
            <div className="flex gap-2">
              {[
                { id: "light", icon: Sun, label: "Light" },
                { id: "dark", icon: Moon, label: "Dark" },
                { id: "system", icon: Monitor, label: "System" },
              ].map(({ id, icon: Icon, label }) => (
                <Button
                  key={id}
                  variant={mounted && theme === id ? "default" : "outline"}
                  className={`flex-1 gap-2 ${mounted && theme === id ? "" : "bg-secondary/50"}`}
                  onClick={() => setTheme(id)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Color Theme */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Accent Color</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {colorThemes.map(ct => (
                <button
                  key={ct.id}
                  onClick={() => setColorTheme(ct.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    colorTheme === ct.id 
                      ? "border-primary bg-primary/10" 
                      : "border-border/50 bg-secondary/30 hover:bg-secondary/50"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full ${ct.color}`} />
                  <span className="text-sm">{ct.name}</span>
                  {colorTheme === ct.id && (
                    <Check className="h-4 w-4 text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Font Settings */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Font Family</Label>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger className="bg-secondary/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontOptions.map(font => (
                  <SelectItem key={font.id} value={font.id}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Font Size</Label>
              <span className="text-sm text-muted-foreground">{fontSize[0]}px</span>
            </div>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={24}
              step={1}
              className="[&>span]:bg-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Small</span>
              <span>Large</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Preferences */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Language & Region
          </CardTitle>
          <CardDescription>Set your preferred language for the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Display Language</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                    language === lang.code 
                      ? "border-primary bg-primary/10" 
                      : "border-border/50 bg-secondary/30 hover:bg-secondary/50"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                  {language === lang.code && (
                    <Check className="h-4 w-4 text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-3">
              <Type className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Translation Quality</p>
                <p className="text-xs text-muted-foreground">
                  AI-powered translations for agricultural terminology
                </p>
              </div>
              <Badge className="ml-auto bg-primary/20 text-primary border-primary/30">
                Enhanced
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Options */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Accessibility
          </CardTitle>
          <CardDescription>Make Smart Agri easier to use for everyone</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Voice Commands */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Mic className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Voice Commands</p>
                <p className="text-xs text-muted-foreground">
                  Control the app with voice instructions
                </p>
              </div>
            </div>
            <Switch 
              checked={voiceCommands} 
              onCheckedChange={setVoiceCommands}
            />
          </div>

          {/* Text to Speech */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Volume2 className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium">Text to Speech</p>
                <p className="text-xs text-muted-foreground">
                  Read notifications and content aloud
                </p>
              </div>
            </div>
            <Switch 
              checked={textToSpeech} 
              onCheckedChange={setTextToSpeech}
            />
          </div>

          {/* Screen Reader Optimization */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <MessageSquare className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Screen Reader Optimization</p>
                <p className="text-xs text-muted-foreground">
                  Enhanced support for assistive technologies
                </p>
              </div>
            </div>
            <Switch 
              checked={screenReader} 
              onCheckedChange={setScreenReader}
            />
          </div>

          <Separator />

          {/* Visual Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
              <div>
                <p className="text-sm font-medium">High Contrast</p>
                <p className="text-xs text-muted-foreground">Increase visual contrast</p>
              </div>
              <Switch 
                checked={highContrast} 
                onCheckedChange={setHighContrast}
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
              <div>
                <p className="text-sm font-medium">Reduce Motion</p>
                <p className="text-xs text-muted-foreground">Minimize animations</p>
              </div>
              <Switch 
                checked={reduceMotion} 
                onCheckedChange={setReduceMotion}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
          <CardDescription>Manage how you receive updates and alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Notification Channels */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Notification Channels</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Push</span>
                </div>
                <Switch 
                  checked={pushNotifications} 
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Email</span>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">SMS</span>
                </div>
                <Switch 
                  checked={smsNotifications} 
                  onCheckedChange={setSmsNotifications}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Alert Types */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Alert Types</Label>
            <div className="space-y-2">
              {[
                { id: "tasks", label: "Task Reminders", desc: "Sowing, irrigation, and harvest reminders", state: taskReminders, setState: setTaskReminders },
                { id: "weather", label: "Weather Alerts", desc: "Severe weather and optimal conditions", state: weatherAlerts, setState: setWeatherAlerts },
                { id: "market", label: "Market Updates", desc: "Price changes and trading opportunities", state: marketUpdates, setState: setMarketUpdates },
              ].map(({ id, label, desc, state, setState }) => (
                <div 
                  key={id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50"
                >
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                  <Switch checked={state} onCheckedChange={setState} />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
