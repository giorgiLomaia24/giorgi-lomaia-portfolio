import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function ThreeJs(props) {
  const { nodes, materials } = useGLTF('/three.js.glb')
  const meshRef = useRef()

  // Use useFrame to rotate the model on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slowly rotate the model on the Y axis (levitating effect)
      meshRef.current.rotation.y += delta * 0.5 // Adjust rotation speed
      // Optional: Add slight bobbing up and down for levitation
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group {...props} dispose={null} scale={[0.05, 0.05, 0.05]} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        rotation={[Math.PI, 0, 0]} // Initial rotation if needed
      />
    </group>
  )
}

export default ThreeJs

useGLTF.preload('/three.js.glb')
