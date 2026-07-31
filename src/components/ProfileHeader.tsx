"use client"

import { cardConfig } from "@/data/card"
import { Shield } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pt-10 pb-2 px-4">
      {/* Foto de perfil con dot verde */}
      <div className="relative mb-5">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-[#FFD700]/40 shadow-[0_0_40px_rgba(255,215,0,0.25)]">
          <img 
            src={cardConfig.profileImage} 
            alt={cardConfig.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#0A0A0A] animate-pulse-dot" />
      </div>

      {/* Nombre */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
        {cardConfig.name}
      </h1>

      {/* Title con stars */}
      <p className="text-[#FFD700] text-sm font-medium tracking-[0.15em] mt-1.5">
        {cardConfig.title}
      </p>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#FFD700]/8 border border-[#FFD700]/20">
        <Shield className="w-3.5 h-3.5 text-[#FFD700]" />
        <span className="text-[#FFD700] text-[10px] font-bold tracking-[0.15em] uppercase">Verificado</span>
      </div>

      {/* Quote */}
      <p className="text-white/70 italic text-sm text-center mt-4 max-w-xs leading-relaxed">
        "{cardConfig.quote}"
      </p>
    </div>
  )
}
