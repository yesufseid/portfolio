import Profile from "../component/ui/Profile"
import { Typewriter } from 'react-simple-typewriter'


export default function Landing() {
  return (
    <div className="w-screen">
    <div className="grid md:grid-cols-2 grid-cols-1 py-10 my-10 mx-10 title">
        <div className="flex justify-center">
            <div>
           <h1 className=" font-semibold text-yellow-200 text-5xl block mb-3">SEID YESUF</h1>
           <h1 className=" font-semibold text-Brand1 text-5xl">   
           <Typewriter
            words={['and Next.Js Developer.','MERN Stack']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          /></h1>
           <p className="font-sans mt-5 text-white text-lg">
            I like to craft solid and scalable full stack products <br />
            with great user experiences
           </p>
           <div className= "font-sans grid grid-cols-2 mt-20">
               <div className=" mt-3 text-white ">
                   <p>
                    Highly Skilled at progressive <br />
                    enhancement,design system & <br />
                    UI Engineering
                   </p>
               </div>
               <div  className=" mt-3 text-white text-left ml-5 ">
                <p>
                    Over 2+ years of experiences <br />
                    building products for clients <br />
                    across several Counteries
                </p>

               </div>
           </div>
           </div>
         
        </div>
        <div className="flex justify-center items-center z-10">
           <Profile />
        </div>
    </div>
    </div>
  )
}
