'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Animated neon grid
function NeonGrid() {
  const gridRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2
    }
  })

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 20, 10, 20]} />
      <meshBasicMaterial
        color="#22d3ee"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

// Floating particles
function Particles({ count = 30 }) {
  const ref = useRef<THREE.Points>(null)
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = Math.random() * 10 - 2
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4

    // Alternate cyan and purple
    if (i % 2 === 0) {
      colors[i * 3] = 0.13     // R (cyan)
      colors[i * 3 + 1] = 0.83 // G
      colors[i * 3 + 2] = 0.93 // B
    } else {
      colors[i * 3] = 0.66     // R (purple)
      colors[i * 3 + 1] = 0.33 // G
      colors[i * 3 + 2] = 0.97 // B
    }
  }

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.01
        if (positions[i * 3 + 1] > 8) {
          positions[i * 3 + 1] = -2
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Glowing orb
function GlowingOrb() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + 1
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={ref} position={[0, 1, -2]}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshBasicMaterial
        color="#a855f7"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

// Animated lines (like data streams)
function DataStreams() {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        mesh.position.y = ((state.clock.elapsedTime * (0.5 + i * 0.1) + i * 2) % 12) - 4
      })
    }
  })

  return (
    <group ref={ref}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[(i - 2) * 1.5, 0, -1]}>
          <boxGeometry args={[0.02, 0.5, 0.02]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export function ThreeSidebarBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 2, 2]} color="#22d3ee" intensity={2} />
        <pointLight position={[2, 0, 2]} color="#a855f7" intensity={2} />

        <NeonGrid />
        <Particles count={40} />
        <GlowingOrb />
        <DataStreams />
      </Canvas>
    </div>
  )
}
