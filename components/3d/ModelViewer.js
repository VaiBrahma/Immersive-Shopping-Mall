import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import Model from './Model';



const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} contactShadow />
      <Stage environment="city" adjustCamera intensity={1}>
        <Model modelPath={modelPath} />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
