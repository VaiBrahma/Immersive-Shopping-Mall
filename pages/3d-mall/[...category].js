import { useRouter } from 'next/router';
import products from '@/public/products';
import { Canvas, useThree } from '@react-three/fiber';
import Crosshair from '@/components/3d/Crosshair';
import Controls from '@/components/3d/Controls';
import Product from '@/components/3d/Product';
import Footer from '@/components/Footer';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from "@react-three/fiber";


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

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  const thisRoomProducts = products.filter(product => product.category == category) || [];
  let varr = -25;
  const [focusedObject, setFocusedObject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && focusedObject) {
        const varr = focusedObject.parent;
        console.log(varr)

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
        {
          thisRoomProducts.map((product, index) => (
            <Product key={index} position={[0, 0.1, varr += 2]} modelPath={`/models/${product.id}.glb`} userData={product.id}/>
          ))
        }
        <Controls />
      <Raycaster onObjectFocused={setFocusedObject} />
      </Canvas>
      <Footer/>
    </div>
  );
}
