import React, { ReactElement } from 'react'


//Icons
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { BsChatRightText } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { DiCodeBadge } from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const offers = [
  {
    description: "I'm a recruiter with an opportunity",
    component:<FcBusinesswoman size={36}/>
  },
  {
    description: "I'm looking for a freelance developer",
    component: <DiCodeBadge size={36} />
  },
  {
    description: "I have a helpful tip for development",
    component: <MdOutlineTipsAndUpdates size={36}/>
  },
  {
    description: "I got a book recommendation",
    component: <GiBlackBook size={36}/>
  },
  {
    description: "I want to schedule a quick chat",
    component: <BsChatRightText size={36}/>
  },
  {
    description: "I represent a company",
    component: <FcBusinessman size={36}/>
  },
]

const externalLinks = [
  {
    logo: <FaLinkedin size={40}/>,
    foward: "https://www.linkedin.com/in/emalabuyo/"
  },
  {
    logo: <FaGithub size={40}/>,
    foward: "https://github.com/ebmalabuyo"
  },
  {
    logo: <MdEmail size={40}/>,
    foward: "mailto:elijahbmalabuyo@gmail.com"
  }
]

function ContactCards({description, component} : {
  description: string,
  component: ReactElement
}) {
  return(
    <div className='text-[12px] ipadmini:text-xs md:text-lg dark:bg-darkish bg-lightish p-4 ipadmini:p-14 md:p-16 rounded-xl text-center flex flex-col justify-center items-center'>
        <div>
          {component}
        </div>
        <div>
        <p className='w-full '>
          {description}
        </p>
        </div>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="mt-36 md:mt-48 mb-36 md:flex md:justify-center">
      <div className="w-full lg:w-3/4 max-w-6xl md:p-2">
        
      <section className='p-4'>

          {/* HEADING  */}
          <div className='text-center ipadmini:text-left'>
            <h1 className='font-extrabold text-2xl ipadmini:text-4xl '>{"Get in Touch"}</h1>
            <p>{"Let's create something great"}</p>
          </div>
          {/* END------- HEADING */}

          {/* BODY */}
          <p className='w-full text-center mt-10 mb-2 text-lg'>Please reach out to me at: <a href='mailto:elijahbmalabuyo@gmail.com' className='underline'>elijahbmalabuyo@gmail.com</a></p>
          <section className=' p-10 grid justify-center gap-8 grid-cols-2 ipadmini:grid-cols-3'>
                {offers.map(each=> {
                  return <ContactCards key={each.description} {...each}/>
                })}
          </section>

          
          <div className='flex flex-row gap-6 justify-center w-full'>
              {externalLinks.map(each=>{
                return (
                <div key={each.foward}>
                  <a 
                    href={each.foward} 
                    className='transition duration-500 ease-in-out transform hover:scale-110'>
                    {each.logo}
                    </a> 
                </div>
                  
                  )
              })}
          </div>

        </section>

        
        </div>
      </div>
      
  )
}
