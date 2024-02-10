import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	const data = [
		{
			img: "img/values.svg",
			name: "Clarifying Values",
			desc: "Identifying and understanding personal values that not only guide individual decisions but also reflect a commitment to compassion and social responsibility.",
		},
		{
			img: "img/goals.svg",
			name: "Setting Meaningful Goals",
			desc: "Establishing clear and meaningful goals that not only contribute to personal growth but also address the well-being of others in the community.",
		},
		{
			img: "img/presence.svg",
			name: "Mindfulness and Presence",
			desc: "Being present in the moment and actively seeking ways to contribute positively to the lives of others, fostering a sense of empathy and understanding."
		},
		// {
		// 	img: "img/balance.svg",
		// 	name: "Balancing Priorities",
		// 	desc: "Striving to strike a balance between personal aspirations and the well-being of the community, including marginalized groups like orphans, individuals with disabilities, and senior citizens.",
		// },
		{
			img: "img/contribute.svg",
			name: "Contributing to Others",
			desc: "Actively seeking ways to make a positive impact on society, whether through volunteer work, advocacy, or initiatives that benefit vulnerable populations.",
		},
		{
			img: "img/Growth.svg",
			name: "Continuous Learning and Growth",
			desc: "Embracing opportunities for learning and personal development with a focus on how these efforts can be utilized to contribute to the welfare of others.",
		},
		{
			img: "img/authentic.svg",
			name: "Authenticity",
			desc: "Being true to oneself includes recognizing the interconnectedness of all individuals in society and striving to create a positive impact through authentic actions and choices.",
		},
		{
			img: "img/responsible.svg",
			name: "Sensitivity and Responsibility",
			desc: "Demonstrating sensitivity to the needs of others, particularly those who may be marginalized or vulnerable, and taking responsibility to contribute towards their well-being.",
		},
		{
			img: "img/resilience.svg",
			name: "Resilience",
			desc: "Developing resilience not only for personal challenges but also to advocate for and support those who may face societal barriers or difficulties.",
		},
	];

	return (
		<div id="principles" className="mt-5 md:mx-10 mx-3">
			<h1 className="mb-4 text-[38px] tracking-tight font-bold text-center text-gray-900 dark:text-white">
				Our <span className="text-[#2CC5B2]">Principles</span>
			</h1>
			<div className=" md:w-[90%] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1">
				{data.map((values, index) => (
					<ProjectItem
						key={index}
						name={values.name}
						img={values.img}
						desc={values.desc}
						git={values.git}
						colab={values.colab}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
