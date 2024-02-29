'use client'
import React from 'react'
import { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';

type DropNavLink = {
    title: string,
    page: string,
    sublinks: NavLink[],
  }
  type NavLink = {
    title: string,
    page: string,
    sublinks?: NavLink[],
  }

export default function DropdownLink({item} : {item: DropNavLink} ) {
    const [toggle, setToggle] = useState(false)
  return (
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
  )
}
