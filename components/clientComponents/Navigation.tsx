"use client"
import Link from 'next/link'
import React from 'react'

// client Components used
import ThemeSwitch from './extras/ThemeSwitch'
import Logo from './extras/Logo'

//Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


type NavLink = {
  title: string,
  page: string,
  sublinks?: NavLink[],
}

type SublinkProps = {
  item: NavLink
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



function Sublinker({item} : SublinkProps) {


  return(
    <>
      <ul>
        {/* IF SUBLINKS CREATE DROP DOWN MENU */}
        {
        item.sublinks ? 
        <div className='relative group' >
          <div className='flex cursor-pointer'>
              <li>
              {item.title}
              </li>
              <RiArrowDropDownLine size={20} className={`transition-all ease-in-out -rotate-180 group-hover:rotate-0 `}/>
          </div>
              {/* DROP DOWN MENU  */}
              {item.sublinks &&
              <ul className={`group-hover:flex hover:flex hidden top-1 z-10  absolute mt-4 dark:bg-darkish bg-lightish p-6 text-sm flex-col gap-3  rounded-b-md transition-all ease-in-out`}>
                    {/* ON CLICK FOR EACH ITEM IT WILL SET THE TOGGLE BACK TO FALSE */}
                    {
                    item.sublinks.map((each : any) => {
                      return <li className='text-center block' key={each.title}><Link href={each.page}>{each.title}</Link></li>
                    })
                    }
              </ul>
              }
        </div>
        :
        // ELSE CREATE A REGULAR LINK TAG
                // ON CLICK IT WILL SET THE TOGGLE BACK TO FALSE 
        <Link href={item.page as string} >{item.title}</Link> 
        }
      </ul>
    </>
  )

}



export default function Navigation() {
  // STATE TO MANAGE THE NAVBARS TOGGLE 

  

  return (
    <nav className='hidden text-sm md:flex justify-between p-3 pl-10 pr-10 m-5 max-w-6xl fixed left-0 right-0 ml-auto mr-auto top-0 dark:bg-darkish bg-lightish rounded-md z-10'>
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
          <hr className='h-[25px] border border-black'/>
          <ThemeSwitch styles=""/>
          </ul>
      </div>
    </nav>
  )
}
