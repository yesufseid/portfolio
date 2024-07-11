import Navbar from "../component/navbar"
import Landing from "../component/Landing"
import Landingsmall from "../component/LandingSmall"
import styled from 'styled-components'
const Section=styled.div`
  @media only screen and (min-width: 600px) {
      height:100vh;
      scroll-snap-align:center;
    }


`


export default function Home() {
  return (
    <Section  id="home" className="md:bg-gradient-to-r md:from-myblue md:from-70% md:to-white md:to-30%  
     bg-gradient-to-t from-white from-60%  to-myblue to-30%  relative ">
    <Navbar /> 
    <div className="hidden md:flex">
    <Landing />
    </div>
     <div className="visible md:hidden mt-24">
     <Landingsmall /> 
     </div>
     </Section>
  )
}
