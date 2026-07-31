"use client"

import { useState, useEffect } from "react"
import { Share2, Check } from "lucide-react"

export function ShareButton() {
  const [canShare, setCanShare] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: "Wellington Mite - Ingeniero & Experto en Ventas",
      text: "La pasión es la clave del éxito. Conecta con Wellington Mite.",
      url: "https://wmite.jimbra.net",
    }

    if (canShare) {
      try {
        await navigator.share(shareData)
      } catch {
        // Usuario canceló
      }
    } else {
      // Fallback: copiar al portapapeles
      try {
        await navigator.clipboard.writeText(`${shareData.title}
${shareData.text}
${shareData.url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // Fallback final
        const textArea = document.createElement("textarea")
        textArea.value = `${shareData.title}
${shareData.text}
${shareData.url}`
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  return (
    <div className="flex justify-center py-2 animate-fade-in">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD700]/15 to-[#FFA500]/10 border border-[#FFD700]/25 text-[#FFD700] text-sm font-semibold hover:from-[#FFD700]/25 hover:to-[#FFA500]/20 hover:border-[#FFD700]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            ¡Copiado!
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4" />
            Compartir Tarjeta
          </>
        )}
      </button>
    </div>
  )
}
