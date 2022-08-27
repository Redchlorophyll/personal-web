import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import icSunny from '@/assets/img/icons/ic_sunny.svg';
import icMoon from '@/assets/img/icons/ic_moon.svg';

export default function ToggleMode() {
  const [ isDarkMode, setDarkMode ] = useState(false);

  useEffect((): void => {
    if (localStorage.getItem('theme') === 'dark') setDarkMode(true);
    else if (localStorage.getItem('theme') === 'light' 
    || !localStorage.getItem('theme')) setDarkMode(false);
  }, []);

  function onChangeMode(): void {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else if (localStorage.getItem('theme') === 'light' || !localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!isDarkMode);
  }

  return (
    <div>

    <div 
    className={`${!isDarkMode? 'bg-black-300' : 'bg-yellow-700'} w-24 h-12 rounded-full relative left transition-all duration-700`}
    >
        <input 
        type='checkbox' 
        id='toggle-mode' 
        className='opacity-0 peer w-24 h-24 z-10'
        checked={isDarkMode}
        onChange={onChangeMode}
        />
        <label
        htmlFor='toggle-mode'
        className='rounded-full absolute 
        bg-black-100 p-1 left-2 top-1
        peer-checked:bg-black-800
        peer-checked:left-12
        transition-all duration-700
        w-10 h-10
        flex justify-center
        '
        >
          <Image 
          src={isDarkMode? icMoon : icSunny}
          width="25px"
          height="25px"
          alt={isDarkMode? 'Dark mode icon' : 'light mode icon'} />
        </label>
    </div>
    { isDarkMode? 'checked': 'unchecked' }
    </div>
  )
}
