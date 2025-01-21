import React from 'react'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { MdModeNight,MdOutlineModeNight } from "react-icons/md";




const Navbar = ({onClick,day}) => {
    const [menu, openMenu] = useState(false);
    const [showMenu,setShowMenue] = useState(true);
    


    const handleshowMenuClick = ()=> {
        openMenu(!menu);
        setShowMenue(!showMenu);
    }


  return (
    <nav className='flex flex-wrap justify-between md: items-center text-white px-10 pt-6 md: px-20'>
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
        <ul className={`${menu?"block":"hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black p-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href='#About'>
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-125'>About</li>
            </a>
            <a href='#Experience'>
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-125'>Experience</li>
            </a>
            <a href='#Project'>
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-125'>Project</li>
            </a>
            <a href='#Contact'>
                <li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-125'>Contact</li>
            </a>
            <li className='transition-all duration-300 p-1 md:p-0 hover:scale-125'>{day?<MdModeNight onClick={onClick} size={22}/>: <MdOutlineModeNight onClick={onClick} size={22}/>}</li>
        </ul> 
        {showMenu ? <CiMenuBurger size={20} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={handleshowMenuClick}/>:<CiMenuKebab onClick={handleshowMenuClick} className="md:hidden absolute right-10 top-6 transition-all duration-600" />}      
    </nav>
    

  )
}

export default Navbar;