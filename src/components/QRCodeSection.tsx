"use client"

import { useState, useEffect } from "react"
import QRCode from "qrcode"
import { cardConfig } from "@/data/card"

export function QRCodeSection() {
  const [qrUrl, setQrUrl] = useState<string>("")

  useEffect(() => {
    QRCode.toDataURL(cardConfig.qrUrl, {
      width: 160,
      margin: 2,
      color: { dark: "#1A1A2E", light: "#FFFFFF" }
    }).then(setQrUrl)
  }, [])

  return (
    <div className="py-4 px-5 max-w-xs mx-auto">
      <div className="glass rounded-2xl p-5 text-center border border-[#FFD700]/15">
        <p className="text-[#FFD700] font-bold text-xs mb-3 tracking-wider uppercase">📱 Escanea mi QR</p>
        {qrUrl ? (
          <img src={qrUrl} alt="QR Wellington Mite" className="w-32 h-32 mx-auto rounded-xl bg-white p-1.5" />
        ) : (
          <div className="w-32 h-32 mx-auto rounded-xl bg-white/10 animate-pulse" />
        )}
        <p className="text-white/30 text-[10px] mt-2 font-mono">{cardConfig.qrUrl}</p>
      </div>
    </div>
  )
}
