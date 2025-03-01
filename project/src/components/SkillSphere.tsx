import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface SkillProps {
  position: [number, number, number];
  children: string;
  size?: number;
}

function Skill({ position, children, size = 0.5 }: SkillProps) {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      // Make the text always face the camera
      textRef.current.lookAt(0, 0, 5);
      
      // Add a subtle floating animation
      textRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.5 + position[0] * 10) * 0.001;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={size}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Roboto_Regular.json"
    >
      {children}
    </Text>
  );
}

function SkillCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const skills = [
    { name: "Machine Learning", position: [0, 2, 0], size: 0.7 },
    { name: "Deep Learning", position: [2, 0, 1], size: 0.7 },
    { name: "Python", position: [-2, 1, 0], size: 0.6 },
    { name: "TensorFlow", position: [0, -2, 1], size: 0.6 },
    { name: "PyTorch", position: [2, -1, -1], size: 0.6 },
    { name: "scikit-learn", position: [-2, -1, 1], size: 0.6 },
    { name: "Data Visualization", position: [1, 1, 2], size: 0.5 },
    { name: "Neural Networks", position: [-1, -2, -1], size: 0.5 },
    { name: "AI Model Deployment", position: [1, -1, -2], size: 0.5 },
    { name: "Data Analysis", position: [-1, 2, -1], size: 0.5 },
    { name: "NLP", position: [2, 1, -2], size: 0.4 },
    { name: "Computer Vision", position: [-2, -2, -2], size: 0.4 },
  ];

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Skill 
          key={index} 
          position={skill.position as [number, number, number]} 
          size={skill.size}
        >
          {skill.name}
        </Skill>
      ))}
    </group>
  );
}

function SkillSphere() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillCloud />
      </Canvas>
    </div>
  );
}

export default SkillSphere;