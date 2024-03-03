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

type NavLink = {
  icon: ReactNode,
  page: string,
  sublinks?: NavLink[],
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

function Sublinker({item} : {item: NavLink}) {
  return (
  <>
      <ul>
        {
        item.sublinks ? 
        <MobileDropdownLink item={item}/>
        :
        <Link href={item.page as string}>{item.icon}</Link> 
        }
      </ul>
    </>)
}

function MobileDropdownLink({item} : {item: NavLink}) {
  const [toggle, setToggle] = useState(false);
  return (
      <div className='relative'>
        <li className='flex cursor-pointer'>{item.icon}</li>
        <ul className='absolute -top-24'>
          {item.sublinks && 
            item.sublinks.map((each : any) => {
              return <li key={each.title}><Link href={each.page}>{each.icon}</Link> </li>
            })
          }
        </ul>
      </div>
  )
}

export default function MobileNavigation() {
  return (
      <nav  className='flex justify-center gap-6 absolute right-0 left-0 max-w-sm ml-auto mr-auto bottom-0 p-3 rounded-md  dark:bg-[#18181D]/50 bg-slate-100/50'>
            {links.map(each => {
              return <div key={each.page}><Sublinker item={each}/></div>
            })}
      </nav>
  )
}
