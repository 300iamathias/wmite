"use client"

import { cardConfig } from "@/data/card"

export function AnimatedMarquee() {
  const text = cardConfig.marqueeText
  return (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-black/30 backdrop-blur-sm border-y border-[#FFD700]/20">
      <div className="animate-marquee inline-block">
        <span className="text-[#FFD700] font-medium text-sm tracking-[0.2em] uppercase mx-4">
          {text}
        </span>
        <span className="text-[#FFD700] font-medium text-sm tracking-[0.2em] uppercase mx-4">
          {text}
        </span>
      </div>
    </div>
  )
}
