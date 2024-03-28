import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";
import GreenComputer from "../animated/GreenComputer";

const ComputersCanvas = () => {
	return (
		<Canvas
			//frameloop="demand"
			shadows
			camera={{ position: [8, 6, 5], fov: 18 }}
			gl={{ preserveDrawingBuffer: false }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={true}
					maxPolarAnle={Math.PI / 5}
					minPolarAngle={Math.PI / 5}
				/>
				<ambientLight />
				<directionalLight position={[-5, 5, 5]} castShadow />
				<mesh>
					<hemisphereLight intensity={0.03} groundColor="black" />
					<pointLight intensity={0.05} />
				</mesh>
				<group scale={1} position={[0, -1.2, 0]} rotation={[-0.5, 0.6, 0.45]}>
					<GreenComputer />
				</group>
			</Suspense>
		</Canvas>
	);
};

export default ComputersCanvas;
