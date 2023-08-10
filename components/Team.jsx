import React, { useState } from 'react'
import TeamItem from './TeamItem'
import alvin from '../assets/alvin.jpg'
import joy from '../assets/image.jpg'
import jayden from '../assets/jayden.png'
import shaun from '../assets/shaun.jpeg'

const Team = () => {
  const data = [
    {
      img: "img/alvin.jpg",
      name: 'Alvin Dsouza',
      role: 'Full stack dev',
      inst: 'https://www.instagram.com/',
      git: 'https://github.com/',
      lkdn: 'https://www.linkedin.com/',
    },
    {
      img: joy,
      name: 'Joyvin Mendonca',
      role: 'AI / ML dev',
      inst: 'https://www.instagram.com/',
      git: 'https://github.com/',
      lkdn: 'https://www.linkedin.com/',
    },
    {
      img: jayden,
      name: 'Jayden Colaco',
      role: 'Front End dev',
      inst: 'https://www.instagram.com/',
      git: 'https://github.com/',
      lkdn: 'https://www.linkedin.com/',
    },
    {
      img: shaun,
      name: 'Shaun Mendes',
      role: 'Full stack dev',
      inst: 'https://www.instagram.com/',
      git: 'https://github.com/',
      lkdn: 'https://www.linkedin.com/',
    },
  ]

  return (
    <div id='team' className='mt-10 dark'>
      <h1 className='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Meet the Team</h1>
      <div className='my-7 mx-4 grid lg:grid-cols-4 md:grid-cols-2'>
        {
          data.map((values, index) => (
            <TeamItem key={values.name} img={values.img} name={values.name} role={values.role} inst={values.inst} git={values.git} lkdn={values.lkdn} />
          ))
        }
      </div>
    </div>
  )
}

export default Team
