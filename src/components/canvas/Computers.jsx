import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
	const computer = useGLTF("./computer_grass/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.5} groundColor="black" />
			<pointLight intensity={0.3} />
			<primitive
				object={computer.scene}
				scale={1}
				position={[0, -1, 0]}
				rotation={[-0.4, 0.3, 0.4]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [8, 6, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={true}
					maxPolarAnle={Math.PI / 2}
					minPolarAngle={Math.PI / 4}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
