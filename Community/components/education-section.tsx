"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Clock,
  Star,
  Play,
  Download,
  Award,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Modern Irrigation Techniques",
    category: "Water Management",
    duration: "4 hours",
    lessons: 12,
    rating: 4.8,
    students: 2340,
    level: "Beginner",
    icon: "💧",
  },
  {
    id: 2,
    title: "Organic Farming Fundamentals",
    category: "Organic Practices",
    duration: "6 hours",
    lessons: 18,
    rating: 4.9,
    students: 3120,
    level: "Intermediate",
    icon: "🌱",
  },
  {
    id: 3,
    title: "Pest & Disease Management",
    category: "Crop Protection",
    duration: "5 hours",
    lessons: 15,
    rating: 4.7,
    students: 1890,
    level: "Advanced",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "Soil Health & Nutrition",
    category: "Soil Science",
    duration: "3 hours",
    lessons: 10,
    rating: 4.6,
    students: 1560,
    level: "Beginner",
    icon: "🌍",
  },
];

const resources = [
  {
    type: "Video Tutorials",
    icon: Video,
    count: "150+",
    description: "Step-by-step visual guides",
  },
  {
    type: "PDF Guides",
    icon: FileText,
    count: "80+",
    description: "Downloadable resources",
  },
  {
    type: "Live Webinars",
    icon: Users,
    count: "Weekly",
    description: "Expert-led sessions",
  },
  {
    type: "Certifications",
    icon: Award,
    count: "12",
    description: "Recognized credentials",
  },
];

export function EducationSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24" id="education">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <GraduationCap className="mr-1 h-3 w-3" />
            Agriculture Education
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Learn & Grow Your Skills
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Access comprehensive educational resources designed to help farmers
            learn modern techniques and improve their agricultural practices.
          </p>
        </div>

        {/* Resource Stats */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="border-border bg-card text-center transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{resource.count}</p>
                <p className="text-sm font-medium text-foreground">{resource.type}</p>
                <p className="text-xs text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Featured Courses
            </h3>
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg"
              >
                <CardContent className="p-0">
                  {/* Course Header */}
                  <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-6">
                    <div className="absolute right-4 top-4">
                      <Badge
                        variant="secondary"
                        className="bg-card/90 text-foreground"
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="text-4xl">{course.icon}</div>
                    <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-foreground">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-5">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {course.category}
                    </p>
                    <h4 className="mb-3 text-lg font-semibold text-foreground line-clamp-2">
                      {course.title}
                    </h4>

                    <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {course.lessons} lessons
                      </span>
                    </div>

                    <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {course.students.toLocaleString()} students enrolled
                    </div>

                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      <Play className="h-4 w-4" />
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Support Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-primary to-primary/80">
            <CardContent className="p-8 lg:p-12">
              <div className="grid items-center gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-primary-foreground">
                    Need Expert Guidance?
                  </h3>
                  <p className="mb-4 text-primary-foreground/80 leading-relaxed">
                    Connect with agricultural experts for personalized advice on
                    your farming challenges. Get one-on-one support from
                    experienced professionals.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-primary-foreground/20 text-primary-foreground">
                      24/7 Support
                    </Badge>
                    <Badge className="bg-primary-foreground/20 text-primary-foreground">
                      Expert Consultation
                    </Badge>
                    <Badge className="bg-primary-foreground/20 text-primary-foreground">
                      Multilingual
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <Users className="h-5 w-5" />
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
