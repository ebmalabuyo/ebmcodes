
import Link from 'next/link'
import React from 'react'

import ThemeSwitch from './clientComponents/ThemeSwitch'
import Logo from './clientComponents/Logo'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


type NavLink = {
  title: string,
  page: string,
  sublinks?: NavLink[],
}

const externalLinks = [
  {
    logo: <FaLinkedin size={24}/>,
    foward: "https://www.linkedin.com/in/emalabuyo/"
  },
  {
    logo: <FaGithub size={24}/>,
    foward: "https://github.com/ebmalabuyo"
  },
  {
    logo: <MdEmail size={24}/>,
    foward: "mailto:elijahbmalabuyo@gmail.com"
  }
]

const links = [
  {
    title: "About",
    page: "/About"
  },
  {
    title: "Work",
    page: "/Work"
  },
  {
    title: "Contact",
    page: "/Contact"
  },
  {
    title: "More",
    page: "",
    sublinks: [
      {
        title: "Technology",
        page: "/Techstack"
      },
      {
        title: "Bookshelf",
        page: "/Bookshelf"
      }
    ]
  }
]



function Sublinker({item} : {item: NavLink}) {
  return(
    <>
      <ul>
        {
        item.sublinks ? 
        <div className='relative'>
          <div className='flex'>
          <li>
          {item.title}
          </li>
          <RiArrowDropDownLine size={20}/>
          </div>
          <ul className={`absolute mt-5 dark:bg-[#18181D] bg-slate-100 p-3 text-sm flex-col gap-3 -z-10 `}>
                { 
                item.sublinks.map((each : any) => {
                  return <li className='text-center' key={each.title}><Link href={each.page}>{each.title}</Link></li>
                })
                }
          </ul>
      </div>
        :
        <Link href={item.page as string}>{item.title}</Link> 
        }
      </ul>
    </>
  )

}

export default function Navigation() {
  return (
    <nav className='text-sm flex justify-between p-4 m-4 max-w-4xl absolute left-0 right-0 ml-auto mr-auto top-0 dark:bg-[#18181D] bg-slate-100'>

      <div>
        <ul className='flex gap-6'>
        <Logo/>
          {links.map((each) => { 
            
            return <div key={each.title}><Sublinker item={each}/></div>
          }
            )
              }
        </ul>
        </div>
        <div>
          <ul className='flex gap-6'>
            {externalLinks.map(each => {

              return <li key={each.foward}><a href={each.foward}>{each.logo}</a></li>
            }
              )
                }
          <hr className='h-5 border-t-2 '/>
          <ThemeSwitch/>
          </ul>
          
        </div>
    </nav>
  )
}
