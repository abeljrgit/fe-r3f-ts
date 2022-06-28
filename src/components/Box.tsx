import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box() {
  const myMesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = Math.sin(a);
    myMesh.current.position.y = 1 * Math.sin(a * 2);
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default Box;
