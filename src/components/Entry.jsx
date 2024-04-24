import { motion } from "framer-motion";

import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { profile2 } from "../assets";

const Entry = () => {
	return (
		<section className="relative w-full h-[85vh] max-h-entry mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-8`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#fff59d] z-10" />
					<div className="w-1 sm:h-80 h-40 yellow-gradient" />
				</div>
				<div className="max-w-entry-text">
					<h1 className={`${styles.pageHeadText}`}>
						Hello there! I'm&nbsp;
						<span className="text-[#fff59d]">
							<Typewriter
								options={{
									strings: [
										"Eduardo",
										"Sfreddo",
										"Trindade",
										"Energy",
										"Software",
										"Engineer",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</h1>
					<p className={`${styles.pageSubText} mt-5 text-white-100`}>
						I like to develop backend applications and hope to contribute to
						accelerating the green transition around the world using technology
						🍃🌍🌳
					</p>
				</div>
				<div className="ml-96 ps-20 mt-2">
					<img
						src={profile2}
						className="w-[256px] h-[256px] rounded-full object-cover border-2 border-white"
					/>
				</div>
				<div className="absolute left-1/2 transform -translate-x-1/2 xs:bottom-8 bottom-4 flex justify-center items-center">
					<a href="#about">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-yellow-200 flex justify-center items-start p-2">
							<motion.div
								animate={{ y: [0, 24, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-2 h-2 rounded-full bg-yellow-200 mb-1"
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Entry;
