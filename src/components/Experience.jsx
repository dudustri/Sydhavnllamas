import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../highOrderComponents";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "8px solid #232631" }}
		date={experience.date}
		iconStyle={{ background: experience.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={experience.icon}
					alt={experience.companyName}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
			<p
				className="text-secondary text-[16px] font-semibold"
				style={{ margin: 0 }}
			>
				{" "}
				{experience.companyName}{" "}
			</p>
		</div>
		<ul className="mt-5 list-disc ml-5 space-y-2">
			{experience.description.map((item, index) => (
				<li key={index} className="text-white text-[14px] pl-1 tracking-wider">
					{item}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					Take a look in my career path so far...
				</p>
				<h2 className={styles.sectionHeadText}> Work Experience .</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
