"use client"

import Image from "next/image"

export function AgriBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/farm-field.jpg"
          alt="Agricultural farm field background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
      </div>
      
      {/* Decorative SVG symbols */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="agri-pattern" 
            x="0" 
            y="0" 
            width="200" 
            height="200" 
            patternUnits="userSpaceOnUse"
          >
            {/* Wheat */}
            <g transform="translate(20, 20)">
              <path 
                d="M15 40 L15 25 M15 25 C12 22 8 20 5 22 C8 20 10 16 8 12 C10 16 14 18 15 15 C16 18 20 16 22 12 C20 16 22 20 25 22 C22 20 18 22 15 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              />
            </g>
            
            {/* Tractor wheel */}
            <g transform="translate(100, 30)">
              <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <circle cx="15" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <line x1="15" y1="3" x2="15" y2="8" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <line x1="15" y1="22" x2="15" y2="27" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <line x1="3" y1="15" x2="8" y2="15" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <line x1="22" y1="15" x2="27" y2="15" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </g>
            
            {/* Sun */}
            <g transform="translate(160, 80)">
              <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="12" y1="0" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="12" y1="20" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="0" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="20" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="3.5" y1="3.5" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="17.5" y1="17.5" x2="20.5" y2="20.5" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="3.5" y1="20.5" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <line x1="17.5" y1="6.5" x2="20.5" y2="3.5" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
            </g>
            
            {/* Leaf */}
            <g transform="translate(50, 100)">
              <path 
                d="M10 30 Q10 15 20 5 Q10 15 25 25 Q10 15 10 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              />
              <path 
                d="M15 20 L18 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </g>
            
            {/* Water drop */}
            <g transform="translate(130, 130)">
              <path 
                d="M10 5 Q10 5 15 15 Q20 25 15 30 Q10 35 5 30 Q0 25 5 15 Q10 5 10 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-blue-500"
              />
            </g>
            
            {/* Seeds */}
            <g transform="translate(30, 160)">
              <ellipse cx="8" cy="5" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500" />
              <ellipse cx="18" cy="8" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500" transform="rotate(30 18 8)" />
              <ellipse cx="12" cy="15" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500" transform="rotate(-20 12 15)" />
            </g>
            
            {/* Corn */}
            <g transform="translate(170, 160)">
              <ellipse cx="10" cy="15" rx="6" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <line x1="4" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="4" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="4" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="4" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M10 3 C15 0 20 5 18 8" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <path d="M10 3 C5 0 0 5 2 8" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#agri-pattern)" />
      </svg>
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/10 to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-blue-400/10 blur-2xl" />
    </div>
  )
}
