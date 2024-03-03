
import Link from 'next/link'
import React from 'react'

// client Components used
import ThemeSwitch from './clientComponents/extras/ThemeSwitch'
import Logo from './clientComponents/extras/Logo'

//Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DropdownLink from './clientComponents/Nav/DropdownLink';


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
        <DropdownLink item={item}/>
        :
        <Link href={item.page as string}>{item.title}</Link> 
        }
      </ul>
    </>
  )

}

export default function Navigation() {
  return (
    <nav className='hidden text-sm md:flex justify-between p-3 pl-10 pr-10 m-5 max-w-6xl absolute left-0 right-0 ml-auto mr-auto top-0 dark:bg-[#18181D]/50 bg-slate-100/50 rounded-md'>
      {/* Left side of Navigation */}
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
      {/* Right side of navigation */}
      <div>
          <ul className='flex gap-6'>
            {externalLinks.map(each => {
              return <li key={each.foward}>
                          <div className='transition duration-500 ease-in-out transform hover:scale-110'>
                            <a href={each.foward}>
                              {each.logo}
                            </a>
                          </div>
                      </li>
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
