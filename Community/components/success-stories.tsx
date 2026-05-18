"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TrendingUp,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  Wheat,
  ArrowUp,
} from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Ramesh Yadav",
    avatar: "RY",
    location: "Punjab, India",
    crop: "Wheat & Rice",
    story:
      "Through FarmConnect, I learned about crop rotation and modern irrigation techniques. My yield increased by 45% in just two seasons. The community support was incredible!",
    achievement: "45% Yield Increase",
    beforeYield: "22 quintals/acre",
    afterYield: "32 quintals/acre",
    joined: "March 2024",
    image: "/farmer-1.jpg",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    avatar: "LD",
    location: "Karnataka, India",
    crop: "Organic Vegetables",
    story:
      "I switched to organic farming with guidance from experienced farmers here. My products now sell at premium prices, and I&apos;ve trained 20 other women farmers in my village.",
    achievement: "60% Revenue Growth",
    beforeYield: "₹1.5L/season",
    afterYield: "₹2.4L/season",
    joined: "January 2024",
    image: "/farmer-2.jpg",
  },
  {
    id: 3,
    name: "Suresh Patil",
    avatar: "SP",
    location: "Maharashtra, India",
    crop: "Cotton & Soybean",
    story:
      "The pest control tips from this community saved my entire cotton crop last year. I&apos;ve reduced pesticide costs by 40% using natural methods shared by fellow farmers.",
    achievement: "40% Cost Reduction",
    beforeYield: "15 quintals/acre",
    afterYield: "18 quintals/acre",
    joined: "June 2023",
    image: "/farmer-3.jpg",
  },
  {
    id: 4,
    name: "Anita Kumari",
    avatar: "AK",
    location: "Bihar, India",
    crop: "Mushroom Farming",
    story:
      "Started mushroom farming after learning from experts in this community. From a small room, I now have a full production unit and employ 5 people from my village.",
    achievement: "New Business Started",
    beforeYield: "₹0",
    afterYield: "₹3L/year",
    joined: "August 2023",
    image: "/farmer-4.jpg",
  },
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? successStories.length - 1 : prev - 1
    );
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="bg-secondary/50 py-16 lg:py-24" id="success-stories">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground hover:bg-accent/30">
            <Award className="mr-1 h-3 w-3" />
            Success Stories
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Real Farmers, Real Growth
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Discover how farmers across India have transformed their agricultural
            practices and achieved remarkable success through our community.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Featured Story */}
          <Card className="mb-8 overflow-hidden border-border bg-card shadow-lg">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative bg-primary/5 p-8 lg:p-12">
                  <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-4 border-primary/20">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                          {currentStory.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {currentStory.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {currentStory.location}
                        </div>
                      </div>
                    </div>

                    <Badge className="mb-4 bg-primary/10 text-primary">
                      <Wheat className="mr-1 h-3 w-3" />
                      {currentStory.crop}
                    </Badge>

                    <p className="mb-6 text-lg text-foreground/90 leading-relaxed">
                      &ldquo;{currentStory.story}&rdquo;
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Member since {currentStory.joined}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12">
                  <div className="flex h-full flex-col justify-center">
                    <div className="mb-8 text-center">
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-primary">
                          {currentStory.achievement}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="rounded-xl bg-card p-6 text-center shadow-sm">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Before
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {currentStory.beforeYield}
                        </p>
                      </div>
                      <div className="rounded-xl bg-primary p-6 text-center shadow-sm">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
                          After
                        </p>
                        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-primary-foreground">
                          <ArrowUp className="h-5 w-5" />
                          {currentStory.afterYield}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="border-border hover:bg-muted"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="border-border hover:bg-muted"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Story Thumbnails */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {successStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-xl p-4 text-left transition-all ${
                  index === currentIndex
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-muted border border-border"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback
                      className={`text-xs font-medium ${
                        index === currentIndex
                          ? "bg-primary-foreground text-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {story.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium truncate">{story.name}</span>
                </div>
                <p
                  className={`text-xs ${
                    index === currentIndex
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {story.achievement}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
