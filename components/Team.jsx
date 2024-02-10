import React, { useState } from "react";
import TeamItem from "./TeamItem";

const Team = () => {
  const data = [
    {
      img: "img/joy.jpeg",
      name: "Joyvin Mendonca",
      role: "AI / ML dev",
      inst: "https://www.instagram.com/joyvinmendonca/",
      git: "https://github.com/Joyvin",
      lkdn: "https://www.linkedin.com/in/joyvinmendonca/",
      web: "https://joyme.vercel.app",
    },
    {
      img: "img/alvin.jpg",
      name: "Alvin Dsouza",
      role: "Full stack dev",
      inst: "https://www.instagram.com/the.alvin.dsouza",
      git: "https://github.com/AlvinDHacker",
      lkdn: "https://www.linkedin.com/in/alvin-dsouza-a23268263/",
      web: "#",
    },
    {
      img: "img/jayden.png",
      name: "Jayden Colaco",
      role: "Front End dev",
      inst: "https://www.instagram.com/jaydencolaco",
      git: "https://github.com/jaydencolaco",
      lkdn: "https://www.linkedin.com/in/jayden-colaco-730637264/",
      web: "#",
    },
    // {
    //   img: "img/shaun.jpeg",
    //   name: "Shaun Mendes",
    //   role: "Full stack dev",
    //   inst: "https://www.instagram.com/shaun_mendes_01",
    //   git: "https://github.com/metasonic001",
    //   lkdn: "https://www.linkedin.com/in/shaun-mendes-2107521b0/",
    // },
    {
      img: "img/zane.jpg",
      name: "Zane Fernandes",
      role: "Back End dev",
      inst: "https://www.instagram.com/zane_fernandes/",
      git: "https://github.com/ZaneFerns360/",
      lkdn: "https://www.linkedin.com/in/zane-fernandes-b46b75264/",
      web: "#",
    },
  ];

  return (
    <div id="resources" className="w-[80%] mx-auto">
      <p className="text-lg text-center my-10">
        Purposeful living, with a focus on social sensitivity and
        responsibility, encourages individuals to integrate their personal goals
        with a commitment to fostering a more compassionate, inclusive, and
        supportive community for everyone, especially those who are in need.
      </p>
    </div>
  );
};

export default Team;
