import React from 'react'
import AboutImg from "../../assets/HomeImg-2.png"
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shawow-xl mx-0 md:mx-20 bg-opacity-30
    rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold items-center'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80' src={AboutImg} alt="" />
                {<HiArrowNarrowRight className='text-3xl' />}
                <h2>firsr</h2>

            </div>
        </div>

    </div>       
  )
}

export default About;