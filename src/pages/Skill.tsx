import styled from 'styled-components'
import { PiCode } from "react-icons/pi";
import Arrow from '../component/Arrow';
import Title from '../component/Title';
import Box from '../component/Box';
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import SimpleSlider from "../component/Couresal"


const Section=styled.div`
@media only screen and (min-width: 600px) {
 height:100vh;
 scroll-snap-align:center;
}
/* background-image:url("/bg.jpg") */
`

export default function Skill() {
  return (
   <Section  id='skills' >
    <div    className='hidden md:grid md:grid-cols-2   items-center'>
      <div className='w-fit ml-auto'>
       <Arrow />
       </div>
         <PiCode    className='text-Brand1 w-24 h-24 ml-32' />
      </div>
       <Title text='Skills'/>  
       <p className='capitalize text-center text-black font-mono font-thin'>i am striving to never stop learning and improving</p>
     <div className='w-fit mx-auto md:flex gap-5  md:gap-10 justify-center  mt-5'>
     <Box icon={<MdOutlineDesktopWindows className='mx-auto text-black w-10 h-10 ' />} title='Frontend Development' text='HTML.CSS.JS.REACT' />
     <Box icon={<LuSmartphone  className='mx-auto text-black w-10 h-10'/>}  text='Node.Express.Mongodb.Prisma' title="Backend Development"/>
     </div>
     <div className='flex justify-center my-20 md:mt-20 overflow-x-auto md:mb-5'>
     <SimpleSlider />
     </div>
   </Section>
  )
}
