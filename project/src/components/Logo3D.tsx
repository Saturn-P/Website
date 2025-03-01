import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function Logo() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      );
    }
  });

  return (
    <Center>
      <mesh ref={meshRef}>
        <Text3D
          font="/fonts/Roboto_Regular.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          JAMSHED
          <meshStandardMaterial 
            color="#4361ee" 
            metalness={0.8}
            roughness={0.2}
            emissive="#2b4eff"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </mesh>
    </Center>
  );
}

function Logo3D() {
  return (
    <div className="h-32 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Logo />
      </Canvas>
    </div>
  );
}

export default Logo3D;