import React from 'react';

export default function Roof() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 106, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#808080" />
    </mesh>
  );
}
