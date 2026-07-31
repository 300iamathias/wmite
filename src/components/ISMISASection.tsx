"use client"

import { cardConfig } from "@/data/card"
import { Globe, Facebook, Instagram, Music } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  facebook: Facebook,
  instagram: Instagram,
  music: Music,
}

const colorMap: Record<string, string> = {
  globe: "text-[#FFD700] bg-[#FFD700]/10 border-[#FFD700]/20 hover:border-[#FFD700]/40 hover:bg-[#FFD700]/15",
  facebook: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15",
  instagram: "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/15",
  music: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/15",
}

export function ISMISASection() {
  const ismisa = cardConfig.ismisa

  return (
    <div className="py-8 px-5 max-w-md mx-auto">
      {/* Header ISMISA */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 border border-[#FFD700]/20 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          🎤
        </div>
        <div>
          <h3 className="text-white font-bold text-base">{ismisa.name}</h3>
          <p className="text-[#FFD700]/70 text-[11px] tracking-wider uppercase">{ismisa.tagline}</p>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-white/50 text-xs leading-relaxed mb-5 text-center">
        {ismisa.description}
      </p>

      {/* Links ISMISA */}
      <div className="flex flex-col gap-2.5">
        {ismisa.links.map((link, i) => {
          const Icon = iconMap[link.icon] || Globe
          const colorClass = colorMap[link.icon] || colorMap.globe
          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${colorClass}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1">{link.label}</span>
              <svg className="w-4 h-4 opacity-40 group-hover:opacity-70 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          )
        })}
      </div>
    </div>
  )
}
