import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';
import Floor from '@/components/3d/Floor';
import Wall from '@/components/3d/Wall';
import Gate from '@/components/3d/Gate';
import Controls from '@/components/3d/Controls';
import Roof from '@/components/3d/Roof';
import Crosshair from '@/components/3d/Crosshair'; // Make sure the path is correct
import { useRouter } from 'next/router';

function Raycaster({ onObjectFocused }) {
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster());

  useFrame(() => {
    const pointer = new THREE.Vector2(0, 0); // Center of the screen
    raycaster.current.setFromCamera(pointer, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      onObjectFocused(intersects[0].object);
    } else {
      onObjectFocused(null);
    }
  });

  return null;
}

export default function Mall() {
  const router = useRouter();
  const [focusedObject, setFocusedObject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && focusedObject) {
        const category = focusedObject.parent.children[1]._private_text;
        router.push(`/3d-mall/${category}`);

      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedObject]);

  return (
    <div className='h-screen'>
      <Crosshair />
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Floor />
        <Roof />
        <Wall position={[0, 0, -25]} />
        <Wall position={[-25, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Wall position={[25, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
        <Wall position={[0, 0, 25]} rotation={[0, Math.PI, 0]} />

        {/* Gates */}
        <Gate position={[-24, 0, 15]} rotation={[0, Math.PI / 2, 0]} name="Men's Wearings" />
        <Gate position={[-24, 0, 0]} rotation={[0, Math.PI / 2, 0]} name="Footwear" />
        <Gate position={[-24, 0, -15]} rotation={[0, Math.PI / 2, 0]} name="Electronics" />
        <Gate position={[0, 0, -24]} name="Appliances" />
        <Gate position={[24, 0, -15]} rotation={[0, -Math.PI / 2, 0]} name="Skincare" />
        <Gate position={[24, 0, 0]} rotation={[0, -Math.PI / 2, 0]} name="Jwellery" />
        <Gate position={[24, 0, 15]} rotation={[0, -Math.PI / 2, 0]} name="Women's Wearings" />

        <Controls />
        <Raycaster onObjectFocused={setFocusedObject} />
      </Canvas>
    </div>
  );
}
