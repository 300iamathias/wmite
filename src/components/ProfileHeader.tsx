"use client"

import { cardConfig } from "@/data/card"
import { Shield } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pt-14 pb-2 px-4">
      {/* Foto de perfil con glow dorado tipo José Coello */}
      <div className="relative mb-6">
        {/* Glow exterior dorado */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#FFD700]/30 via-[#FFA500]/20 to-[#FFD700]/30 blur-xl animate-pulse" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFD700]/40 via-[#FFA500]/30 to-[#FFD700]/40 blur-md" />

        {/* Círculo de foto */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-[#FFD700]/60 shadow-[0_0_60px_rgba(255,215,0,0.3),0_0_120px_rgba(255,215,0,0.1)]">
          <img 
            src={cardConfig.profileImage} 
            alt={cardConfig.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dot verde pulsante */}
        <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#0A0A0A] animate-pulse-dot z-10" />
      </div>

      {/* Nombre */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
        {cardConfig.name}
      </h1>

      {/* Title con stars */}
      <p className="text-[#FFD700] text-sm font-semibold tracking-[0.2em] mt-2 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
        {cardConfig.title}
      </p>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5 mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/25 backdrop-blur-sm">
        <Shield className="w-3.5 h-3.5 text-[#FFD700]" />
        <span className="text-[#FFD700] text-[10px] font-bold tracking-[0.2em] uppercase">Verificado</span>
      </div>

      {/* Quote con glow sutil */}
      <p className="text-white/75 italic text-sm text-center mt-5 max-w-xs leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        &ldquo;{cardConfig.quote}&rdquo;
      </p>
    </div>
  )
}
