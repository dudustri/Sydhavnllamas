import React from "react";
import Tilt from "react-parallax-tilt";
import { createDomMotionComponent, motion } from "framer-motion";

import { styles } from "../styles";
import { cardTitles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../highOrderComponents";

const AboutCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "twen", 0.2 * index, 0.5)}
				className="w-full black-yellow-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-blue-brabo rounded-[20px] py-5 
          px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.2, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{cardTitles.map((card, index) => (
					<AboutCard
						index={index}
						key={card.title}
						icon={card.icon}
						{...card}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
