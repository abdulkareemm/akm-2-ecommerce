"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeSwitcherButton = () => {
    const [mounted,setMounted] = useState(false)
    const {theme,setTheme} = useTheme()

    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted){
        return null
    }
  return (
    <button className="dark:text-green-600">
      {theme === "light" ? (
        <Moon onClick={() => setTheme("dark")} />
      ) : (
        <Sun onClick={() => setTheme("light")} />
      )}
    </button>
  );
}

export default ThemeSwitcherButton