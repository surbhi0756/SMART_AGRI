import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface MentorCardProps {
  name: string
  title: string
  department: string
  specialization: string[]
  phone: string
  email: string
  location: string
  availability: string
}

export function MentorCard({
  name,
  title,
  department,
  specialization,
  phone,
  email,
  location,
  availability,
}: MentorCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0">
        <div className="h-6 bg-gradient-to-br from-primary/20 to-accent/20" />
      </CardHeader>
      <CardContent className="pt-6 pb-6 px-6">
        <div className="mb-4">
          <h3 className="font-semibold text-card-foreground text-xl">{name}</h3>
          <p className="text-primary font-medium text-sm">{title}</p>
          <p className="text-muted-foreground text-sm">{department}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {specialization.map((spec) => (
            <Badge
              key={spec}
              variant="secondary"
              className="bg-secondary text-secondary-foreground text-xs"
            >
              {spec}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-card-foreground">{phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-card-foreground">{email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-card-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{availability}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
          <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
