import React, { useState } from "react";
import TeamItem from "./TeamItem";

const Team = () => {
  const data = [
    {
      img: "img/alvin.jpg",
      name: "Alvin Dsouza",
      role: "Full stack dev",
      inst: "https://www.instagram.com/the.alvin.dsouza",
      git: "https://github.com/AlvinDHacker",
      lkdn: "https://www.linkedin.com/in/alvin-dsouza-a23268263/",
    },
    {
      img: "img/joy.jpeg",
      name: "Joyvin Mendonca",
      role: "AI / ML dev",
      inst: "https://www.instagram.com/joyvinmendonca/",
      git: "https://github.com/Joyvin",
      lkdn: "https://www.linkedin.com/in/joyvinmendonca/",
    },
    {
      img: "img/jayden.png",
      name: "Jayden Colaco",
      role: "Front End dev",
      inst: "https://www.instagram.com/jaydencolaco",
      git: "https://github.com/jaydencolaco",
      lkdn: "https://www.linkedin.com/in/jayden-colaco-730637264/",
    },
    {
      img: "img/shaun.jpeg",
      name: "Shaun Mendes",
      role: "Full stack dev",
      inst: "https://www.instagram.com/shaun_mendes_01",
      git: "https://github.com/metasonic001",
      lkdn: "https://www.linkedin.com/in/shaun-mendes-2107521b0/",
    },
    {
      img: "img/zane.jpg",
      name: "Zane Fernandes",
      role: "Back End dev",
      inst: "https://www.instagram.com/zane_fernandes/",
      git: "https://github.com/ZaneFerns360/",
      lkdn: "https://www.linkedin.com/in/zane-fernandes-b46b75264/",
    },
  ];

  return (
    <div id="team" className="mt-10">
      <h1 className="mb-4 text-[38px] tracking-tight font-bold text-center text-gray-900 dark:text-white">
        Meet the <span className="text-[#2CC5B2]">Team</span>
      </h1>
      <div className="my-7 mx-4 grid lg:grid-cols-5 md:grid-cols-3">
        {data.map((values, index) => (
          <TeamItem
            key={values.name}
            img={values.img}
            name={values.name}
            role={values.role}
            inst={values.inst}
            git={values.git}
            lkdn={values.lkdn}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
