import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Entry = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#ffee5d] z-10" />
					<div className="w-1 sm:h-80 h-40 yellow-gradient" />
				</div>
				<div>
					<h1 className={`${styles.pageHeadText}`}>
						Hello there! I&apos;m
						<span className="text-[#ffee5d]"> Eduardo</span>
					</h1>
					<p className={`${styles.pageSubText} mt-2 text-white-100`}>
						{" "}
						I like to develop backend applications and hope to{" "}
						<br className="sm:block hidden" /> contribute to accelerating the
						green transition <br className="sm:block hidden" /> around the world
						using technology 🍃🌍🌳
					</p>
				</div>
			</div>
			<ComputersCanvas />
		</section>
	);
};

export default Entry;
