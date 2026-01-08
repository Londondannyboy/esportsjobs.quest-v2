'use client'

/**
 * Three.js Career Showcase - Multiple Animated Characters
 *
 * Based on three.js examples by mrdoob (Ricardo Cabello)
 * https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_multiple.html
 *
 * Model: Soldier.glb from Mixamo (https://www.mixamo.com)
 * Three.js: https://threejs.org - MIT License
 */

import { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

// Single animated soldier - each instance loads its own model for proper animation
function SingleSoldier({
  position,
  animation,
  label,
  color,
}: {
  position: [number, number, number]
  animation: string
  label: string
  color: string
}) {
  const group = useRef<THREE.Group>(null)

  // Each soldier gets its own copy of the model
  const { scene, animations } = useGLTF('/models/Soldier.glb', true)

  // Clone the scene for this instance
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if ((child as THREE.SkinnedMesh).isSkinnedMesh) {
        const skinnedMesh = child as THREE.SkinnedMesh
        skinnedMesh.skeleton = skinnedMesh.skeleton.clone()
        skinnedMesh.bindMatrix = skinnedMesh.bindMatrix.clone()
        skinnedMesh.bindMatrixInverse = skinnedMesh.bindMatrixInverse.clone()
      }
    })
    return clone
  }, [scene])

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [clonedScene])

  // Play the specified animation
  useEffect(() => {
    if (actions[animation]) {
      actions[animation]?.reset().fadeIn(0.3).play()
    }
    return () => {
      actions[animation]?.fadeOut(0.3)
    }
  }, [actions, animation])

  return (
    <group ref={group} position={position}>
      <primitive object={clonedScene} scale={1.1} position={[0, -1.5, 0]} />

      {/* Glowing platform */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[0.8, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Floating label */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.28}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
          font="/fonts/inter-bold.woff"
        >
          {label}
        </Text>
      </Float>
    </group>
  )
}

// Particle background
function Particles({ count = 80 }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = Math.random() * 5 - 1
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.008
        if (positions[i * 3 + 1] > 4) positions[i * 3 + 1] = -1
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a855f7"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

// Neon ground grid
function NeonGrid() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.08 + Math.sin(state.clock.elapsedTime) * 0.02
    }
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[25, 15, 25, 15]} />
      <meshStandardMaterial
        color="#0a0a0f"
        wireframe
        emissive="#22d3ee"
        emissiveIntensity={0.08}
      />
    </mesh>
  )
}

// Mouse-reactive camera
function CameraRig() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseRef.current.x * 1.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.5 + mouseRef.current.y * 0.5, 0.03)
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Loading fallback
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#22d3ee" wireframe />
    </mesh>
  )
}

// Scene with all three soldiers
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 3, -2]} color="#22d3ee" intensity={3} />
      <pointLight position={[4, 3, 2]} color="#a855f7" intensity={3} />
      <pointLight position={[0, 4, 0]} color="#ffffff" intensity={0.8} />

      {/* Three soldiers with different animations */}
      <SingleSoldier
        position={[-3.5, 0, 0]}
        animation="Idle"
        label="Starting Out"
        color="#22d3ee"
      />
      <SingleSoldier
        position={[0, 0, 0.5]}
        animation="Walk"
        label="Building Skills"
        color="#a855f7"
      />
      <SingleSoldier
        position={[3.5, 0, 0]}
        animation="Run"
        label="Going Pro"
        color="#ff00aa"
      />

      <NeonGrid />
      <Particles count={60} />
      <CameraRig />
    </>
  )
}

// Main exported component
export function ThreeCareerShowcase() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', handler)
    return () => motionQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Attribution */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
        <span>3D powered by </span>
        <a
          href="https://threejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          three.js
        </a>
        <span> | Model from </span>
        <a
          href="https://www.mixamo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          Mixamo
        </a>
      </div>
    </div>
  )
}
