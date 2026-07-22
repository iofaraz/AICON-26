'use client'

import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Icosahedron, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const GOLD = '#f4d35e'
const CRIMSON = '#8b0000'

/* Central faceted core: solid inner sphere + gold wireframe shell */
function Core() {
  const wire = useRef<THREE.Mesh>(null)
  const glow = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (wire.current) {
      wire.current.rotation.y += delta * 0.18
      wire.current.rotation.x += delta * 0.06
    }
    if (glow.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03
      glow.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      {/* inner emissive sphere */}
      <Sphere ref={glow} args={[1.05, 48, 48]}>
        <meshStandardMaterial
          color="#0b2d9c"
          emissive={GOLD}
          emissiveIntensity={0.18}
          roughness={0.35}
          metalness={0.6}
        />
      </Sphere>
      {/* gold wireframe shell */}
      <Icosahedron ref={wire} args={[1.55, 2]}>
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.55} />
      </Icosahedron>
    </group>
  )
}

/* Orbiting neural nodes on tilted rings */
function OrbitRing({
  radius,
  count,
  speed,
  tilt,
  color,
}: {
  radius: number
  count: number
  speed: number
  tilt: number
  color: string
}) {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * speed
  })
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2
        return [Math.cos(a) * radius, Math.sin(a) * radius, 0] as const
      }),
    [radius, count],
  )
  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={group}>
        {nodes.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color={color} />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 8, 120]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  )
}

/* Ambient particle cloud */
function Particles({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={GOLD}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/* Subtle parallax tied to pointer position */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()
  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y += (pointer.x * 0.4 - group.current.rotation.y) * 0.04
    group.current.rotation.x += (-pointer.y * 0.3 - group.current.rotation.x) * 0.04
  })
  return <group ref={group}>{children}</group>
}

export function NeuralCore() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color={GOLD} />
      <pointLight position={[-5, -3, -2]} intensity={25} color={CRIMSON} />
      <Suspense fallback={null}>
        <ParallaxRig>
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
            <Core />
          </Float>
          <OrbitRing radius={2.3} count={12} speed={0.25} tilt={1.1} color={GOLD} />
          <OrbitRing radius={2.9} count={8} speed={-0.18} tilt={-0.6} color="#ffffff" />
          <Particles />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  )
}
