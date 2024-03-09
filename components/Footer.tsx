import React from 'react'
import Logo from './clientComponents/extras/Logo'

export default function Footer() {
  return (
    <footer className="mb-4 md:mb-0 md:flex md:justify-center bg-[url('../public/BackgroundBottom.png')] bg-contain  h-56 border">
        <div className="md:w-3/4 md:max-w-6xl md:p-2 flex flex-col md:grid">
        <div>

        </div>
        <div>
            <Logo/>
            <h1>Thanks for stopping by</h1>

        </div>
        </div>
    </footer>
  )
}
