import React from "react";
import { Github } from "lucide-react";

const ProjectItem = ({ name, img, desc }) => {
	return (
		<div className="my-3 flex justify-center">
			<div className=" hover:shadow-2xl mt-3 mx-3 h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img className="rounded-t-lg" src={img} alt="" />
				</a>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{name}
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
