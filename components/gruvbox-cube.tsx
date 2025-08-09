"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.rotation.z += delta * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#b8bb26" 
        roughness={0.3}
        metalness={0.1}
        emissive="#98971a"
        emissiveIntensity={0.1}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="#fabd2f" linewidth={2} />
      </lineSegments>
    </mesh>
  )
}

export default function GruvboxCube() {
  return (
    <div className="w-32 h-32 mx-auto">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} color="#ebdbb2" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fabd2f" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#83a598" />
        <RotatingCube />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
