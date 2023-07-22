import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Entry = () => {
	return (
		<section className="relative w-full h-screen max-h-entry mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-8`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#ffee5d] z-10" />
					<div className="w-1 sm:h-80 h-40 yellow-gradient" />
				</div>
				<div className="max-w-entry-text">
					<h1 className={`${styles.pageHeadText}`}>
						Hello there! I&apos;m
						<span className="text-[#ffee5d]"> Eduardo</span>
					</h1>
					<p className={`${styles.pageSubText} mt-2 text-white-100`}>
						I like to develop backend applications and hope to contribute to
						accelerating the green transition around the world using technology
						🍃🌍🌳
					</p>
				</div>
				<div className="responsive-div">
					<ComputersCanvas />
				</div>
				<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
					<a href="#about">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-yellow-300 flex justify-center items-start p-2">
							<motion.dev
								animate={{ y: [0, 24, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-yellow-300 mb-1"
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Entry;
