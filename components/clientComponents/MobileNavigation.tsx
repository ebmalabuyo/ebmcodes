'use client'
import React, { ReactNode, useState } from 'react'
import Link from 'next/link';

//Icons
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import ThemeSwitch from './extras/ThemeSwitch';



type NavLink = {
  icon: ReactNode,
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
        icon: <FaHome size={36}/>,
        page: "/"
      },
    {
      icon: <IoMdPerson size={36}/>,
      page: "/About"
    },
    {
      icon: <MdOutlineWork size={36}/>,
      page: "/Work"
    },
    {
      icon: <MdEmail size={36}/>,
      page: "/Contact"
    },
    {
      icon: <CgDetailsMore size={36}/>,
      page: "",
      sublinks: [
        {
          icon: <IoCodeSlash size={36}/>,
          page: "/Techstack"
        },
        {
          icon: <FaBookOpen size={36}/>,
          page: "/Bookshelf"
        }
      ]
    }
  ]



function Sublinker({item, state, setState} : SublinkProps) {
  
  return (
  <>
      <ul>
        {
        item.sublinks ? 
        <div className='relative'>
        <li className='flex cursor-pointer' onClick={()=>setState(!state)}>{item.icon}</li>
        <ul className={` ${state ? "flex" : "hidden"} flex-col gap-3 absolute -top-32 dark:bg-darkish/50 bg-lightish/50 p-4 pr-4 pl-4 rounded-t-md`}>
          {item.sublinks && 
            item.sublinks.map((each : any) => {
              return <li key={each.page} onClick={()=>setState(false)}><Link href={each.page}>{each.icon}</Link> </li>
            })
          }
        </ul>
      </div>
        :
        <div onClick={()=> setState(false)}><Link href={item.page as string}>{item.icon}</Link></div>
        }
      </ul>
    </>)
}


export default function MobileNavigation() {
  const [toggle, setToggle] = useState(false);
  return (
      <nav className='md:hidden mb-4 flex justify-center gap-6 fixed right-0 left-0 max-w-sm ml-auto mr-auto bottom-0 p-3 rounded-md dark:bg-darkish/50 bg-lightish/50'>
            <ThemeSwitch styles='flex items-center'/>
            {links.map(each => {
              return <div key={each.page}><Sublinker item={each} state={toggle} setState={setToggle}/></div>
            })}
      </nav>
  )
}
