import { MentorCard } from "@/components/mentor-card"
import { Shield } from "lucide-react"

const mentors = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    title: "Senior Agricultural Officer",
    department: "Ministry of Agriculture & Farmers Welfare",
    specialization: ["Crop Science", "Soil Health", "Irrigation"],
    phone: "+91 1800-XXX-XXXX",
    email: "r.kumar@agriculture.gov.in",
    location: "New Delhi, India",
    availability: "Mon-Fri, 9:00 AM - 5:00 PM",
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    title: "District Horticulture Officer",
    department: "State Department of Horticulture",
    specialization: ["Fruit Cultivation", "Organic Farming", "Spices"],
    phone: "+91 1800-XXX-XXXX",
    email: "p.sharma@horticulture.gov.in",
    location: "Bangalore, Karnataka",
    availability: "Mon-Sat, 10:00 AM - 4:00 PM",
  },
  {
    id: "3",
    name: "Mr. Suresh Patel",
    title: "Plant Protection Advisor",
    department: "Central Integrated Pest Management Centre",
    specialization: ["Pest Management", "Disease Control", "Bio-pesticides"],
    phone: "+91 1800-XXX-XXXX",
    email: "s.patel@ipm.gov.in",
    location: "Ahmedabad, Gujarat",
    availability: "Mon-Fri, 9:30 AM - 5:30 PM",
  },
  {
    id: "4",
    name: "Dr. Lakshmi Devi",
    title: "Extension Specialist",
    department: "Krishi Vigyan Kendra (KVK)",
    specialization: ["Vegetable Cultivation", "Women in Agriculture", "Training"],
    phone: "+91 1800-XXX-XXXX",
    email: "l.devi@kvk.icar.gov.in",
    location: "Hyderabad, Telangana",
    availability: "Mon-Sat, 9:00 AM - 6:00 PM",
  },
  {
    id: "5",
    name: "Mr. Arun Singh",
    title: "Agricultural Development Officer",
    department: "National Bank for Agriculture (NABARD)",
    specialization: ["Farm Finance", "Subsidies", "Government Schemes"],
    phone: "+91 1800-XXX-XXXX",
    email: "a.singh@nabard.org",
    location: "Mumbai, Maharashtra",
    availability: "Mon-Fri, 10:00 AM - 5:00 PM",
  },
  {
    id: "6",
    name: "Dr. Meena Kumari",
    title: "Chief Scientist",
    department: "Indian Council of Agricultural Research (ICAR)",
    specialization: ["Research & Development", "Seed Technology", "Climate Adaptation"],
    phone: "+91 1800-XXX-XXXX",
    email: "m.kumari@icar.gov.in",
    location: "Pusa, New Delhi",
    availability: "Mon-Fri, 9:00 AM - 4:30 PM",
  },
]

export function MentorsSection() {
  return (
    <section id="mentors" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Official Government Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Mentors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with certified government agricultural officers and experts 
            for official guidance, subsidies information, and technical support.
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              title={mentor.title}
              department={mentor.department}
              specialization={mentor.specialization}
              phone={mentor.phone}
              email={mentor.email}
              location={mentor.location}
              availability={mentor.availability}
            />
          ))}
        </div>

        {/* Helpline Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">
            Kisan Call Center
          </h3>
          <p className="text-primary-foreground/90 mb-4">
            24/7 toll-free helpline for all your agricultural queries
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground text-primary font-bold text-xl">
            📞 1800-180-1551
          </div>
          <p className="text-primary-foreground/80 text-sm mt-3">
            Available in 22 local languages
          </p>
        </div>
      </div>
    </section>
  )
}
