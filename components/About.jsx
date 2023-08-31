import React from "react";

const About = () => {
  return (
    <div id="story" className="md:mt-[-80px]">
      <div className="md:block hidden">
        <div className="grid grid-cols-2">
          <img className="w-[80%] mx-auto" src="img/about.png" />
          <div className="my-5">
            <h1 className="mb-4 ml-3 mt-3 text-[38px] tracking-tight font-bold text-gray-900 dark:text-white">
              Our <span className="text-[#2CC5B2]">Story</span>
            </h1>
            <blockquote className="text-md mx-5 text-gray-900 dark:text-white">
              <svg
                className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p className=" text-left">
                A dream doesn&apos;t become reality through magic, it takes
                sweat determination and hardwork. We are programmers with a
                dream, a dream to change the world one line of code at a time.
                With keyboards as our paintbrushes and screens as our canvas, we
                sculpt digital marvels that redefine possibilities. Together, we
                craft digital dreams into reality, weaving a tapestry of
                solutions that shape the future. This is our code-fueled
                odyssey.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <h1 className="mb-4 ml-3 mt-3 text-[38px] text-center tracking-tight font-bold text-gray-900 dark:text-white">
          Our <span className="text-[#2CC5B2]">Story</span>
        </h1>
        <img src="img/about.png" />
        <blockquote className="text-md mx-5 text-gray-900 dark:text-white">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className=" text-left">
            A dream doesn&apos;t become reality through magic, it takes sweat
            determination and hardwork. We are programmers with a dream, a dream
            to change the world one line of code at a time. With keyboards as
            our paintbrushes and screens as our canvas, we sculpt digital
            marvels that redefine possibilities. Together, we craft digital
            dreams into reality, weaving a tapestry of solutions that shape the
            future. This is our code-fueled odyssey.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
