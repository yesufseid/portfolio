import Profile from "../component/ui/Profile"
import { Typewriter } from 'react-simple-typewriter'


export default function Landing() {
  return (
    <div className="grid grid-cols-1 md:py-5 my-10  title ">
    <div className="flex flex-col justify-center ml-5 items-center -z-0 ">
           <Profile />
     </div>
        <div className="justify-center md:mt-10">
           <h1 className=" font-semibold  text-green-600 text-3xl md:text-5xl block py-3 h-20 text-center ">
            SEID YESUF <br /> 
            <span className="ml-1 text-Brand1">
            <Typewriter
            words={['and Next.Js Developer.','MRNE Stack ']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          /></span> </h1>
           <h1 className=" font-semibold text-green-600 md:text-yellow-200 text-3xl md:text-5xl text-center"></h1>
           <p className="font-sans mt-5 text-black md:text-white text-lg text-center">
            I like to craft solid and scalable full stack products 
            with great user experiences
           </p>
           <div className= "font-sans grid grid-cols-2 mt-3 mx-4">
               <div className=" mt-3 text-black md:text-white  flex ">
                   <p>
                    Highly Skilled at progressive 
                    enhancement,design system & 
                    UI Engineering
                   </p>
                   <hr className="w-1 h-28 bg-green-600" />
               </div>
               <div  className=" mt-3 text-black md:text-white  ">
                <p>
                    Over 2+ years of experiences 
                    building products for clients 
                    across several Counteries
                </p>
               </div>
           </div>
           </div>
         
        </div>
  )
}
