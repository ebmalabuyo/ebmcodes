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
      icon: <MdEmail size={30}/>,
      page: "/Contact"
    },
    {
      icon: <CgDetailsMore size={30}/>,
      page: "",
      sublinks: [
        {
          icon: <IoCodeSlash size={30}/>,
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
  const path = usePathname()

  return (
  <>
      <ul>
        {
        item.sublinks ? 
        <div className='relative'>
        <li className='flex cursor-pointer' onClick={()=>setState(!state)}>{item.icon}</li>
        <ul className={` ${state ? "flex" : "hidden"} flex-col gap-3 absolute -top-32 right-0 dark:bg-darkish bg-lightish p-4 pr-2 pl-2 rounded-t-md items-center`}>
          {item.sublinks && 
            item.sublinks.map((each : any) => {
              return <li key={each.page} onClick={()=>setState(false)} className={`${path === each.page ? "dark:bg-darkGray bg-lightGray" : ""} rounded-lg text-center`}><Link href={each.page}>{each.icon}</Link> </li>
            })
          }
        </ul>
      </div>
        :
        <div onClick={()=> setState(false)} className={`${path === item.page ? "dark:bg-darkGray bg-lightGray" : ""} rounded-lg `}><Link href={item.page as string}>{item.icon}</Link></div>
        }
      </ul>
    </>)
}


export default function MobileNavigation() {
  const [toggle, setToggle] = useState(false);

  return (
      <nav className=' w-full flex z-10 md:hidden mb-4  justify-center gap-6 fixed right-0 left-0 max-w-xs ml-auto mr-auto bottom-0 p-5 rounded-md dark:bg-darkish bg-lightish'>
            <ThemeSwitch styles='flex items-center'/>
            {links.map(each => {
              return <div key={each.page}><Sublinker item={each} state={toggle} setState={setToggle}/></div>
            })}
      </nav>
  )
}
