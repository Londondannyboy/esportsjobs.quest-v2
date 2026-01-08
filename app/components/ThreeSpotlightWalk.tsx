'use client'

/**
 * Three.js Spotlight Walk Animation
 *
 * Based on three.js examples by mrdoob (Ricardo Cabello)
 * https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_walk.html
 *
 * Model: Soldier.glb from Mixamo (https://www.mixamo.com)
 * Three.js: https://threejs.org - MIT License
 */

import { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, SpotLight, useDepthBuffer } from '@react-three/drei'
import * as THREE from 'three'

// Walking soldier with spotlight following
function WalkingSoldier() {
  const group = useRef<THREE.Group>(null)
  const spotlightRef = useRef<THREE.SpotLight>(null)
  const { scene, animations } = useGLTF('/models/Soldier.glb', true)
  const { actions, mixer } = useAnimations(animations, group)
  const [currentAction, setCurrentAction] = useState<string>('Walk')

  // Clone scene to avoid conflicts
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [clonedScene])

  // Start walking animation
  useEffect(() => {
    const walkAction = actions['Walk']
    if (walkAction) {
      walkAction.reset().fadeIn(0.5).play()
    }
    return () => {
      if (walkAction) walkAction.fadeOut(0.5)
    }
  }, [actions])

  // Animate character walking in place and spotlight following
  useFrame((state) => {
    if (group.current && spotlightRef.current) {
      // Subtle bobbing motion
      group.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime * 3) * 0.02

      // Spotlight follows character
      spotlightRef.current.target.position.copy(group.current.position)
      spotlightRef.current.target.position.y = 0
      spotlightRef.current.target.updateMatrixWorld()
    }
  })

  return (
    <>
      <group ref={group} position={[0, -1.5, 0]} scale={1.3}>
        <primitive object={clonedScene} />
      </group>

      {/* Dramatic spotlight */}
      <spotLight
        ref={spotlightRef}
        position={[3, 8, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={100}
        color="#22d3ee"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Secondary purple accent light */}
      <spotLight
        position={[-4, 6, -2]}
        angle={0.5}
        penumbra={0.8}
        intensity={50}
        color="#a855f7"
      />

      {/* Warm fill light */}
      <pointLight position={[0, 2, 4]} intensity={10} color="#ffaa44" />
    </>
  )
}

// Glowing platform
function GlowingPlatform() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <circleGeometry args={[2, 64]} />
      <meshStandardMaterial
        color="#111"
        emissive="#22d3ee"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Particle dust effect
function DustParticles({ count = 50 }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = Math.random() * 4
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.003
        if (positions[i * 3 + 1] > 4) positions[i * 3 + 1] = 0
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
        size={0.03}
        color="#22d3ee"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

// Floor grid
function FloorGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.51, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial
        color="#050510"
        wireframe
        emissive="#a855f7"
        emissiveIntensity={0.05}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

// Scene content
function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <WalkingSoldier />
      <GlowingPlatform />
      <FloorGrid />
      <DustParticles count={60} />

      {/* Fog for atmosphere */}
      <fog attach="fog" args={['#0a0a14', 5, 20]} />
    </>
  )
}

// Loading fallback
function Loader() {
  return (
    <mesh>
      <torusGeometry args={[0.5, 0.1, 16, 32]} />
      <meshBasicMaterial color="#22d3ee" wireframe />
    </mesh>
  )
}

// Main exported component
export function ThreeSpotlightWalk() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', handler)
    return () => motionQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[550px]">
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Attribution */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
        <span>3D by </span>
        <a
          href="https://threejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          three.js
        </a>
        <span> | </span>
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
