import {
  Tailwindcss,
  ReactJs,
  Firebase,
  Html5,
  CssThree,
  Javascript,
  Eslint,
  Prettier,
  Postgresql,
  Nodedotjs,
  Docker,
  Php,
  Amazonaws,
  Redux,
  Gatsby,
  Materialui,
  Sass,
  Express,
  Mysql,
  Googlecloud,
  Linux,
  Git,
} from '@icons-pack/react-simple-icons'
import React from 'react'

const skills = {
  frontend: [
    { name: 'HTML5', icon: <Html5 size={40} /> },
    { name: 'CSS3', icon: <CssThree size={40} /> },
    { name: 'JavaScript', icon: <Javascript size={40} /> },
    { name: 'JSX', icon: <Javascript size={40} /> },
    { name: 'React', icon: <ReactJs size={40} /> },
    { name: 'TailwindCss', icon: <Tailwindcss size={40} /> },
    { name: 'Redux', icon: <Redux size={40} /> },
    { name: 'Gatsby', icon: <Gatsby size={40} /> },
    { name: 'Material-UI', icon: <Materialui size={40} /> },
    { name: 'SASS', icon: <Sass size={40} /> },
  ],
  backend: [
    { name: 'Node.js', icon: <Nodedotjs size={40} /> },
    { name: 'Express', icon: <Express size={40} /> },
    { name: 'PHP', icon: <Php size={40} /> },
    { name: 'PostgreSQL', icon: <Postgresql size={40} /> },
    { name: 'MySQL', icon: <Mysql size={40} /> },
    { name: 'REST APIs', icon: <Javascript size={40} /> },
    { name: 'Firebase', icon: <Firebase size={40} /> },
    { name: 'BigQuery', icon: <Javascript size={40} /> },
  ],
  other: [
    { name: 'AWS', icon: <Amazonaws size={40} /> },
    { name: 'GCP', icon: <Googlecloud size={40} /> },
    { name: 'Docker', icon: <Docker size={40} /> },
    { name: 'Linux Cmds', icon: <Linux size={40} /> },
    { name: 'GIT', icon: <Git size={40} /> },
    { name: 'Oauth2.0', icon: <Javascript size={40} /> },
    { name: 'Prettier', icon: <Prettier size={40} /> },
    { name: 'Eslint', icon: <Eslint size={40} /> },
  ],
}

const TechComponent = ({ name, icon }) => {
  return (
    <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-2 border-solid rounded-3xl border-2 | cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <div className="flex flex-col align-center justify-center w-full m-auto text-center">
        {icon}
        <p className="text-gray-900 dark:text-gray-300 font-semibold">{name}</p>
      </div>
    </div>
  )
}

const TechGrid = ({ skillsType }) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
        {skills[skillsType].map(({ name, icon }) => (
          <TechComponent name={name} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default TechGrid
