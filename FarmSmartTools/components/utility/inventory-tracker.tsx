"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Package, 
  AlertTriangle, 
  Plus,
  Search,
  ShoppingCart,
  Wheat,
  Droplets,
  Bug,
  Tractor,
  TrendingDown,
  ArrowRight,
  Filter
} from "lucide-react"

interface InventoryItem {
  id: string
  name: string
  category: "seeds" | "fertilizers" | "pesticides" | "machinery"
  quantity: number
  unit: string
  maxQuantity: number
  lastRestocked?: string
  lowStockThreshold: number
  price?: number
}

const categoryConfig = {
  seeds: { icon: Wheat, color: "text-amber-400", bgColor: "bg-amber-500/20" },
  fertilizers: { icon: Droplets, color: "text-blue-400", bgColor: "bg-blue-500/20" },
  pesticides: { icon: Bug, color: "text-red-400", bgColor: "bg-red-500/20" },
  machinery: { icon: Tractor, color: "text-slate-400", bgColor: "bg-slate-500/20" },
}

const initialInventory: InventoryItem[] = [
  { id: "1", name: "Wheat Seeds", category: "seeds", quantity: 45, unit: "kg", maxQuantity: 100, lowStockThreshold: 20, price: 25 },
  { id: "2", name: "Corn Seeds", category: "seeds", quantity: 12, unit: "kg", maxQuantity: 50, lowStockThreshold: 15, price: 30 },
  { id: "3", name: "Tomato Seeds", category: "seeds", quantity: 8, unit: "kg", maxQuantity: 30, lowStockThreshold: 10, price: 45 },
  { id: "4", name: "NPK Fertilizer", category: "fertilizers", quantity: 150, unit: "kg", maxQuantity: 500, lowStockThreshold: 100, price: 15 },
  { id: "5", name: "Urea", category: "fertilizers", quantity: 80, unit: "kg", maxQuantity: 300, lowStockThreshold: 75, price: 12 },
  { id: "6", name: "Organic Compost", category: "fertilizers", quantity: 200, unit: "kg", maxQuantity: 400, lowStockThreshold: 100, price: 8 },
  { id: "7", name: "Insecticide Spray", category: "pesticides", quantity: 5, unit: "L", maxQuantity: 20, lowStockThreshold: 5, price: 35 },
  { id: "8", name: "Herbicide", category: "pesticides", quantity: 15, unit: "L", maxQuantity: 30, lowStockThreshold: 10, price: 28 },
  { id: "9", name: "Tractor", category: "machinery", quantity: 2, unit: "units", maxQuantity: 5, lowStockThreshold: 1, price: 25000 },
  { id: "10", name: "Irrigation Pump", category: "machinery", quantity: 3, unit: "units", maxQuantity: 5, lowStockThreshold: 2, price: 800 },
]

