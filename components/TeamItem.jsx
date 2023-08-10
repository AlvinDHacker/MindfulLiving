import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react"

const TeamItem = ({ name, img, role, inst, git, lkdn }) => {
  return (
    <div className="">
      <div className="w-full max-w-sm bg-white rounded-lg  dark:bg-transparent">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={img}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {role}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a href={inst}>
              <Instagram />
            </a>
            <a href={git}>
              <Github />
            </a>
            <a href={lkdn}>
              <Linkedin />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
