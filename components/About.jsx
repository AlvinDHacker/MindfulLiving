import React from "react";

const About = () => {
  return (
    <div className="md:mt-[-80px]">
      <div className="grid md:grid-cols-2">
        <img src="img/about.png" />
        <div className="ml-4 my-5">
          <h1 className='mb-4 mt-3 text-[48px] tracking-tight font-bold text-gray-900 dark:text-white'>Our <span className="text-[#2CC5B2]">Story</span></h1>         
          <blockquote class="text-md text-gray-900 dark:text-white">
            <svg
              class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p className="mr-16">
              A dream doesn't become reality through magic, it takes sweat
              determination and hardwork. We are programmers with a dream, a
              dream to change the world one line of code at a time. With
              keyboards as our paintbrushes and screens as our canvas, we sculpt
              digital marvels that redefine possibilities. Together, we craft
              digital dreams into reality, weaving a tapestry of solutions that
              shape the future. This is our code-fueled odyssey.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;