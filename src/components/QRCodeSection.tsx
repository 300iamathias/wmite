"use client"

import { useState, useEffect, useRef } from "react"
import QRCode from "qrcode"
import { cardConfig } from "@/data/card"
import { Download } from "lucide-react"

export function QRCodeSection() {
  const [qrUrl, setQrUrl] = useState<string>("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    QRCode.toDataURL(cardConfig.qrUrl, {
      width: 200,
      margin: 2,
      color: { dark: "#1A1A2E", light: "#FFFFFF" }
    }).then(setQrUrl)
  }, [])

  // También generar en canvas para descargar
  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, cardConfig.qrUrl, {
        width: 400,
        margin: 2,
        color: { dark: "#1A1A2E", light: "#FFFFFF" }
      })
    }
  }, [])

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = "wellington-mite-qr.png"
      link.href = canvasRef.current.toDataURL("image/png")
      link.click()
    }
  }

  return (
    <div className="py-4 px-5 max-w-xs mx-auto animate-fade-in">
      <div className="glass rounded-2xl p-5 text-center border border-[#FFD700]/15">
        <p className="text-[#FFD700] font-bold text-xs mb-3 tracking-wider uppercase">📱 Escanea mi QR</p>
        {qrUrl ? (
          <img src={qrUrl} alt="QR Wellington Mite" className="w-32 h-32 mx-auto rounded-xl bg-white p-1.5" />
        ) : (
          <div className="w-32 h-32 mx-auto rounded-xl bg-white/10 animate-pulse" />
        )}
        <p className="text-white/30 text-[10px] mt-2 font-mono">{cardConfig.qrUrl}</p>

        {/* Botón descargar QR */}
        <button
          onClick={downloadQR}
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/25 text-[#FFD700] text-xs font-medium hover:bg-[#FFD700]/20 transition-all duration-300"
        >
          <Download className="w-3.5 h-3.5" />
          Descargar QR
        </button>

        {/* Canvas oculto para descarga */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  )
}
