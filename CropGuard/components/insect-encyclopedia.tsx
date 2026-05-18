"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Leaf, FlaskConical, ChevronDown, ChevronUp, Bug, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Pest {
  id: string
  name: string
  scientificName: string
  image: string
  affectedCrops: string[]
  description: string
  symptoms: string[]
  nonChemicalPrevention: string[]
  chemicalPrevention: string[]
  seasonalRisk: "year-round" | "monsoon" | "summer" | "winter"
}

const pests: Pest[] = [
  {
    id: "1",
    name: "Fall Armyworm",
    scientificName: "Spodoptera frugiperda",
    image: "/pests/fall-armyworm.jpg",
    affectedCrops: ["Maize", "Rice", "Sorghum", "Sugarcane"],
    description: "A highly destructive pest that can cause significant damage to maize and other cereal crops. Larvae feed on leaves and can bore into the plant.",
    symptoms: [
      "Ragged holes in leaves",
      "Sawdust-like frass near damaged areas",
      "Windowing effect on young leaves",
      "Damaged growing points"
    ],
    nonChemicalPrevention: [
      "Early planting to avoid peak infestation",
      "Use of pheromone traps for monitoring",
      "Intercropping with non-host plants",
      "Release of natural predators like Trichogramma",
      "Manual removal of egg masses",
      "Crop rotation with non-host crops"
    ],
    chemicalPrevention: [
      "Chlorantraniliprole 18.5% SC @ 0.4ml/L",
      "Emamectin benzoate 5% SG @ 0.4g/L",
      "Spinetoram 11.7% SC @ 0.5ml/L",
      "Apply during early morning or evening"
    ],
    seasonalRisk: "monsoon"
  },
  {
    id: "2",
    name: "Brown Planthopper",
    scientificName: "Nilaparvata lugens",
    image: "/pests/brown-planthopper.jpg",
    affectedCrops: ["Rice"],
    description: "A major pest of rice that sucks sap from the base of tillers, causing hopper burn. Can transmit viral diseases.",
    symptoms: [
      "Yellowing of leaves starting from lower leaves",
      "Hopper burn - circular patches of dried plants",
      "Presence of honeydew and sooty mold",
      "Stunted plant growth"
    ],
    nonChemicalPrevention: [
      "Avoid excessive nitrogen fertilization",
      "Alternate wetting and drying irrigation",
      "Use resistant varieties (BPH resistant)",
      "Light traps to monitor adult population",
      "Avoid close planting",
      "Remove weeds from bunds"
    ],
    chemicalPrevention: [
      "Pymetrozine 50% WG @ 0.6g/L",
      "Dinotefuran 20% SG @ 0.3g/L",
      "Avoid synthetic pyrethroids",
      "Spray at base of plants where pests congregate"
    ],
    seasonalRisk: "monsoon"
  },
  {
    id: "3",
    name: "Aphids",
    scientificName: "Aphis gossypii",
    image: "/pests/aphids.jpg",
    affectedCrops: ["Cotton", "Vegetables", "Pulses", "Oilseeds"],
    description: "Small soft-bodied insects that cluster on new growth and undersides of leaves, sucking plant sap and transmitting viral diseases.",
    symptoms: [
      "Curling and yellowing of leaves",
      "Sticky honeydew on leaf surfaces",
      "Black sooty mold growth",
      "Stunted plant growth",
      "Distorted flowers and fruits"
    ],
    nonChemicalPrevention: [
      "Spray with strong water jet to dislodge",
      "Release ladybird beetles as biocontrol",
      "Yellow sticky traps for monitoring",
      "Neem oil spray (5ml/L water)",
      "Reflective mulches to repel aphids",
      "Avoid excessive nitrogen"
    ],
    chemicalPrevention: [
      "Imidacloprid 17.8% SL @ 0.3ml/L",
      "Acetamiprid 20% SP @ 0.3g/L",
      "Thiamethoxam 25% WG @ 0.3g/L",
      "Rotate insecticides to prevent resistance"
    ],
    seasonalRisk: "winter"
  },
  {
    id: "4",
    name: "Pink Bollworm",
    scientificName: "Pectinophora gossypiella",
    image: "/pests/pink-bollworm.jpg",
    affectedCrops: ["Cotton"],
    description: "The most destructive pest of cotton in India. Larvae bore into bolls and feed on developing seeds, causing significant yield loss.",
    symptoms: [
      "Rosetted flowers (stuck petals)",
      "Premature opening of bolls",
      "Stained and damaged lint",
      "Entry holes in bolls with frass",
      "Double seeds (fused)"
    ],
    nonChemicalPrevention: [
      "Timely destruction of crop residues",
      "Install pheromone traps (5/ha)",
      "Use Bt cotton varieties",
      "Avoid late sowing",
      "Deep summer plowing",
      "Maintain cotton-free period"
    ],
    chemicalPrevention: [
      "Profenofos 50% EC @ 2ml/L",
      "Quinalphos 25% EC @ 2ml/L",
      "Thiodicarb 75% WP @ 1g/L",
      "Spray at flowering and boll formation"
    ],
    seasonalRisk: "monsoon"
  },
  {
    id: "5",
    name: "Desert Locust",
    scientificName: "Schistocerca gregaria",
    image: "/pests/locust.jpg",
    affectedCrops: ["All crops", "Vegetables", "Trees", "Grasslands"],
    description: "Highly mobile and voracious pest that forms massive swarms capable of devastating entire regions. A single swarm can consume crops equivalent to food for thousands of people.",
    symptoms: [
      "Complete defoliation of plants",
      "Stripped bark from trees",
      "Damaged fruits and seeds",
      "Large swarms visible in sky"
    ],
    nonChemicalPrevention: [
      "Early warning systems and monitoring",
      "Community-based surveillance",
      "Trenching to trap hoppers",
      "Use of birds and poultry as predators",
      "Covering young crops with nets",
      "Creating smoke to divert swarms"
    ],
    chemicalPrevention: [
      "Malathion 96% ULV (aerial spray)",
      "Chlorpyrifos 20% EC @ 2.5ml/L",
      "Deltamethrin 2.5% ULV",
      "Contact local agriculture department immediately"
    ],
    seasonalRisk: "summer"
  },
  {
    id: "6",
    name: "Stem Borer",
    scientificName: "Chilo partellus",
    image: "/pests/stem-borer.jpg",
    affectedCrops: ["Rice", "Maize", "Sugarcane", "Sorghum"],
    description: "Larvae bore into stems causing dead hearts in young plants and white ears in mature plants. Major pest of cereal crops.",
    symptoms: [
      "Dead heart in vegetative stage",
      "White ear heads at maturity",
      "Bore holes in stems",
      "Frass in stem tunnels",
      "Easily pulled tillers"
    ],
    nonChemicalPrevention: [
      "Clip tips of seedlings before transplanting",
      "Use Trichogramma egg parasitoid",
      "Remove and destroy affected plants",
      "Light traps for moth monitoring",
      "Timely harvesting at ground level",
      "Flood fields after harvest"
    ],
    chemicalPrevention: [
      "Cartap hydrochloride 4G @ 25kg/ha",
      "Chlorantraniliprole 0.4% GR @ 10kg/ha",
      "Fipronil 0.3% GR @ 25kg/ha",
      "Apply granules in leaf whorls"
    ],
    seasonalRisk: "monsoon"
  },
]

