import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { cardTitles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../highOrderComponents";

const AboutCard = ({ index, title, icon, onClick }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "twen", 0.2 * index, 0.5)}
				className="w-full black-yellow-gradient p-[1px] rounded-[20px] shadow-card"
				onClick={() => onClick(index)}
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
	const [selectedCard, setSelectedCard] = useState(0);

	const titleIntro = [
		"Overview.",
		"Backend Developer.",
		"Energy Engineer.",
		"Green Transition Enthusiast.",
		"Cloud Computing and Devops.",
	];

	const presentationText = [
		"A passionate Backend Developer and Energy Engineer, currently pursuing \
an MSc in Software Design at ITU. With a keen interest in exploring the \
intricacies of new technologies, I immerse myself in the vibrant world \
of software and hardware development. My aspiration is to uncover the \
synergy between technology and sustainability, discovering how these two \
forces can work hand in hand.",

		"As a dedicated Backend Developer, I thrive on \
crafting the unseen backbone of applications, ensuring seamless data \
management and optimal performance. My passion lies in designing robust \
server-side architectures, meticulously handling databases, and building \
efficient APIs. Embracing the ever-evolving landscape of programming \
languages and frameworks, I am committed to delivering high-quality, \
scalable, and secure solutions that empower the frontend to shine.",

		"As an Energy Engineer, I am driven by the goal of \
promoting sustainable energy practices and reducing the carbon footprint \
of modern technology. My expertise lies in designing energy-efficient \
systems, optimizing energy usage, and exploring renewable energy \
sources. I believe in the transformative power of eco-conscious \
engineering, and I am dedicated to shaping a greener future through \
innovation and conscious decision-making.",

		"As a fervent Green Transition Enthusiast, I am deeply committed to \
advocating for environmental sustainability in every aspect of life. \
From personal habits to professional endeavors, I consistently strive to \
make eco-friendly choices and inspire others to do the same. Embracing \
the philosophy of sustainable living, I actively support and participate \
in initiatives that foster a harmonious coexistence with nature, \
acknowledging our responsibility to protect and preserve the planet for \
future generations.",

		"Fascinated by the dynamic \
world of Cloud Computing and DevOps, I am drawn to the transformative \
power of cloud technologies in modernizing software development and \
streamlining operations. My passion lies in orchestrating seamless \
integration, continuous deployment, and automated workflows, harnessing \
the potential of cloud platforms to create agile and scalable solutions. \
With a focus on efficiency and reliability, I aspire to unlock the full \
potential of cloud-native applications, enabling businesses to thrive in \
the digital era.",
	];

	const handleCardClick = (index) => {
		if (index + 1 === selectedCard) {
			setSelectedCard(0);
			return;
		}
		setSelectedCard(index + 1);
	};

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>{titleIntro[selectedCard]}</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.2, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				{presentationText[selectedCard]}
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{cardTitles.map((card, index) => (
					<AboutCard
						index={index}
						key={card.title}
						icon={card.icon}
						onClick={handleCardClick}
						{...card}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
