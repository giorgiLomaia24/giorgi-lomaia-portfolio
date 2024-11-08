import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Android(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF('/android_bug.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Play the first available animation
    const firstAnimation = Object.values(actions)[0] // Get the first animation

    if (firstAnimation) {
      firstAnimation.reset().fadeIn(0.5).play()

      return () => {
        firstAnimation.fadeOut(0.5)
      }
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.477}>
          <group name="Root">
            <group name="Armature" position={[0, 0, -0.854]}>
              <primitive object={nodes.Armature_rootJoint} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Android

useGLTF.preload('/android_bug.glb')
