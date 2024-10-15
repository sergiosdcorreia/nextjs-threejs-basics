import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import CustomObject from './CustomObject'

export default function Experience() {

  const cubeRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {

    const angle = state.clock.elapsedTime * .5
    state.camera.position.x = Math.sin(angle) *3
    state.camera.position.z = Math.cos(angle) *3
    state.camera.lookAt(0, 0, 0)

    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta
  })

  return (
    <>
      <directionalLight position={ [ 1, 2, 3 ]} intensity={ 4.5 } />
      <ambientLight intensity={ 1.5 } />
      <group ref={ groupRef }>
        <mesh position-x={ -2 }>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh ref={ cubeRef } rotation-y={Math.PI * .25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={ -Math.PI * .5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
}