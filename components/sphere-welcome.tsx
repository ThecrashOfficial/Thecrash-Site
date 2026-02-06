"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import * as THREE from "three"

export function SphereWelcome({ onComplete }: { onComplete: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Enter" && onComplete()
    window.addEventListener("keydown", onKey)

    if (!mountRef.current) return

    /* ---------- SCENE ---------- */
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    /* ---------- PARTICLES ---------- */
    const count = window.innerWidth < 768 ? 120 : 220
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    /* ---------- RESIZE ---------- */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", onResize)

    /* ---------- ANIMATION ---------- */
    const animate = () => {
      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0003
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden">
      {/* Particle background */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* UI */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/design-mode/thesonehub-logo.jpg"
              alt="Logo"
              width={96}
              height={96}
              className="rounded-xl opacity-90"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4 animate-enter">
            Welcome to Thecrash
          </h1>

          <p className="text-neutral-400 mb-12 animate-enter delay-1">
            A quiet place to think, build, and ship meaningful work.
          </p>

          <div className="flex justify-center gap-3 animate-enter delay-2">
            <button
              onClick={onComplete}
              className="px-6 py-2.5 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition"
            >
              Enter
            </button>
            <button
              onClick={onComplete}
              className="px-6 py-2.5 border border-white/30 rounded-md hover:bg-white/5 transition"
            >
              Learn more
            </button>
          </div>

          <p className="mt-8 text-xs text-neutral-500">
            Press <span className="border px-1 rounded">Enter</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-enter {
          opacity: 0;
          transform: translateY(12px);
          animation: enter 0.8s ease forwards;
        }
        .delay-1 { animation-delay: 0.15s }
        .delay-2 { animation-delay: 0.3s }

        @keyframes enter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
