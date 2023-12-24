import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5'>
        My Projects
      </h1>
      <h2 className='text-[20px] text-white font-light text-transparent bg-clip-text mb-5'>Check out the Souce code for all these projects at my GitHub 🥂</h2>
      <div className='h-full w-full  flex-col md:flex-row gap-10 px-10 grid grid-cols-3 '>
        <ProjectCard
          src='/tocken.png'
          title='Tocken X Full Stack App'
          description='Tocken X is a cryptocurrency market tracking web application. This project is currently in its beta phase, with limited functionalities implemented. '
          link='https://tocken-x.netlify.app/'
        />
        <ProjectCard
          src='/framerWeb.png'
          title='Interactive Website Framer'
          description='This project exemplifies Framer Motion integration within a React app using Vite for seamless animation.And parallax effects.'
          link='https://framer-motions-vite.netlify.app/'
        />
        <ProjectCard
          src='/bank.png'
          title='Bankist App'
          description='The JavaScript Bankist Banking App allows users to manage their finances conveniently.  '
          link='https://zoro-diablo.github.io/Js-Bankist-Banking-App/'
        />
        <ProjectCard
          src='/dash.png'
          title='Firebase Dashboard'
          description='The Full Stack Dashboard employs React, Firebase, Sass, Recharts, and Material-UI, offering dynamic, responsive data visualization.  '
          link='https://z-admin-dash.netlify.app/'
        />
        <ProjectCard
          src='/mapty.png'
          title='Mapty App'
          description='JavaScript-Mapty utilizes Leaflet and the Geolocation API to log diverse workout activities on an interactive map.  '
          link='https://zoro-diablo.github.io/Js-Mapty/'
        />
        <ProjectCard
          src='/cloud.png'
          title='Cloud Storage App'
          description=' This website showcases the power of cloud computing and demonstrates the versatility of React and Tailwind CSS frameworks.  '
          link='https://cloud-react-tailwind-app.netlify.app/'
        />
        <ProjectCard
          src='/money.png'
          title='Ewallet App'
          description=' The JavaScript E-wallet App, a secure tool, enables users to manage finances, make transactions, and monitor expenses.  '
          link='https://zoro-diablo.github.io/Js-eWallet/'
        />
        <ProjectCard
          src='/dice.png'
          title='Dice Game App'
          description=' Enjoy the JavaScript Dice Game: compete against the computer, aiming to be the first to score 100!  '
          link='https://zoro-diablo.github.io/Js-Dice/'
        />
        <ProjectCard
          src='/number.png'
          title='Guess my Number'
          description=' 
Explore the JavaScript Game (Guess my Number). A simple, engaging guessing game crafted with JavaScript technology.  '
          link='https://zoro-diablo.github.io/Js-Guess_my_Number/'
        />
      </div>
    </div>
  )
}

export default Projects
