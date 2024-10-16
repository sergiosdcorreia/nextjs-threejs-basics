'use client'

import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

export default function Home() {

  const cameraSettings = {
    fov: 45,
    near: .1,
    far: 200,
    position: [3, 2, 6]
  }

  return (
    <Canvas
      shadows
      camera={ cameraSettings }
    >
      <Experience />
    </Canvas>
  );
}
