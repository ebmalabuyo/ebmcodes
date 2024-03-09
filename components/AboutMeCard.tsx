import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type AboutMeCardProps = {
    title: string,
    description: string,
    image: string,
    page: string
}

export default function AboutMeCard({title, description, image, page} : AboutMeCardProps) {
  return (
    
        <Link href={page} className='flex flex-col items-center justify-center dark:bg-darkish bg-lightish rounded-xl md:w-full aspect-square p-8'>
            <h1 className='font-bold text-3xl'>{title}</h1>
            <p className='text-xs text-center'>{description}</p>
            <div className='relative md:w-68 lg:w-96 w-52 aspect-square'>
                <Image
                    src={`/misc/${image}`}
                    alt="logo"
                    fill
                />
            </div>
        </Link>

  )
}
