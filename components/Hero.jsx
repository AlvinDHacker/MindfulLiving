import React from "react";
import Glitch from "./Glitch";
import Fireball from "./Fireball";

const Hero = () => {
  return (
    <div id="home" className="h-screen flex items-center bg-grad">
      <div className="flex justify-around w-full">
        <div className="pt-5">
          <h1 className="tech-head mt-5 mb-2">Tech</h1>
          <h1 className="tech-head"><span className="tie-head">Tie</span>tans<span className="ml-2 colored-exclamation">!</span></h1>
          <Glitch />
        </div>
        <div className=""><Fireball /></div>
      </div>
    </div>
  );
};

export default Hero;
