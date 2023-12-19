import Navbar from "../component/navbar"
import Landing from "../component/Landing"
import Landingsmall from "../component/LandingSmall"
import AboutMe from "./AboutMe"

export default function Home() {
  return ( 
    <div className="w-screen"> 
    <div  className="h-screen w-screen md:bg-gradient-to-r md:from-myblue md:from-70% md:to-white md:to-30%   bg-gradient-to-t from-white from-55%  to-myblue to-45%  ">
      <Navbar /> 
      <div className="hidden lg:flex">
      <Landing />
      </div>
       <div className="visible md:hidden">
       <Landingsmall /> 
       </div>
       </div>
      <AboutMe />
    </div> 
  )
}
