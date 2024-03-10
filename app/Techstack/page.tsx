import React, { ReactElement } from 'react'

export default function Techstack() {
  return (
    <div className="mt-36 md:mt-48 mb-36 md:flex md:justify-center">
    <div className="w-full lg:w-3/4 max-w-6xl md:p-2">

    <section className='p-4'>

        {/* HEADING  */}
        <div className='text-center ipadmini:text-left'>
          <h1 className='font-extrabold text-2xl ipadmini:text-4xl '>Tech Stack</h1>
          <p>The programming languages, dev tools, and apps I use</p>
          <p className='text-xs text-darkGray mt-4'>{"Always looking to add more to my arsenal! :)"}</p>
        </div>

        <section className='mt-10'>
        <h1 className='font-bold'>Development</h1>
          <div className='p-2 ipadmini:p-10 mt-2 grid gap-4 grid-cols-2 md:grid-cols-3 w-full justify-center'>
                {development.map(each=> {
                  return(
                    <TechCard key={each.title} {...each} />
                  )
                })}
          </div>
        </section>

        <section className='mt-4'>
        <h1 className='font-bold'>Other Tools</h1>
          <div className='p-2 ipadmini:p-10 mt-2 grid gap-4 grid-cols-2 md:grid-cols-3 w-full justify-center'>
                {tools.map(each=> {
                  return(
                    <TechCard key={each.title} {...each} />
                  )
                })}
          </div>
        </section>

      </section>

      </div>
    </div>
  )
}

type TechCardProps = {
  title: string,
  type: string,
  icon: ReactElement
}

function TechCard({title, type, icon} : TechCardProps) {
  return(
    <div className='flex flex-col items-center dark:bg-darkish bg-lightish  rounded-lg'>
      <div className='mt-10'>
        {icon}
      </div>
      <div className='mb-2 flex flex-row items-center mt-16 justify-between ipadmini:text-[16px] text-[9px] md:text-sm w-full pr-1 pl-1 text-center'>
        <p>{title}</p>
        <p className='bg-darkGray rounded-lg p-1'>{type}</p>
      </div>

    </div>
  )
}


import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";

const development  = [
  {
    title: "TypeScript",
    type: "Language",
    icon: <SiTypescript size={62}/>
  },
  {
    title: "Java",
    type: "Language",
    icon: <FaJava size={62}/>
  },
  {
    title: "Python",
    type: "Language",
    icon: <FaPython size={62}/>
  },
  {
    title: "Next.js",
    type: "Web Framework",
    icon: <SiNextdotjs size={62}/>
  },
  {
    title: "Node.js",
    type: "Framework",
    icon: <FaNode size={62}/>
  },
  {
    title: "Spring Boot",
    type: "Web Framework",
    icon: <SiSpringboot size={62}/>
  },
  {
    title: "ReactNative",
    type: "Mobile Framework",
    icon: <FaReact size={62}/>
  },
  {
    title: "GitHub",
    type: "Version Control",
    icon: <FaGithubSquare size={62}/>
  },
  {
    title: "SQL",
    type: "Database",
    icon: <FaDatabase size={62}/>
  },
  {
    title: "MongoDB",
    type: "Database",
    icon: <SiMongodb size={62}/>
  },
  {
    title: "GraphQL",
    type: "Query Language",
    icon: <SiGraphql size={62}/>
  },
  {
    title: "AWS:S3",
    type: "Cloud",
    icon: <SiAmazons3 size={62}/>
  },
  {
    title: "AWS:Lambda",
    type: "Cloud",
    icon: <SiAwslambda size={62}/>
  },
  {
    title: "Jest",
    type: "Testing",
    icon: <SiJest size={62}/>
  },
  {
    title: "JUnit",
    type: "Testing",
    icon: <SiJunit5 size={62}/>
  },
 
]

import { FaLinux } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RiNotionFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const tools = [
    {
      title: "Linux",
      type: "OS",
      icon:<FaLinux size={62}/>
    },
    {
      title: "Jira",
      type: "Communication",
      icon:<FaJira  size={62}/>
    },
    {
      title: "Microsoft365",
      type: "Office",
      icon:<FaMicrosoft  size={62}/>
    },
    {
      title: "VSCode",
      type: "Editor",
      icon:<TbBrandVscode size={62}/>
    },
    {
      title: "Notion",
      type: "Notes",
      icon:<RiNotionFill size={62}/>
    },
    {
      title: "Figma",
      type: "Design",
      icon:<FaFigma size={62}/>
    },
    {
      title: "Slack",
      type: "Communication",
      icon:<FaSlack size={62}/>
    },


]
