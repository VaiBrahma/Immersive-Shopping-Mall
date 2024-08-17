import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';


const Model = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }
    });
  
    return <primitive ref={modelRef} object={scene} />;
};

export default Model;