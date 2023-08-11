import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    const data = [
        {
            img: "img/invoicify.png",
            name: 'Invoicify',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://www.instagram.com/'
        },
        {
            img: "img/polydine.jpeg",
            name: 'Polydine',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://github.com/Joyvin/Polydine'
        },
        {
            img: "img/medinova.jpeg",
            name: 'Medinova',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://github.com/AlvinDHacker/Error_404_BroCodeEx_Medinova/tree/alston'
        },
    ]

    return (
        <div id="projects" className="mx-10">
            <h1 className='mb-4 text-[38px] tracking-tight font-bold text-center text-gray-900 dark:text-white'>Our <span className="text-[#2CC5B2]">Projects</span></h1>
            <div className="grid md:grid-cols-3">
                {
                    data.map((values) => (
                        <ProjectItem key={values.name} name={values.name} img={values.img} desc={values.desc} git={values.git} />
                    ))
                }


            </div>
        </div>
    );
};

export default Projects;
