'use client'

import { useEffect, useRef } from 'react'

type TrackSpec = {
  baseOpacity: number
  drift: number
  highlightWidth: number
  lineWidth: number
  phase: number
  speed: number
  yOffset: number
}

const tracks: TrackSpec[] = Array.from({ length: 9 }, (_, index) => ({
  baseOpacity: index === 3 || index === 6 ? 0.18 : 0.08 + (index % 3) * 0.025,
  drift: 0.5 + (index % 4) * 0.18,
  highlightWidth: 140 + index * 18,
  lineWidth: index === 3 || index === 6 ? 1.2 : 0.7 + (index % 2) * 0.15,
  phase: index * 83,
  speed: 0.014 + index * 0.0022,
  yOffset: 0.2 + index * 0.078,
}))

export default function HeroBackdropAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement

    if (!canvas || !parent) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let animationFrameId = 0
    let canvasWidth = 0
    let canvasHeight = 0
    let pixelRatio = 1

    const resizeCanvas = () => {
      const bounds = parent.getBoundingClientRect()

      canvasWidth = Math.max(bounds.width, 1)
      canvasHeight = Math.max(bounds.height, 1)
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(canvasWidth * pixelRatio)
      canvas.height = Math.floor(canvasHeight * pixelRatio)
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasHeight}px`

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const drawAmbientLight = (time: number) => {
      const primaryX = canvasWidth * (0.76 + Math.sin(time * 0.00008) * 0.015)
      const primaryY = canvasHeight * 0.42
      const primaryGlow = context.createRadialGradient(
        primaryX,
        primaryY,
        0,
        primaryX,
        primaryY,
        canvasWidth * 0.34,
      )

      primaryGlow.addColorStop(0, 'rgba(122, 11, 25, 0.09)')
      primaryGlow.addColorStop(0.4, 'rgba(180, 30, 30, 0.035)')
      primaryGlow.addColorStop(1, 'rgba(180, 30, 30, 0)')

      context.fillStyle = primaryGlow
      context.fillRect(0, 0, canvasWidth, canvasHeight)

      const wash = context.createLinearGradient(0, 0, canvasWidth, 0)
      wash.addColorStop(0, 'rgba(255, 255, 255, 0)')
      wash.addColorStop(0.55, 'rgba(255, 255, 255, 0)')
      wash.addColorStop(1, 'rgba(192, 57, 43, 0.03)')

      context.fillStyle = wash
      context.fillRect(0, 0, canvasWidth, canvasHeight)
    }

    const drawTrack = (track: TrackSpec, time: number) => {
      const y =
        canvasHeight * track.yOffset +
        Math.sin(time * 0.00014 + track.phase) * track.drift

      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(canvasWidth, y)

      const baseGradient = context.createLinearGradient(0, y, canvasWidth, y)
      baseGradient.addColorStop(0, 'rgba(192, 57, 43, 0)')
      baseGradient.addColorStop(0.12, `rgba(192, 57, 43, ${track.baseOpacity * 0.32})`)
      baseGradient.addColorStop(0.72, `rgba(180, 30, 30, ${track.baseOpacity * 0.54})`)
      baseGradient.addColorStop(1, `rgba(122, 11, 25, ${track.baseOpacity})`)

      context.strokeStyle = baseGradient
      context.lineWidth = track.lineWidth
      context.shadowBlur = 0
      context.stroke()

      const cycleWidth = canvasWidth + track.highlightWidth * 2
      const progress = ((time * track.speed + track.phase) % cycleWidth) - track.highlightWidth
      const highlight = context.createLinearGradient(
        progress - track.highlightWidth,
        y,
        progress + track.highlightWidth,
        y,
      )

      highlight.addColorStop(0, 'rgba(192, 57, 43, 0)')
      highlight.addColorStop(0.5, 'rgba(192, 57, 43, 0.28)')
      highlight.addColorStop(1, 'rgba(192, 57, 43, 0)')

      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(canvasWidth, y)
      context.strokeStyle = highlight
      context.lineWidth = track.lineWidth + 0.15
      context.shadowBlur = track.lineWidth > 1 ? 10 : 6
      context.shadowColor = 'rgba(192, 57, 43, 0.1)'
      context.stroke()

      if (track.lineWidth > 1) {
        const markerX = canvasWidth * 0.72 + Math.sin(time * 0.00009 + track.phase) * 10

        context.beginPath()
        context.moveTo(markerX - 18, y)
        context.lineTo(markerX + 18, y)
        context.strokeStyle = 'rgba(122, 11, 25, 0.28)'
        context.lineWidth = 1.4
        context.shadowBlur = 8
        context.shadowColor = 'rgba(122, 11, 25, 0.14)'
        context.stroke()
      }
    }

    const drawFrame = (time: number) => {
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      context.lineCap = 'round'
      context.lineJoin = 'round'

      drawAmbientLight(time)

      for (const track of tracks) {
        drawTrack(track, time)
      }

      context.shadowBlur = 0
    }

    const animate = (time: number) => {
      drawFrame(time)
      animationFrameId = window.requestAnimationFrame(animate)
    }

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(animationFrameId)
      drawFrame(window.performance.now())

      if (!mediaQuery.matches) {
        animationFrameId = window.requestAnimationFrame(animate)
      }
    }

    resizeCanvas()
    drawFrame(0)

    if (!mediaQuery.matches) {
      animationFrameId = window.requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      drawFrame(window.performance.now())
    })

    resizeObserver.observe(parent)
    mediaQuery.addEventListener('change', handleMotionPreference)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      mediaQuery.removeEventListener('change', handleMotionPreference)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 size-full pointer-events-none"
    />
  )
}
