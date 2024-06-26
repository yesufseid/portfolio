import styled from 'styled-components'
import { GiDividedSquare } from "react-icons/gi";




const Section=styled.div`
@media only screen and (min-width: 600px) {
 height:100vh;
 scroll-snap-align:center;
 background-image:url("/bg3.jpg")
}
`
const code="<p>"
export default function AboutMe() {
  return (
    <Section>
      <div className='flex flex-col justify-center w-fit mx-auto py-10'>
         <div className='w-6 h-9 rounded-t-xl rounded-b-xl border-4 border-Brand2  ' >
           <hr className='h-3 w-1 bg-Brand2 rounded-lg  mt-1 mx-auto ' />
         </div> 
            {[1,2,3,4,5].map(()=>{
              return(
                <hr className='h-1 w-0.5 bg-white rounded-lg  mt-1 mx-auto ' />
              )
            })}
            <GiDividedSquare className='mx-auto  ' />
         </div>

         <div className='flex gap-10 justify-center'>
          <div className='flex flex-col gap-5 justify-start'>
              <h1 className='text-5xl font-serif font-semibold bg-bg1 border-2 border-Brand1 p-2 
              rounded-ss-3xl rounded-ee-3xl w-fit '>About Me</h1>
               <div className='flex flex-col justify-start border-2 border-bggray rounded-md  w-[570px]'>
                <code className='text-Brand1'>{code}</code>
                <h1 className='text-Brand1 font-serif  font-semibold text-3xl'>Hellow !</h1>
                <p>my name is seid and i specialize in web development that utilizes HTML, CSS, js,
                   and REACT etc. </p>
                <p></p>
               </div>
          </div>
           <img src={"/about.jpg"} className='w-72 h-96' alt="about me" />
         </div>
    </Section>
  )
}
