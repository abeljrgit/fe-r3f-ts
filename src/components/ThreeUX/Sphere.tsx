import * as THREE from "three";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function Sphere() {
  const myMesh = useRef<THREE.Mesh>(null!);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 5;
    myMesh.current.rotation.x = 2 * a;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 6 * -Math.sin(a);
    myMesh.current.position.y = 1 * -Math.cos(a);
  });

  useEffect(() => {
    if (isHovered === true) {
      gsap.to(myMesh.current.scale, { x: 2, y: 2, z: 2 });
    } else {
      gsap.to(myMesh.current.scale, { x: 1, y: 1, z: 1 });
    }
  }, [isHovered]);

  return (
    <mesh
      ref={myMesh}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      <sphereGeometry args={[0.5, 15, 15]} />
      <meshNormalMaterial wireframe={true} />
    </mesh>
  );
}

export default Sphere;
