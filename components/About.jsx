import React from "react";

const About = () => {
  return (
    <div id="about" className="w-[80%] mx-auto">
      <div className="md:block hidden">
        <div className="grid grid-cols-2">
          <div>
            <img src="img/meditation.svg" />
		  </div>
          <div className="my-10">
            <h1 className="ml-3 my-7 text-[38px] tracking-tight font-bold text-gray-900 dark:text-white">
              <span className="text-[#2CC5B2]">Purposeful</span> Living
            </h1>
            <blockquote className="text-md m-5 text-gray-900 dark:text-white">
              <p className="text-lg text-left">
                Purposeful living extends beyond individual fulfilment and
                encompasses a broader awareness of social responsibility and
                compassion towards others in society. It involves making
                intentional choices that not only align with personal values but
                also consider the well-being of the broader community. This
                lifestyle emphasizes sensitivity and responsibility,
                particularly towards vulnerable groups such as orphans,
                individuals with disabilities, and senior citizens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="md:hidden block my-5">
        <h1 className="mb-4 mt-3 text-[38px] text-center tracking-tight font-bold text-gray-900 dark:text-white">
          <span className="text-[#2CC5B2]">Purposeful</span> Living
        </h1>
        <img src="img/meditation.svg" />
        <blockquote className="text-md mx-5 text-gray-900 dark:text-white">
          <p className=" text-left">
            Mindful living entails consciously paying attention to the present
            moment without judgment, fostering a deeper connection with oneself
            and the surrounding environment. It involves cultivating awareness
            through practices like meditation, mindful breathing, and
            non-judgmental acceptance, leading to greater contentment and
            fulfillment in daily life.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
