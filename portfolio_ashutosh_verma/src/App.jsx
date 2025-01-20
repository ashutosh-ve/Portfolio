import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App(){
  return <div className="bg-[#171d32] h-auto w-full overfloe-hidden">
      <Navbar/>
      <Home/>
      <About/>
  </div>
}

export default App;