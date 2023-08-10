import React from "react";
import logo from "../assets/image.jpg"
import inv from '../assets/invoicify.png'
import ProjectItem from "./ProjectItem";

const Projects = () => {
    const data = [
        {
            img: inv,
            name: 'Invoicify',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://www.instagram.com/'
        },
        {
            img: logo,
            name: 'Polydine',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://github.com/Joyvin/Polydine'
        },
        {
            img: logo,
            name: 'Medinova',
            desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            git: 'https://github.com/AlvinDHacker/Error_404_BroCodeEx_Medinova/tree/alston'
        },
    ]

    return (
        <div id="projects" className="mx-10 dark">
            <h1 className='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Our Projects</h1>
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
