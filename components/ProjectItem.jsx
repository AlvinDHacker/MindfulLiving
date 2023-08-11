import React from "react";
import { Github } from "lucide-react";

const ProjectItem = ({ name, img, desc, git }) => {
  return (
    <div className="my-3">
      <div className=" hover:shadow-2xl m-3 h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
          <div className="flex mt-4 justify-between md:mt-6">
            <a
              href={git}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-900"
            >
              Know more
              <Github className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
