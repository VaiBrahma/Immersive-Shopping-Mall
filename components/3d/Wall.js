import React from 'react';

export default function Wall({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[50, 30, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
