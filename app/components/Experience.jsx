import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import {
  Environment,
  // ContactShadows,
  // MeshReflectorMaterial,
  // Float,
  // Text,
  OrbitControls,
  useHelper,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from "leva"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

export default function Experience() {

  const directionalLightRef = useRef()
  // const cubeRef = useRef()
  // const sphereRef = useRef()
  // const groupRef = useRef()

  /*
  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#4b2709',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 }
  })
  */

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [ 1, 2, 3 ] }
  })

  const { envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
    envMapHeight: { value: 5, min: 0, max: 100 },
    envMapRadius: { value: 30, min: 10, max: 1000 },
    envMapScale: { value: 160, min: 10, max: 1000 }
  })

  const model = useLoader(GLTFLoader, '/hamburger.glb')

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)

  useFrame(() => {

    // const angle = state.clock.elapsedTime * .5
    // state.camera.position.x = Math.sin(angle) *3
    // state.camera.position.z = Math.cos(angle) *3
    // state.camera.lookAt(0, 0, 0)

    // cubeRef.current.rotation.y += delta * .2
    // groupRef.current.rotation.y += delta
  })

  return (
    <>
      {/*<BakeShadows />*/}
      {/*<SoftShadows size={ 25 } samples={ 10 } focus={ 0 } />*/}
      {/*<ContactShadows
        position={ [0, 0, 0] }
        scale={ 10 }
        resolution={ 512 }
        far={ 5 }
        color={ color }
        opacity={ opacity }
        blur={ blur }
      />*/}
      <Environment
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale
        }}

        // files={ '/images/victoria_sunset_1k.hdr' }
      />
      <color args={ ['ivory'] } attach="background" />
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight
        ref={ directionalLightRef }
        position={ sunPosition }
        intensity={ 4.5 }
        castShadow
        shadow-mapSize={ [1024, 1024] }
        shadow-camera-near={ 1 }
        shadow-camera-far={ 10 }
        shadow-camera-top={ 3 }
        shadow-camera-right={ 3 }
        shadow-camera-bottom={ -3 }
        shadow-camera-left={ -3 }
      />
      <ambientLight intensity={ 1.5 } />
      {/*<Sky sunPosition= { sunPosition } />*/}
      {/*<group ref={ groupRef }>
        <PivotControls
          anchor={ [0, 0, 0] }
          depthTest={ false }
          lineWidth={ 4 }
          axisColors={ ['#9381ff', '#ff4d6d', '#7ae582'] }
          scale={ 100 }
          fixed={ true }
        >
          <mesh castShadow ref={ sphereRef } position-y={ 1 } position-x={ -2 }>
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
        <mesh castShadow ref={ cubeRef } position-y={ 1 } rotation-y={ Math.PI * .25 } position-x={2} scale={1.5}>
          <boxGeometry scale={ 1.5 } />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={ cubeRef } mode="translate" />
      </group>
      */}
      {/*
      <mesh receiveShadow position-y={ 0 } rotation-x={ -Math.PI * .5 } scale={ 10 }>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={ 512 }
          blur={ [1000, 1000] }
          mixBlur={ 1 }
          mirror={ .75 }
          color={'greenyellow'}
        />
      </mesh>
      <Float
        speed={ 2 }
        floatIntensity={ 3 }
      >
        <Text position={ [0, 2, -3] }>
          SERGIO CORREIA
          <meshNormalMaterial />
        </Text>
      </Float>
      */}
      <primitive object={ model.scene } scale={ .35 } />
    </>
  );
}