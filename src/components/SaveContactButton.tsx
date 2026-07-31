"use client"

import { UserPlus } from "lucide-react"

export function SaveContactButton() {
  return (
    <div className="flex justify-center py-3">
      <a
        href="/api/vcard"
        download="wellington-mite.vcf"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#FFD700] text-xs font-semibold tracking-wide uppercase border border-[#FFD700]/25 bg-[#FFD700]/5 hover:bg-[#FFD700]/12 hover:border-[#FFD700]/45 transition-all duration-300"
      >
        <UserPlus className="w-3.5 h-3.5" />
        Guardar Contacto
      </a>
    </div>
  )
}
