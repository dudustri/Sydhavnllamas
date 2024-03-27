import React from "react";

import { TechBoxCanvas } from "./canvas";
import { SectionWrapper } from "../highOrderComponents";
import { technologies } from "../constants";

// TODO: Change the ball for other format and update technologies - it is not cool like this ...
// TODO: Put a sea cartoon image as background :)
const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<TechBoxCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
