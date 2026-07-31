import type { Metadata, Viewport } from "next"
import "./globals.css"
import { cardConfig } from "@/data/card"

export const metadata: Metadata = {
  title: cardConfig.pwa.name,
  description: cardConfig.pwa.description,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon-192.png",
    shortcut: "/images/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: cardConfig.pwa.shortName,
  },
}

export const viewport: Viewport = {
  themeColor: cardConfig.pwa.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
