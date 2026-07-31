"use client"

import { AnimatedBackground } from "@/components/AnimatedBackground"
import { AnimatedMarquee } from "@/components/AnimatedMarquee"
import { ProfileHeader } from "@/components/ProfileHeader"
import { StatsSection } from "@/components/StatsSection"
import { LinkButtons } from "@/components/LinkButtons"
import { ISMISASection } from "@/components/ISMISASection"
import { QRCodeSection } from "@/components/QRCodeSection"
import { SaveContactButton } from "@/components/SaveContactButton"
import { ShareButton } from "@/components/ShareButton"
import { PWAInstall } from "@/components/PWAInstall"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 pb-6">
        {/* Profile */}
        <ProfileHeader />

        {/* Marquee */}
        <div className="mt-2">
          <AnimatedMarquee />
        </div>

        {/* Stats */}
        <StatsSection />

        {/* Share Button */}
        <ShareButton />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent mx-8 my-4" />

        {/* Personal Links */}
        <LinkButtons />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent mx-8 my-4" />

        {/* ISMISA */}
        <ISMISASection />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent mx-8 my-4" />

        {/* QR */}
        <QRCodeSection />

        {/* Save Contact */}
        <SaveContactButton />

        {/* PWA Install */}
        <PWAInstall />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
