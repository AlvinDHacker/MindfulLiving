import React from "react";
import { Instagram, Github, Linkedin, Dribbble, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="dark">
      <footer className="bg-slate-200 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="img/logobg.png"
                  className="h-10 mr-3"
                  alt="TechTietans Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tech TieTans
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="https://flowbite.com/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href='#'>
                      <Instagram />
                    </a>
                    <a href='#'>
                      <Github />
                    </a>
                    <a href='#'>
                      <Linkedin />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Tech Tietans™
              </a>
            </span>
            <div className="text-gray-500 dark:text-gray-400 font-medium flex space-x-5 md:mt-0 mt-3 sm:justify-center sm:mt-0">
              <Github size={20}/>
              <Linkedin size={20}/>
              <Instagram size={20}/>
              <Dribbble size={20}/>
              <Facebook size={20}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
