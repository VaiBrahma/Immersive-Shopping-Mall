import React from 'react';
import { Text, useGLTF } from '@react-three/drei';
import Model from './Model';

export default function Gate({ position, rotation, name }) {

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[10, 10, 1]} />
        <meshStandardMaterial color="#ff0000" />

      </mesh>
      <Text position={[0, 5.5, 0]} fontSize={1} color="#ffffff" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  );
}
