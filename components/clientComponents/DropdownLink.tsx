'use client'
import React from 'react'
import { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';


  type NavLink = {
    title: string,
    page: string,
    sublinks?: NavLink[],
  }

export default function DropdownLink({item} : {item: NavLink} ) {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='relative' >
          <div className='flex cursor-pointer' onClick={() => setToggle(!toggle)}>
          <li>
          {item.title}
          </li>
          <RiArrowDropDownLine size={20} className={`transition-all ease-in-out ${toggle ? "" : "-rotate-180"} `}/>
          </div>
          {item.sublinks &&
          <ul className={` absolute mt-4 dark:bg-[#18181D] bg-slate-100/50 p-3 text-sm flex-col gap-3 -z-10 rounded-b-md transition-all ease-in-out ${toggle ? "flex opacity-100" : "hidden opacity-0"} `}>
                { 
                item.sublinks.map((each : any) => {
                  return <li className='text-center' key={each.title}><Link href={each.page}>{each.title}</Link></li>
                })
                }
          </ul>
        }
      </div>
  )
}
