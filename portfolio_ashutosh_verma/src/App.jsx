import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { MdModeNight } from "react-icons/md";
import {useState} from "react";


function App(){

  const [day,setDay]=useState(false);

    const handleClick = ()=>{
      setDay(!day);
    };

  return <div className={`${day?'bg-sky-300': 'bg-[#171d32]'} h-auto w-full overfloe-hidden`}>
      <Navbar onClick={handleClick} day={day}/>
      <Home/>
      <About/>
  </div>
}

export default App;