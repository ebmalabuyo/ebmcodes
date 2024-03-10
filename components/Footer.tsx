import React from 'react'
import Logo from './clientComponents/extras/Logo'
import Link from 'next/link'

const externalLinks = [
  {
    title: "Linkedin",
    foward: "https://www.linkedin.com/in/emalabuyo/"
  },
  {
    title: "Github",
    foward: "https://github.com/ebmalabuyo"
  },
  {
    title: "Email",
    foward: "mailto:elijahbmalabuyo@gmail.com"
  }
]

const internalLinks = [
  {
    title : "About",
    foward: "/About"
  },
  {
    title : "Work",
    foward: "/Work"
  },
  {
    title : "Technology",
    foward: "/Techstack"
  },
  {
    title : "Contact",
    foward: "/Contact"
  },
 
]

export default function Footer() {
  return (
    <footer className="text-sm ipadmini:flex ipadmini:justify-center bg-[url('../public/BackgroundBottom.png')] bg-cover bg-no-repeat p-6 ">
        <div className="ipadmini:w-3/4 ipadmini:max-w-6xl ipadmini:p-2 flex flex-col ipadmini:flex-row md:items-center ipadmini:justify-between gap-8 p-6">
        
        <div className='flex flex-col ipadmini:flex-row gap-8'>
            <ul className='flex flex-col gap-2'>
              <h1 className='font-bold mb-2'>Links</h1>
                {internalLinks.map(each=> {
                  return <Link key={each.title} href={each.foward}>{each.title}</Link>
                })}
            </ul>

            <ul className='flex flex-col gap-2'>
              <h1 className='font-bold mb-2'>Elsewhere</h1>
                {externalLinks.map(each=> {
                  return <a key={each.title} href={each.foward}>{each.title}</a>
                })}
            </ul>
        </div>

          <div className='mb-24'>
              <Logo/>
              <h1>Thanks for stopping by</h1>
              <p>Created with React</p>
              <p>© EBMCodes. All Rights Reserved 2024.</p>
          </div>
       
        </div>
    </footer>
  )
}
