import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const TechBox = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={3} rotationIntensity={0.3} floatIntensity={2}>
			<ambientLight intensity={0.2} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<boxGeometry args={[1.5, 1.5, 0.3, 7, 7]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 0]}
					rotation={[2 * Math.PI, 0, 0]}
					scale={1.4}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const TechBoxCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="always"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={true} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default TechBoxCanvas;
