"use client"

import { cardConfig } from "@/data/card"

export function Footer() {
  return (
    <footer className="py-6 px-4 text-center">
      <p className="text-white/20 text-[10px]">
        {cardConfig.name} • Ecuador • {new Date().getFullYear()}
      </p>
      <a 
        href="https://jimbra.net" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/10 text-[9px] mt-1 inline-block hover:text-[#FFD700]/40 transition-colors duration-300"
      >
        Desarrollado por <span className="text-[#FFD700]/20 hover:text-[#FFD700]/50 transition-colors">Jimbra</span>
      </a>
    </footer>
  )
}
