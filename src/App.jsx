import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

export default function App() {
  const [isTalking, setIsTalking] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ position: "absolute", padding: "10px", zIndex: 100 }}>
        <button
          onClick={() => setIsTalking(!isTalking)}
          style={{
            padding: "8px 16px",
            background: isTalking ? "#ff4f4f" : "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isTalking ? "Stop Talking" : "Start Talking"}
        </button>
      </div>
      <Canvas flat shadows>
        <Suspense fallback={null}>
          <Scene talking={isTalking} />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
