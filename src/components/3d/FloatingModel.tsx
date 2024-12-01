import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useSpring, animated } from '@react-spring/three';

const FloatingModel = () => {
  const meshRef = useRef<Mesh>(null);
  const [springs] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <animated.mesh ref={meshRef} scale={springs.scale}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial
        color="#4299e1"
        wireframe
        transparent
        opacity={0.6}
        emissive="#2563eb"
        emissiveIntensity={0.5}
      />
    </animated.mesh>
  );
};

export default FloatingModel;