"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeSwitch({styles} : {styles : string}) {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <p className='flex items-center'><MdOutlineDarkMode size={24}/></p>
    }

    if(resolvedTheme === "dark") {

    return (
    <div onClick={() => setTheme('light')}  className={styles + " hover:cursor-pointer"}><MdOutlineLightMode size={24} /></div>


  )}

  if(resolvedTheme === "light") {

    return (
    <div onClick={() => setTheme('dark')} className={styles + " hover:cursor-pointer"}><MdOutlineDarkMode size={24} /></div>


  )}

}
