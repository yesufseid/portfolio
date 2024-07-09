
import Contact from "../component/Contact"
import Homes from "../component/Home"
import AboutMe from "./AboutMe"
import Skill from "./Skill.tsx"
import Works from "./Works.tsx"
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import ScrollButton from "../component/ScrollButton.tsx"

   const Container=styled.div`
    height:100%;
    @media only screen and (min-width: 600px) {
      height:100vh;
      scroll-snap-type:y mandatory;
    scroll-behavior:smooth;
    overflow-y:auto;
    scrollbar-width: none;
    }
   
    color: white;
   `
export default function Home() {
  useEffect(() => {
    AOS.init({
      disable:window.innerWidth > 800,
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);




  return ( 
  <Container>
    <Homes />
    <AboutMe />
    <Skill />
    <Works />  
    <Contact />
    <ScrollButton />
  </Container> 
  )
}
