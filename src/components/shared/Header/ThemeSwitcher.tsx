'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ThemeSwitcher = () => {
  const [lightIsOn, setLightIsOn] = useState(false)

  function toggleTheme() {
    setLightIsOn(!lightIsOn)

    localStorage.setItem('lightIsOn', JSON.stringify(!lightIsOn))

  }

  useEffect(() => {
    const lightIsOn = JSON.parse(localStorage.getItem('lightIsOn') || 'false')

    setLightIsOn(lightIsOn)
  }, [])

  return (
    <div className='flex justify-between bg-slate-800 h-auto rounded-lg'>
      <button onClick={toggleTheme} className={`relative flex flex-col flex-1 items-center py-2 px-3 text-white ${!lightIsOn ? 'bg-slate-900 rounded-lg' : ''}`}>
        <Moon />
        <span>
          Dark
        </span>
      </button>
      <button onClick={toggleTheme} className={`relative flex flex-col flex-1 items-center py-2 px-3 text-white ${lightIsOn ? 'bg-slate-900 rounded-lg' : ''}`}>
        <Sun />
        <span>
          Light
        </span>
      </button>
    </div>
  )
}