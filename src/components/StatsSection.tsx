"use client"

import { cardConfig } from "@/data/card"

export function StatsSection() {
  return (
    <div className="flex justify-center gap-6 py-4 px-4">
      {cardConfig.stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-xl font-extrabold gold-text">{stat.value}{stat.suffix}</div>
          <div className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