const seasonColors = {
  "year-round": "bg-muted text-muted-foreground",
  "monsoon": "bg-primary/20 text-primary",
  "summer": "bg-warning/20 text-warning-foreground",
  "winter": "bg-accent/20 text-accent-foreground",
}

export function InsectEncyclopedia() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedPest, setExpandedPest] = useState<string | null>(null)
  const [selectedCrop, setSelectedCrop] = useState<string>("all")

  const allCrops = Array.from(
    new Set(pests.flatMap((pest) => pest.affectedCrops))
  ).sort()

  const filteredPests = pests.filter((pest) => {
    const matchesSearch =
      pest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pest.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pest.affectedCrops.some((crop) =>
        crop.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesCrop =
      selectedCrop === "all" ||
      pest.affectedCrops.includes(selectedCrop)

    return matchesSearch && matchesCrop
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pests by name or affected crop..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCrop === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCrop("all")}
          >
            All Crops
          </Button>
          {allCrops.slice(0, 5).map((crop) => (
            <Button
              key={crop}
              variant={selectedCrop === crop ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCrop(crop)}
            >
              {crop}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredPests.map((pest) => (
          <Collapsible
            key={pest.id}
            open={expandedPest === pest.id}
            onOpenChange={(open) => setExpandedPest(open ? pest.id : null)}
          >
            <Card className="overflow-hidden">
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-lg overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center">
                      <Bug className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                            {pest.name}
                            <Badge className={seasonColors[pest.seasonalRisk]}>
                              {pest.seasonalRisk}
                            </Badge>
                          </CardTitle>
                          <CardDescription className="italic">
                            {pest.scientificName}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          {expandedPest === pest.id ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {pest.affectedCrops.map((crop) => (
                          <Badge key={crop} variant="secondary" className="text-xs">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {pest.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <Tabs defaultValue="symptoms" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="symptoms" className="text-xs md:text-sm">
                        <AlertCircle className="h-4 w-4 mr-1.5 hidden md:inline" />
                        Symptoms
                      </TabsTrigger>
                      <TabsTrigger value="organic" className="text-xs md:text-sm">
                        <Leaf className="h-4 w-4 mr-1.5 hidden md:inline" />
                        Organic
                      </TabsTrigger>
                      <TabsTrigger value="chemical" className="text-xs md:text-sm">
                        <FlaskConical className="h-4 w-4 mr-1.5 hidden md:inline" />
                        Chemical
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="symptoms" className="mt-4">
                      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                        <h4 className="font-medium text-destructive mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          Identifying Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {pest.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="organic" className="mt-4">
                      <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                        <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                          <Leaf className="h-4 w-4" />
                          Non-Chemical Prevention Methods
                        </h4>
                        <ul className="space-y-2">
                          {pest.nonChemicalPrevention.map((method, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="chemical" className="mt-4">
                      <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <FlaskConical className="h-4 w-4" />
                          Chemical Prevention Methods
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3">
                          ⚠️ Always follow recommended dosage and safety precautions. Use as last resort.
                        </p>
                        <ul className="space-y-2">
                          {pest.chemicalPrevention.map((method, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {filteredPests.length === 0 && (
        <div className="text-center py-12">
          <Bug className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No pests found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  )
}
