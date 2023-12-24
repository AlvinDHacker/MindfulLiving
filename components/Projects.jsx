import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const data = [
    {
      img: "img/invoicify.png",
      name: "Invoicify",
      desc: "We at Invoicify mainly are a boon to all the CA's all around the world as we make their tedious and tiresome work into a simple and more efficient way for tax filing.",
      git: "https://github.com/Joyvin/Invoicify",
      colab: [
      ]
    },
    {
      img: "img/infra.jpeg",
      name: "Infra Labs",
      desc: "This project is integrated with the college servers of Fr. Conceicao Rodrigues College of Engineering",
      git: "http://infra.fragnel.edu.in:3000/",
      colab: [
      ] 
    },
    {
      img: "img/medinova.jpeg",
      name: "Medinova",
      desc: "Medinova aim to improve security at hospitals by facially scanning every person entering hospitals so any mishaps in the hospital can easily be figured out.",
      git: "https://github.com/AlvinDHacker/Error_404_BroCodeEx_Medinova/tree/alston",
      colab: [
        "img/zane.jpg",
        "img/alston.jpg",
      ] 
    },
    {
      img: "img/polydine.jpeg",
      name: "Polydine",
      desc: "Are we a calendar or some magic potion to make all your friends agree to the same date, time and place.",
      git: "https://github.com/Joyvin/Polydine",
      colab: [
      ] 
    },
    {
      img: "img/legally.jpg",
      name: "Legally Yours",
      desc: "Legally Yours, bridging the gap between intricate legal documents and everyday understanding. Our NLP-driven app simplifies complex legal content, empowering you with accessible and efficient legal insights.",
      git: "#",
      colab: [
        "img/shaun.jpeg"
      ] 
    },
    {
      img: "img/anpr.jpg",
      name: "ANPR & FRS - Kavach",
      desc: "A Number plate and Face Recognition system to assist the police force and the government integrating with the traffic CCTV",
      git: "#",
      colab: [
        "img/zane.jpg",
      ] 
    },
  ];

  return (
    <div id="projects" className="mt-5 md:mx-10 mx-3">
      <h1 className="mb-4 text-[38px] tracking-tight font-bold text-center text-gray-900 dark:text-white">
        Our <span className="text-[#2CC5B2]">Projects</span>
      </h1>
      <div className="grid md:grid-cols-3">
        {data.map((values,index) => (
          <ProjectItem
            key={index}
            name={values.name}
            img={values.img}
            desc={values.desc}
            git={values.git}
            colab={values.colab}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
