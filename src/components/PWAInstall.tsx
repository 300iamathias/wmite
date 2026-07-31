"use client"

import { useState, useEffect } from "react"
import { Plus, Download } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detectar iOS
    const userAgent = window.navigator.userAgent.toLowerCase()
    setIsIOS(/iphone|ipad|ipod/.test(userAgent))

    // Detectar si ya está instalada
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      setDeferredPrompt(null)
    }
  }

  if (isInstalled) return null

  // En iOS mostrar instrucciones
  if (isIOS) {
    return (
      <div className="px-5 max-w-md mx-auto animate-fade-in">
        <div className="glass rounded-xl p-3 text-center border border-white/5">
          <p className="text-white/40 text-[10px]">
            📱 Toca <span className="inline-flex items-center mx-1"><Share2Icon /></span> y luego &quot;Agregar a Inicio&quot;
          </p>
        </div>
      </div>
    )
  }

  // En Android/Chrome mostrar botón
  if (!deferredPrompt) return null

  return (
    <div className="flex justify-center py-2 animate-fade-in">
      <button
        onClick={handleInstall}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 hover:border-[#FFD700]/20 hover:text-[#FFD700] transition-all duration-300"
      >
        <Plus className="w-3.5 h-3.5" />
        Agregar a Inicio
      </button>
    </div>
  )
}

function Share2Icon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  )
}
