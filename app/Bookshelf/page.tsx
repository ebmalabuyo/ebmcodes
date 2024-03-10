import React from 'react'

export default function Bookshelf() {
  return (
    <div className="mt-24 md:mt-48 mb-36 md:flex md:justify-center">
    <div className="w-full lg:w-3/4 max-w-6xl md:p-2">
      
    <section className='p-4'>

        {/* HEADING  */}
        <div className='text-center ipadmini:text-left'>
          <h1 className='font-extrabold text-2xl ipadmini:text-4xl '>{"Bookshelf"}</h1>
          <p>{"Books and pieces of wisdom I enjoy reading"}</p>
        </div>
        {/* END------- HEADING */}

        <section className='mt-10'>
            <h1 className='font-bold'>Currently Under Development</h1>
            <p>{"Check back soon :)"}</p>
        </section>
        </section>
      
      </div>
    </div>
  )
}
