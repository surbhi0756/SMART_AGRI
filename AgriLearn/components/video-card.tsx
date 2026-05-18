"use client"

import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  title: string
  description: string
  thumbnailUrl: string
  videoId: string
  category: string
  duration: string
}

export function VideoCard({
  title,
  description,
  thumbnailUrl,
  videoId,
  category,
  duration,
}: VideoCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary text-primary-foreground text-xs font-medium">
            {category}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant="secondary" className="bg-foreground/80 text-background text-xs">
            {duration}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground text-lg leading-tight mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
