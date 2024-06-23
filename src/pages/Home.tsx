
import Contact from "../component/Contact"
import Homes from "../component/Home"

import styled from 'styled-components'

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
  return ( 
  <Container>
    <Homes />
    <Contact />
  </Container> 
  )
}
