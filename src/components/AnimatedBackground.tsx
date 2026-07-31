"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient base tipo José Coello - navy oscuro con glow dorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a] via-[#0A0A0A] to-[#0A0A0A]" />

      {/* Glow dorado superior tipo José Coello */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[200px] bg-[#FFA500]/3 rounded-full blur-[80px]" />

      {/* Líneas doradas SVG onduladas tipo José Coello */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <path 
          d="M0,100 Q200,50 400,150 T800,100 T1200,150" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="1.5" 
          opacity="0.25"
          className="animate-flow1"
        />
        <path 
          d="M0,300 Q250,150 500,350 T1000,250 T1200,350" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="2" 
          opacity="0.15"
          className="animate-flow2"
        />
        <path 
          d="M0,500 Q300,350 600,550 T1000,450" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="1" 
          opacity="0.2"
          className="animate-flow3"
        />
        <path 
          d="M0,700 Q350,550 700,750 T1000,650" 
          fill="none" 
          stroke="#FFA500" 
          strokeWidth="1.5" 
          opacity="0.12"
          className="animate-flow1"
          style={{ animationDelay: "2s" }}
        />
        <path 
          d="M200,0 Q400,300 600,100 T800,50 T1000,200" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="1" 
          opacity="0.18"
          className="animate-flow4"
        />
        <path 
          d="M-100,850 Q300,700 600,900 T1100,800" 
          fill="none" 
          stroke="#FFD700" 
          strokeWidth="2" 
          opacity="0.1"
          className="animate-flow2"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Partículas doradas flotantes */}
      <div className="absolute top-[15%] left-[15%] w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 animate-float-slow" />
      <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-[#FFD700] rounded-full opacity-40 animate-float-medium" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[45%] left-[10%] w-2 h-2 bg-[#FFA500] rounded-full opacity-30 animate-float-fast" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-[#FFD700] rounded-full opacity-45 animate-float-slow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[75%] left-[25%] w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-35 animate-float-medium" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[35%] right-[35%] w-1 h-1 bg-[#FFA500] rounded-full opacity-40 animate-float-fast" style={{ animationDelay: "3s" }} />
    </div>
  )
}
