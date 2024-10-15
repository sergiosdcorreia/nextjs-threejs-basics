'use client'

import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}
