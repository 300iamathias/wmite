"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A]" />

      {/* Líneas doradas SVG animadas */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <path 
          d="M0,200 Q250,100 500,300 T1000,200" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="2" 
          opacity="0.3"
          className="animate-flow1"
        />
        <path 
          d="M0,500 Q300,300 600,600 T1000,400" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="3" 
          opacity="0.2"
          className="animate-flow2"
        />
        <path 
          d="M0,700 Q400,500 700,800 T1000,600" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1" 
          opacity="0.1"
          className="animate-flow3"
        />
        <path 
          d="M200,0 Q400,400 600,200 T800,1000" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="1.5" 
          opacity="0.15"
          className="animate-flow4"
        />
        <path 
          d="M100,800 Q400,600 700,900 T900,500" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="1" 
          opacity="0.25"
          className="animate-flow1"
        />
        <path 
          d="M-50,350 Q200,150 500,450 T1050,250" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="2.5" 
          opacity="0.15"
          className="animate-flow2"
        />
      </svg>

      {/* Partículas doradas sutiles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-[#FFD700] rounded-full opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-[#FFD700] rounded-full opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
    </div>
  )
}
