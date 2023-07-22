import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
	const computer = useGLTF("./computer_grass/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.2} groundColor="black" />
			<pointLight intensity={1} />

			<primitive
				object={computer.scene}
				scale={1}
				position={[0, -1, 0]}
				rotation={[-0.3, 0.1, 0.35]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [8, 6, 5], fov: 18 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={true}
					maxPolarAnle={Math.PI / 5}
					minPolarAngle={Math.PI / 5}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
