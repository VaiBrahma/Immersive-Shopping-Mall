import React from 'react'
import Model from './Model'
import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Product({position, rotation, modelPath, userData}) {
  return (

    <mesh position={position} rotation={rotation}>
      <Stage adjustCamera intensity={1}>
          <Model modelPath={modelPath}/>
      </Stage>
    </mesh>

  )
}
