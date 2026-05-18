"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Send,
  MessageCircle,
  Users,
  ThumbsUp,
  Clock,
  Sprout,
  Tractor,
  CloudRain,
  Bug,
} from "lucide-react";

const channels = [
  { id: 1, name: "General Discussion", icon: MessageCircle, members: 2450, unread: 12 },
  { id: 2, name: "Crop Management", icon: Sprout, members: 1820, unread: 5 },
  { id: 3, name: "Equipment & Tools", icon: Tractor, members: 980, unread: 0 },
  { id: 4, name: "Weather Updates", icon: CloudRain, members: 1560, unread: 8 },
  { id: 5, name: "Pest Control", icon: Bug, members: 1240, unread: 3 },
];

const messages = [
  {
    id: 1,
    user: "Rajesh Kumar",
    avatar: "RK",
    message: "Has anyone tried the new drip irrigation system for tomatoes? I&apos;m getting great results!",
    time: "2 min ago",
    likes: 24,
    replies: 8,
  },
  {
    id: 2,
    user: "Priya Sharma",
    avatar: "PS",
    message: "Just harvested my first organic wheat crop. The yield was 20% higher than last season. Happy to share my methods!",
    time: "15 min ago",
    likes: 56,
    replies: 15,
  },
  {
    id: 3,
    user: "Mohammed Ali",
    avatar: "MA",
    message: "Looking for advice on pest control for cotton plants. Any natural remedies that work well?",
    time: "1 hour ago",
    likes: 12,
    replies: 22,
  },
  {
    id: 4,
    user: "Anita Patel",
    avatar: "AP",
    message: "The monsoon forecast looks promising this year. Let&apos;s discuss water conservation techniques!",
    time: "3 hours ago",
    likes: 89,
    replies: 31,
  },
];

const onlineUsers = [
  { name: "Suresh M.", status: "online", avatar: "SM" },
  { name: "Lakshmi R.", status: "online", avatar: "LR" },
  { name: "Vikram S.", status: "online", avatar: "VS" },
  { name: "Meena K.", status: "away", avatar: "MK" },
  { name: "Arjun P.", status: "online", avatar: "AP" },
];

export function CommunityForum() {
  const [activeChannel, setActiveChannel] = useState(1);
  const [message, setMessage] = useState("");

  return (
    <section className="py-16 lg:py-24" id="community">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Farmer Community
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Connect with Fellow Farmers
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Join our WhatsApp-style community forum to discuss farming techniques,
            share experiences, and get real-time advice from expert farmers.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Card className="overflow-hidden border-border bg-card shadow-lg">
            <div className="grid lg:grid-cols-[280px_1fr_240px]">
              {/* Channels Sidebar */}
              <div className="border-r border-border bg-muted/30 p-4">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search channels..."
                      className="pl-9 bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  {channels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setActiveChannel(channel.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        activeChannel === channel.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      <channel.icon className="h-5 w-5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {channel.name}
                        </p>
                        <p className={`text-xs ${activeChannel === channel.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {channel.members.toLocaleString()} members
                        </p>
                      </div>
                      {channel.unread > 0 && (
                        <Badge
                          variant="secondary"
                          className={`${activeChannel === channel.id ? "bg-primary-foreground text-primary" : "bg-accent text-accent-foreground"}`}
                        >
                          {channel.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">General Discussion</h3>
                      <p className="text-xs text-muted-foreground">
                        2,450 members • 156 online
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Invite
                  </Button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto p-4" style={{ maxHeight: "400px" }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className="group">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10 shrink-0 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-medium">
                            {msg.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{msg.user}</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {msg.time}
                            </span>
                          </div>
                          <p className="mt-1 text-foreground/90 leading-relaxed">{msg.message}</p>
                          <div className="mt-2 flex items-center gap-4">
                            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                              <ThumbsUp className="h-3.5 w-3.5" />
                              {msg.likes}
                            </button>
                            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                              <MessageCircle className="h-3.5 w-3.5" />
                              {msg.replies} replies
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 bg-background"
                    />
                    <Button className="bg-primary hover:bg-primary/90">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Online Users Sidebar */}
              <div className="hidden border-l border-border bg-muted/30 p-4 lg:block">
                <h4 className="mb-4 text-sm font-semibold text-foreground">
                  Online Now
                </h4>
                <div className="space-y-3">
                  {onlineUsers.map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-8 w-8 border border-border">
                          <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                            {user.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span
                          className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card ${
                            user.status === "online" ? "bg-primary" : "bg-accent"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-foreground">{user.name}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground">
                  View all members →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
