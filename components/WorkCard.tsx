import React from 'react'
import Image from 'next/image'

import { FaLongArrowAltRight } from "react-icons/fa";

type WorkCardProps = {
    title: string,
    description: string,
    link: string,
    logo: string,
    image: string,
    linkLabel: string
}

export default function WorkCard({title, description, link, logo, image, linkLabel} : WorkCardProps) {
  return (
    <div className='flex dark:bg-darkish bg-lightish p-6 rounded-lg gap-12 items-center text-xs'>
        {/* LEFT SIDE */}
        <div>
                <div className='w-24 h-24 relative '>
                    <Image 
                        src={`/projects/${logo}`} 
                        alt='logo' 
                        fill
                        className='rounded-lg'
                    />
                </div>

                <h1 className='mt-4 font-bold'>{title}</h1>

                <p className='text-sm mb-10'>{description}</p>

                <div className='flex gap-2 items-center'>
                    <a href={link}>{linkLabel}</a> 
                    <FaLongArrowAltRight size={16}/>
                </div>
                
        </div>
        
        {/* RIGHT SIDE */}
        <div className='hidden tablet:flex'>
            <div className='w-64 h-56 relative'>
                    <Image
                        src={`/projects/${image}`} 
                        alt='logo' 
                        fill
                        className='rounded-md'
                    />
            </div>
        </div>

    </div>
  )
}
