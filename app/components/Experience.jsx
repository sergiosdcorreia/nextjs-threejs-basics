import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Experience() {

  const cubeRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {
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
    </>
  );
}