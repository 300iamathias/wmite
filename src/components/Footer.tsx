"use client"

import { cardConfig } from "@/data/card"

export function Footer() {
  return (
    <footer className="py-6 px-4 text-center">
      <p className="text-white/20 text-[10px]">
        {cardConfig.name} • Ecuador • {new Date().getFullYear()}
      </p>
      <p className="text-white/10 text-[9px] mt-1">
        Hecho con ✦ por Jimbra
      </p>
    </footer>
  )
}
