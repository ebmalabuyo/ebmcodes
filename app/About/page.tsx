import React from 'react'

export default function About() {
  return (
    <div className="mt-36 md:mt-64 mb-36 md:flex md:justify-center">
      <div className="w-full lg:w-3/4 max-w-6xl md:p-2">

        <section className='p-4'>

              {/* HEADING  */}
              <div>
                <h1 className='font-extrabold text-4xl'>A little bit about me</h1>
                <p>Who I am and what I do</p>
              </div>
              {/* END------- HEADING */}

              {/* BODY */}
              <section className='mt-10 flex flex-col gap-8'>
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
                    {"I graduated from California Polytechnic State University where I studied Quantitative Analytics. Halfway through my education at my university, I took an introduction to Computer Science course and that's where my passion for Software Engineering began. I picked up a minor in Computer Science and proceeded to take all the necessary classes (DSA, Database Systems, Systems Programming, Software Engineering, etc.) that would sharpen my technical problem solving. I enjoy all facets of Software Engineering, however, Front-end Engineering has always been the most facinating aspect to me as it allowed me to combine my creative outlook with analytical capabilities."}
                    </p>
                  </div>
              </section>
              {/* END------ BODY */}

        </section>

        </div>
      </div>
  )
}
