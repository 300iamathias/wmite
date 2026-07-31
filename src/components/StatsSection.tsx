"use client"

import { useEffect, useState, useRef } from "react"
import { cardConfig } from "@/data/card"

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 50
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-extrabold gold-text">
        {count}{suffix}
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <div className="flex justify-center gap-8 py-4 px-4 animate-fade-in">
      {cardConfig.stats.map((stat, i) => (
        <div key={i} className="text-center">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <div className="text-white/40 text-[9px] uppercase tracking-wider mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
