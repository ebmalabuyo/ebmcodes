"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <p><MdOutlineDarkMode size={24}/></p>
    }

    if(resolvedTheme === "dark") {

    return (
    <div onClick={() => setTheme('light')}><MdOutlineLightMode size={24} /></div>


  )}

  if(resolvedTheme === "light") {

    return (
    <div onClick={() => setTheme('dark')}><MdOutlineDarkMode size={24} /></div>


  )}

}
