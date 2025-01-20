import React from 'react';
import HomeImg from "../../assets/HomeImg-2.png";


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hi, I’m Ashutosh</h1>
            <p className='text-sm md: text-2xl leading-tighter tracking-tight'>I am a skilled full-stack developer 
                    with expertise in web applications. With proficiency in both front-end and back-end technologies,
                    I focus on delivering high-quality, efficient solutions.
            </p>
            <button className='mt-5 md: mt-10 text-white py-2 px-3 text-sm md: text-lg md: py-2 md:px-4 hover:opacity-85 duration-300
            hover:scale-125 font-semibold rounded-3xl bg-[#444445]'>Contact Me</button>
        </div>
        <div><img className='w-2/3' src={HomeImg} alt="" /></div>
            

    </div>
  )
}

export default Home