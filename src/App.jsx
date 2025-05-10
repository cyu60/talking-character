import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import SceneBall from "./SceneBall";

export default function App() {
  const [isTalking, setIsTalking] = useState(false);
  const [activeScene, setActiveScene] = useState("face"); // "face" or "ball"
  const [selectedObject, setSelectedObject] = useState(null);

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
            marginRight: "10px",
          }}
        >
          {isTalking ? "Stop Talking" : "Start Talking"}
        </button>
        <button
          onClick={() =>
            setActiveScene(activeScene === "face" ? "ball" : "face")
          }
          style={{
            padding: "8px 16px",
            background: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          Switch to {activeScene === "face" ? "Ball" : "Face"}
        </button>

        {selectedObject && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "8px",
              marginTop: "10px",
              borderRadius: "4px",
            }}
          >
            Selected: {selectedObject}
          </div>
        )}
      </div>
      <Canvas flat shadows>
        <Suspense fallback={null}>
          {activeScene === "face" ? (
            <Scene talking={isTalking} onSelect={setSelectedObject} />
          ) : (
            <SceneBall talking={isTalking} onSelect={setSelectedObject} />
          )}
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
