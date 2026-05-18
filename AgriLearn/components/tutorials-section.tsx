"use client"

import { useState } from "react"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Sprout, Bug, Apple, Leaf } from "lucide-react"

const categories = [
  { id: "all", label: "All Tutorials", icon: Leaf },
  { id: "plantation", label: "Plantation", icon: Sprout },
  { id: "pest-control", label: "Pest Control", icon: Bug },
  { id: "harvesting", label: "Harvesting", icon: Apple },
]

const tutorials = [
  // Plantation Tutorials
  {
    id: "1",
    title: "Complete Guide to Rice Cultivation - From Seedbed to Harvest",
    description: "Learn traditional and modern rice farming techniques including land preparation, transplanting, and water management.",
    thumbnailUrl: "https://img.youtube.com/vi/r7C5rO8BQZQ/maxresdefault.jpg",
    videoId: "r7C5rO8BQZQ",
    category: "plantation",
    categoryLabel: "Plantation",
    duration: "15:32",
  },
  {
    id: "2",
    title: "How to Grow Tomatoes - Complete Growing Guide",
    description: "Step-by-step guide for growing healthy tomatoes from seed to harvest including soil preparation and staking techniques.",
    thumbnailUrl: "https://img.youtube.com/vi/9w9IKNLRI1w/maxresdefault.jpg",
    videoId: "9w9IKNLRI1w",
    category: "plantation",
    categoryLabel: "Plantation",
    duration: "12:45",
  },
  {
    id: "3",
    title: "Vegetable Gardening for Beginners - Starting Your First Garden",
    description: "Essential tips for beginners on how to start a productive vegetable garden with proper spacing and care.",
    thumbnailUrl: "https://img.youtube.com/vi/BMlN3JMzpHo/maxresdefault.jpg",
    videoId: "BMlN3JMzpHo",
    category: "plantation",
    categoryLabel: "Plantation",
    duration: "18:20",
  },
  {
    id: "4",
    title: "How to Grow Spices at Home - Turmeric, Ginger & Chilli",
    description: "Complete guide to growing popular spices in your garden or containers for fresh, organic produce.",
    thumbnailUrl: "https://img.youtube.com/vi/jCAIBrSQC10/maxresdefault.jpg",
    videoId: "jCAIBrSQC10",
    category: "plantation",
    categoryLabel: "Plantation",
    duration: "14:15",
  },
  // Pest Control Tutorials
  {
    id: "5",
    title: "Natural Pest Control Methods for Organic Farming",
    description: "Learn eco-friendly techniques to protect your crops from common pests without harmful chemicals.",
    thumbnailUrl: "https://img.youtube.com/vi/X3i-bHQ9YiQ/maxresdefault.jpg",
    videoId: "X3i-bHQ9YiQ",
    category: "pest-control",
    categoryLabel: "Pest Control",
    duration: "16:40",
  },
  {
    id: "6",
    title: "How to Control Aphids and Common Garden Pests",
    description: "Effective strategies to identify and eliminate aphids, caterpillars, and other destructive insects.",
    thumbnailUrl: "https://img.youtube.com/vi/1DAqNf1hXo4/maxresdefault.jpg",
    videoId: "1DAqNf1hXo4",
    category: "pest-control",
    categoryLabel: "Pest Control",
    duration: "11:55",
  },
  {
    id: "7",
    title: "Integrated Pest Management for Sustainable Agriculture",
    description: "Understanding IPM principles and how to implement them in your farm for long-term pest control.",
    thumbnailUrl: "https://img.youtube.com/vi/pwHt1P_c1E4/maxresdefault.jpg",
    videoId: "pwHt1P_c1E4",
    category: "pest-control",
    categoryLabel: "Pest Control",
    duration: "20:10",
  },
  {
    id: "8",
    title: "Preventing and Treating Plant Diseases Naturally",
    description: "Identify common plant diseases and learn organic treatment methods to save your crops.",
    thumbnailUrl: "https://img.youtube.com/vi/Yw5EBmJLvAU/maxresdefault.jpg",
    videoId: "Yw5EBmJLvAU",
    category: "pest-control",
    categoryLabel: "Pest Control",
    duration: "13:25",
  },
  // Harvesting Tutorials
  {
    id: "9",
    title: "When and How to Harvest Vegetables for Best Quality",
    description: "Learn the optimal harvest times for various vegetables to maximize flavor and nutritional value.",
    thumbnailUrl: "https://img.youtube.com/vi/UkRGO7g8mcE/maxresdefault.jpg",
    videoId: "UkRGO7g8mcE",
    category: "harvesting",
    categoryLabel: "Harvesting",
    duration: "14:50",
  },
  {
    id: "10",
    title: "Fruit Harvesting Techniques - Mangoes, Citrus & More",
    description: "Professional techniques for harvesting fruit crops to ensure quality and extend shelf life.",
    thumbnailUrl: "https://img.youtube.com/vi/bVEw8PC3p_A/maxresdefault.jpg",
    videoId: "bVEw8PC3p_A",
    category: "harvesting",
    categoryLabel: "Harvesting",
    duration: "17:30",
  },
  {
    id: "11",
    title: "Post-Harvest Handling and Storage Best Practices",
    description: "Essential post-harvest techniques to reduce crop losses and maintain produce freshness.",
    thumbnailUrl: "https://img.youtube.com/vi/dWLWB_HnD8U/maxresdefault.jpg",
    videoId: "dWLWB_HnD8U",
    category: "harvesting",
    categoryLabel: "Harvesting",
    duration: "19:15",
  },
  {
    id: "12",
    title: "Grain Harvesting and Threshing Methods",
    description: "Modern and traditional methods for harvesting and processing grain crops efficiently.",
    thumbnailUrl: "https://img.youtube.com/vi/H_CqGb_BRSQ/maxresdefault.jpg",
    videoId: "H_CqGb_BRSQ",
    category: "harvesting",
    categoryLabel: "Harvesting",
    duration: "22:00",
  },
]

export function TutorialsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTutorials =
    activeCategory === "all"
      ? tutorials
      : tutorials.filter((t) => t.category === activeCategory)

  return (
    <section id="tutorials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Video Tutorials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert-curated video content covering plantation techniques, pest prevention, 
            and harvesting methods for crops, vegetables, fruits, and spices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-primary/10 hover:text-primary"
                }
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {cat.label}
              </Button>
            )
          })}
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTutorials.map((tutorial) => (
            <VideoCard
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              thumbnailUrl={tutorial.thumbnailUrl}
              videoId={tutorial.videoId}
              category={tutorial.categoryLabel}
              duration={tutorial.duration}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Tutorials
          </Button>
        </div>
      </div>
    </section>
  )
}
