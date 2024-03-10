import React from 'react'

import WorkCard from '@/components/WorkCard'

//data 
import work from "@/data/work.json"

export default function Work() {
  return (
    <div className="mt-24 md:mt-48 mb-36 md:flex md:justify-center">
      <div className="w-full lg:w-3/4 max-w-6xl md:p-2">


      <section className='p-4'>
          <div className='text-center ipadmini:text-left'>
                    <h1 className='font-extrabold text-2xl ipadmini:text-4xl '>My Work</h1>
                    <p>{"Work and projects I've contributed to"}</p>
          </div>

          <div className="flex flex-col gap-6 mt-6 md:p-8">
                {work.map(each => {
                          return (
                              <div key={each.title}>
                                <WorkCard {...each} />
                              </div>
                          )
                        })}
          </div>
        </section>


        </div>
      </div>
  )
}
