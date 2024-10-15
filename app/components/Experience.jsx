export default function Experience() {
  return (
    <>
      <mesh position-x={ -2 }>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh rotation-y={Math.PI * .25} position-x={2}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
    </>
  );
}