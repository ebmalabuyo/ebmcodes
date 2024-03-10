import LinkButton from '@/components/LinkButton'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className="mt-36 md:mt-64 mb-36 md:flex md:justify-center">
      <div className="w-full lg:w-3/4 max-w-6xl md:p-2">

        <section className='p-4'>

              {/* HEADING  */}
              <div className='text-center ipadmini:text-left'>
                <h1 className='font-extrabold text-2xl ipadmini:text-4xl '>A little bit about me</h1>
                <p>Who I am and what I do</p>
              </div>
              {/* END------- HEADING */}

              {/* BODY */}
              <section className='p-4 mt-10 flex flex-col items-center gap-8 ipadmini:grid ipadmini:grid-row-1 ipadmini:grid-col-2'>

                <div className='ipadmini:col-start-2 h-full'>
                <div className='relative w-64 h-96 '>
                    <Image 
                      src={"/misc/portrait.jpg"}
                      alt='me'
                      fill
                      className='rounded-xl'
                    />
                </div>
                </div>
                

                <div className='flex flex-col gap-8 ipadmini:col-start-1 ipadmini:row-start-1'>
                        <div>
                          <p className='font-bold'>WHO I AM</p>
                          <p className='text-sm'>{"I'm Elijah a multi-disciplinary software engineer, specializing with front-end technologies. I am based out of California, USA."}</p>
                        </div>

                        <div>
                          <p className='font-bold'>WHAT I DO</p>
                          <p className='text-sm'>{"With 2+ years of valuable experience in Software Development, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. Along with my education and intership experience, I have had the privilege of collaborating on projects for esteemed clients like UMV.MT and freelance projects on UpWork. It was an incredibly rewarding experience to develop applications that directly impact the lives of others."}</p>
                        </div>

                        <div>
                          <p className='font-bold'>WHAT I DID</p>
                          <p className='text-sm'>
                            {"I graduated from California Polytechnic State University where I studied Quantitative Analytics. Halfway through my education at my university, I took an introduction to Computer Science course and that's where my passion for Software Engineering began. I picked up a minor in Computer Science and proceeded to take all the necessary classes (DSA, Database Systems, Systems Programming, Software Engineering, etc.) that would sharpen my technical problem solving. I enjoy all facets of Software Engineering, however, Front-end Engineering has always been the most facinating aspect to me as it allowed me to combine my creative outlook with my strong analytical capabilities."}
                            </p>
                          </div>

                          <div>
                            <p>
                            Feel free to reach out via <a href="mailto:elijahbmalabuyo@gmail.com" className='underline underline-offset-4'>e-mail</a>, or follow me on <a href='https://github.com/ebmalabuyo' className='underline underline-offset-4'>Github</a>. 
                            Want to see where I’ve worked? Check out my <a href="" className='underline underline-offset-4'>Resume</a>, or Connect with me on <a href="" className='underline underline-offset-4'>Linkedin</a>.
                            </p>
                          </div>

                          <p>{"Let's build something great,"}</p>
                          
                          <h1 className='font-mono font-semibold text-4xl'>EBM</h1>
                          <LinkButton dark={true} label='Get in touch -->' resume={false} direct='/Contact'/>
                  </div>
              </section>
              {/* END------ BODY */}



        </section>

        </div>
      </div>
  )
}
