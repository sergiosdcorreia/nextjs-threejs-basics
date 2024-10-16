import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Text, Html, PivotControls, TransformControls, OrbitControls  } from '@react-three/drei'
import { MeshNormalMaterial } from "three"

export default function Experience() {

  const cubeRef = useRef()
  const sphereRef = useRef()
  const groupRef = useRef()

  useFrame(() => {

    // const angle = state.clock.elapsedTime * .5
    // state.camera.position.x = Math.sin(angle) *3
    // state.camera.position.z = Math.cos(angle) *3
    // state.camera.lookAt(0, 0, 0)

    // cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
      <ambientLight intensity={ 1.5 } />
      <group ref={ groupRef }>
        <PivotControls
          anchor={ [0, 0, 0] }
          depthTest={ false }
          lineWidth={ 4 }
          axisColors={ ['#9381ff', '#ff4d6d', '#7ae582'] }
          scale={ 100 }
          fixed={ true }
        >
          <mesh ref={ sphereRef } position-x={ -2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={ [1.5, 1, 0] }
              wrapperClass="label"
              center
              distanceFactor={ 6 }
              occlude={ [ sphereRef, cubeRef ] }
            >
              Sergio Correia
            </Html>
          </mesh>
        </PivotControls>
        <mesh ref={ cubeRef } rotation-y={ Math.PI * .25 } position-x={2} scale={1.5}>
          <boxGeometry scale={ 1.5 } />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={ cubeRef } mode="translate" />
      </group>
      <mesh position-y={ -1 } rotation-x={ -Math.PI * .5 } scale={ 10 }>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Text position={ [0, 2, -3] }>
        SERGIO CORREIA
        <meshNormalMaterial />
      </Text>
    </>
  );
}