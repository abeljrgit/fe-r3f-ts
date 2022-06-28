import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Dodecahedron from "./Dodecahedron";

function App() {
  return (
    <section className="App">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="green" position={[0, 0, 5]} />
          <Box />
          <Dodecahedron />
        </Canvas>
      </div>
    </section>
  );
}

export default App;