export function InventoryTracker() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState({
    name: "",
    category: "seeds" as InventoryItem["category"],
    quantity: 0,
    unit: "kg",
    maxQuantity: 100,
    lowStockThreshold: 20,
    price: 0
  })

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const lowStockItems = inventory.filter(item => item.quantity <= item.lowStockThreshold)
  
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * (item.price || 0)), 0)

  const addItem = () => {
    if (!newItem.name) return
    const item: InventoryItem = {
      id: Date.now().toString(),
      ...newItem
    }
    setInventory([...inventory, item])
    setNewItem({ name: "", category: "seeds", quantity: 0, unit: "kg", maxQuantity: 100, lowStockThreshold: 20, price: 0 })
    setDialogOpen(false)
  }

  const updateQuantity = (id: string, delta: number) => {
    setInventory(inventory.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, Math.min(item.maxQuantity, item.quantity + delta)) }
        : item
    ))
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold">{inventory.length}</p>
              </div>
              <Package className="h-8 w-8 text-primary opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Low Stock Alerts</p>
                <p className="text-2xl font-bold text-amber-400">{lowStockItems.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-400 opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Inventory Value</p>
                <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-accent opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <Filter className="h-8 w-8 text-muted-foreground opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems.length > 0 && (
        <Card className="border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2 text-amber-400">
              <AlertTriangle className="h-5 w-5" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {lowStockItems.map(item => {
                const Icon = categoryConfig[item.category].icon
                return (
                  <div 
                    key={item.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-amber-500/30"
                  >
                    <Icon className={`h-4 w-4 ${categoryConfig[item.category].color}`} />
                    <span className="text-sm font-medium">{item.name}</span>
                    <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                      {item.quantity} {item.unit}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-7 text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-500/20"
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Reorder
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inventory Table */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-lg font-semibold">Inventory Items</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-secondary/50"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px] bg-secondary/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="fertilizers">Fertilizers</SelectItem>
                  <SelectItem value="pesticides">Pesticides</SelectItem>
                  <SelectItem value="machinery">Machinery</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="gap-1.5">
                    <Plus className="h-4 w-4" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Inventory Item</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label>Item Name</Label>
                      <Input 
                        placeholder="e.g., Wheat Seeds"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select 
                          value={newItem.category} 
                          onValueChange={(v) => setNewItem({ ...newItem, category: v as InventoryItem["category"] })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seeds">Seeds</SelectItem>
                            <SelectItem value="fertilizers">Fertilizers</SelectItem>
                            <SelectItem value="pesticides">Pesticides</SelectItem>
                            <SelectItem value="machinery">Machinery</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Unit</Label>
                        <Select 
                          value={newItem.unit} 
                          onValueChange={(v) => setNewItem({ ...newItem, unit: v })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kilograms (kg)</SelectItem>
                            <SelectItem value="L">Liters (L)</SelectItem>
                            <SelectItem value="units">Units</SelectItem>
                            <SelectItem value="bags">Bags</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Quantity</Label>
                        <Input 
                          type="number"
                          value={newItem.quantity}
                          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Max Qty</Label>
                        <Input 
                          type="number"
                          value={newItem.maxQuantity}
                          onChange={(e) => setNewItem({ ...newItem, maxQuantity: parseInt(e.target.value) || 100 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Price/Unit</Label>
                        <Input 
                          type="number"
                          value={newItem.price}
                          onChange={(e) => setNewItem({ ...newItem, price: parseInt(e.target.value) || 0 })}
                        />
                      </div>
                    </div>
                    <Button onClick={addItem} className="w-full">
                      Add to Inventory
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start mb-4 bg-secondary/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="seeds">Seeds</TabsTrigger>
              <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
              <TabsTrigger value="pesticides">Pesticides</TabsTrigger>
              <TabsTrigger value="machinery">Machinery</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-2">
              {filteredInventory.map(item => {
                const Icon = categoryConfig[item.category].icon
                const stockPercentage = (item.quantity / item.maxQuantity) * 100
                const isLowStock = item.quantity <= item.lowStockThreshold
                return (
                  <div 
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50"
                  >
                    <div className={`p-2 rounded-lg ${categoryConfig[item.category].bgColor}`}>
                      <Icon className={`h-5 w-5 ${categoryConfig[item.category].color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        {isLowStock && (
                          <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                            Low Stock
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress 
                          value={stockPercentage} 
                          className={`h-2 flex-1 ${isLowStock ? "[&>div]:bg-amber-400" : "[&>div]:bg-primary"}`}
                        />
                        <span className="text-xs text-muted-foreground min-w-[60px]">
                          {item.quantity}/{item.maxQuantity} {item.unit}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </Button>
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-xs gap-1"
                      >
                        <ShoppingCart className="h-3 w-3" />
                        Order
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </TabsContent>
            {["seeds", "fertilizers", "pesticides", "machinery"].map(cat => (
              <TabsContent key={cat} value={cat} className="space-y-2">
                {filteredInventory.filter(item => item.category === cat).map(item => {
                  const Icon = categoryConfig[item.category].icon
                  const stockPercentage = (item.quantity / item.maxQuantity) * 100
                  const isLowStock = item.quantity <= item.lowStockThreshold
                  return (
                    <div 
                      key={item.id}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50"
                    >
                      <div className={`p-2 rounded-lg ${categoryConfig[item.category].bgColor}`}>
                        <Icon className={`h-5 w-5 ${categoryConfig[item.category].color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          {isLowStock && (
                            <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                              Low Stock
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress 
                            value={stockPercentage} 
                            className={`h-2 flex-1 ${isLowStock ? "[&>div]:bg-amber-400" : "[&>div]:bg-primary"}`}
                          />
                          <span className="text-xs text-muted-foreground min-w-[60px]">
                            {item.quantity}/{item.maxQuantity} {item.unit}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </Button>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-xs gap-1"
                        >
                          <ShoppingCart className="h-3 w-3" />
                          Order
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
