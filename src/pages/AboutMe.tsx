import styled from 'styled-components'
import Arrow from '../component/Arrow';




const Section=styled.div`
@media only screen and (min-width: 600px) {
 height:100vh;
 scroll-snap-align:center;
 
}
background-image:url("/bg4.jpg")
`
const code=["<p>","</p>"]
export default function AboutMe() {
  return (
    <Section>
      <Arrow />
         <div className=' md:flex gap-10 justify-center py-2'>
          <div className='flex flex-col gap-3 justify-start px-5'>
              <h1 className='text-3xl font-serif font-semibold bg-bg1 border-2 border-Brand1 p-2 
              rounded-ss-3xl rounded-ee-3xl w-fit '>About Me</h1>
               <div className='flex flex-col justify-start  gap-2 bg-bg1 rounded-xl px-3  md:w-[590px] capitalize font-light'>
                <code className='text-Brand1'>{code[0]}</code>
                <h1 className='text-Brand1 font-serif  font-semibold text-3xl'>Hellow !</h1>
                <p>my name is seid and i specialize in web development that utilizes <span className='text-Brand1' >HTML</span> ,
                <span className='text-Brand1' >CSS</span> ,<span className='text-Brand1' >JS</span> ,
                    and <span className='text-Brand1' >REACT</span> etc. </p>
                <p>i am a highly motivated individual and eternal optimist dedicate to writing clear,
                  concise, robust code that works. starving to never stop learing and improving.
                </p>
                <p>when i'm not coding , i am <span className='text-Brand1' >writing blogs</span>, reading, or picking up some now hands-on 
                  art project like <span className='text-Brand1' >photography</span> .

                </p>
                <p>i like to have my perspective and belife system challenged so that i see the word
                  through new eyes.
                </p>
                <code className='text-Brand1'>{code[1]}</code>
               </div>
          </div>
           <img src={"/about.jpg"} className='w-72 h-96 mx-auto md:mx-0 my-2 rounded-xl' alt="about me" />
         </div>
    </Section>
  )
}
