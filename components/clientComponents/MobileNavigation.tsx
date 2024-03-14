'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


//Icons
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import ThemeSwitch from './extras/ThemeSwitch';


import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { LuContact } from "react-icons/lu";


type NavLink = {
  icon: ReactNode | string,
  page: string,
  sublinks?: NavLink[],
}

type SublinkProps = {
  item: NavLink,
  state: boolean,
  setState: (state : boolean) => void
}

const links = [
    {
        icon: <FaHome size={30}/>,
        page: "/"
      },
    {
      icon: <IoMdPerson size={30}/>,
      page: "/About"
    },
    {
      icon: <MdOutlineWork size={30}/>,
      page: "/Work"
    },
    {
      icon: <LuContact size={30}/>,
      page: "/Contact"
    },
    {
      icon: <CgDetailsMore size={30}/>,
      page: "",
      sublinks: [
        {
          icon: "Technology",
          page: "/Techstack"
        },
        {
          icon: "Bookshelf",
          page: "/Bookshelf"
        }
      ]
    }
  ]

  const externalLinks = [
    {
      logo: <FaLinkedin size={36}/>,
      foward: "https://www.linkedin.com/in/emalabuyo/"
    },
    {
      logo: <FaGithub size={36}/>,
      foward: "https://github.com/ebmalabuyo"
    },
    {
      logo: <MdEmail size={36}/>,
      foward: "mailto:elijahbmalabuyo@gmail.com"
    }
  ]


function Sublinker({item, state, setState} : SublinkProps) {
  const path = usePathname()
  const handleToggle = () => {
    if (state === true) {
      setState(false)
    }
    if (state === false)
      setState(true)
    }
  

  return (
  <>
      <ul>
        {
        item.sublinks ? 
        <div className=''>
        <li className='flex cursor-pointer' onClick={()=>handleToggle()}>{item.icon}</li>
        <ul className={` ${state ? "right-0" : "-right-full"} flex inset-y-0 flex-col gap-3 fixed h-screen w-2/3 dark:bg-darkish bg-lightish border-l border-lightGray p-4 pr-2 pl-2  items-center justify-center transition-all duration-300`}>
          {item.sublinks && 
            item.sublinks.map((each : any) => {
              return <li key={each.page} onClick={()=>handleToggle()} className={`${path === each.page ? "dark:bg-darkGray bg-lightGray" : ""} rounded-lg text-center text-lg ipadmini:text-3xl`}><Link href={each.page}>{each.icon}</Link> </li>
            })
          }
          <ul className='flex gap-6'>{externalLinks.map(each=> {
            return(
              <div key={each.foward}><a href={each.foward}>{each.logo}</a></div>
            )
          })}</ul>
          <button onClick={()=>handleToggle()} className='mt-48'>< BsFillBackspaceReverseFill size={35}/></button>
        </ul>
      </div>
        :
        <div className={`${path === item.page ? "dark:bg-darkGray bg-lightGray" : ""} rounded-lg p-1`}><Link href={item.page as string}>{item.icon}</Link></div>
        }
      </ul>
    </>)
}


export default function MobileNavigation() {
  const [toggle, setToggle] = useState(false);

  useEffect(()=> {
    function checkNavOpen() {
    if(toggle === true) {
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  
  }
  checkNavOpen()
  },[toggle])

  return (
      <nav className='border md:hidden border-lightGray max-w-md flex z-10  mb-4  justify-center gap-6 fixed right-0 left-0 max-w-s ml-auto mr-auto -bottom-4 p-5  dark:bg-darkish bg-lightish'>
            <ThemeSwitch styles='flex items-center'/>
            {links.map(each => {
              return <div key={each.page}><Sublinker item={each} state={toggle} setState={setToggle}/></div>
            })}
      </nav>
  )
}
