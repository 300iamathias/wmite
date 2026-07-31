"use client"

import { cardConfig } from "@/data/card"
import { MessageCircle, Mail, Linkedin, Instagram, Music } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "message-circle": MessageCircle,
  "mail": Mail,
  "linkedin": Linkedin,
  "instagram": Instagram,
  "music": Music,
}

export function LinkButtons() {
  return (
    <div className="flex flex-col gap-3 px-5 max-w-md mx-auto">
      {cardConfig.personalLinks.map((link, i) => {
        const Icon = iconMap[link.icon] || MessageCircle
        const isPrimary = link.primary
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              isPrimary
                ? "bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:bg-[#128C7E] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)]"
                : "glass text-white hover:bg-white/[0.08] hover:border-[#FFD700]/25"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isPrimary ? "bg-white/20" : "bg-[#FFD700]/10"}`}>
              <Icon className={`w-5 h-5 ${isPrimary ? "text-white" : "text-[#FFD700]"}`} />
            </div>
            <span className="flex-1">{link.label}</span>
            <svg className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
        )
      })}
    </div>
  )
}
