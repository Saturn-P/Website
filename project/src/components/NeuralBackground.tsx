import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points for neural network visualization
function generateRandomPoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    points[i3] = (Math.random() - 0.5) * radius;
    points[i3 + 1] = (Math.random() - 0.5) * radius;
    points[i3 + 2] = (Math.random() - 0.5) * radius;
  }
  return points;
}

function NeuralPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const pointsData = React.useMemo(() => generateRandomPoints(2000, 20), []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} positions={pointsData} stride={3}>
      <PointMaterial
        transparent
        color="#8a9efc"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function NeuralBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <NeuralPoints />
      </Canvas>
    </div>
  );
}

export default NeuralBackground;