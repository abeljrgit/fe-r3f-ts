import * as THREE from "three";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import Dodecahedron from "./Dodecahedron";
import Sphere from "./Sphere";

function ThreeUX() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="green" position={[0, 0, 5]} />
        <Dodecahedron />
        <Sphere />
      </Canvas>
    </div>
  );
}
export default ThreeUX;
