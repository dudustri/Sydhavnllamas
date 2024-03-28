import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { cardTitles, titleIntro, presentationText } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { ComputersCanvas } from "./canvas";

import { SectionWrapper } from "../highOrderComponents";

const AboutCard = ({ index, title, icon, onClick, selected }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "twen", 0.2 * index, 0.5)}
				className="w-full black-yellow-gradient p-[1px] rounded-[20px] shadow-card"
				onClick={() => onClick(index)}
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className={` rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col 
					${selected ? "bg-yellow-200" : "bg-blue-brabo"}`}
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3
						className={`text-[20px] font-bold text-center ${
							selected ? "text-blue-brabo" : "text-white"
						}`}
					>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	const [selectedCard, setSelectedCard] = useState(0);

	const handleCardClick = (index) => {
		if (index + 1 === selectedCard) {
			setSelectedCard(0);
			return;
		}
		setSelectedCard(index + 1);
	};

	return (
		<>
			<div className="flex flex-row items-start mt-6">
				<div>
					<motion.div variants={textVariant()}>
						<p className={styles.sectionSubText}>Introduction</p>
						<h1 className={styles.sectionHeadText}>
							{titleIntro[selectedCard]}
						</h1>
					</motion.div>

					<motion.div variants={fadeIn("", "", 0.2, 1)}>
						<div
							className={`${styles.descriptionTest} mt-4 text-secondary text-justify max-w-3xl`}
						>
							{presentationText[selectedCard]}
						</div>
					</motion.div>
				</div>
				<div>
					<motion.div variants={fadeIn("", "", 0.2, 1)}>
						<div className="responsive-div rounded-full border-0 border-dashed border-yellow-200 mt-auto ml-auto max-w-sm">
							<ComputersCanvas />
						</div>
					</motion.div>
				</div>
			</div>
			<div className="mt-10 flex flex-wrap gap-10">
				{cardTitles.map((card, index) => (
					<AboutCard
						index={index}
						key={card.title}
						icon={card.icon}
						onClick={handleCardClick}
						selected={selectedCard === index + 1}
						{...card}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
