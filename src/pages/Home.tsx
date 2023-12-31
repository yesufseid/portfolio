import Navbar from "../component/navbar"
import Landing from "../component/Landing"
import Landingsmall from "../component/LandingSmall"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Skills from "./Skills"
import Expriance from "./Expriance"
import Project from "./Project"

export default function Home() {
  return ( 
    <div  className="h-screen md:bg-gradient-to-r md:from-myblue md:from-70% md:to-white md:to-30%   bg-gradient-to-t from-white from-55%  to-myblue to-45%  ">
      <Navbar /> 
      <div className="hidden lg:flex">
      <Landing />
      </div>
       <div className="visible md:hidden">
       <Landingsmall /> 
       </div> 
       
      <AboutMe /> 
      <Education />
      <Skills />
      <Expriance />
      <Project />
      <Expriance />
      </div>
  )
}
