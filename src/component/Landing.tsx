import Profile from "../component/ui/Profile"
import Stipper from "../component/ui/Stipper"

export default function Landing() {
  return (
    <div>
 <svg  className="absolute top-28 left-[735px] " width="100px" height="100px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.25a1.25 1.25 0
   11-2.5 0 1.25 1.25 0 012.5 0zm11.5 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0
    012.5 0zm-1.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 4.5a1.25 
    1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM2.25 9.25a1.25 1.25 0 100-2.5 1.25 1.25 
    0 000 2.5zm7-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM8 15a1.25 1.25 0 
    100-2.5A1.25 1.25 0 008 15zM9.25 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5
     0zM2.25 15a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="#efe6e6"/>
</svg>
    <div className="grid grid-cols-2 py-10 my-10 mx-10">
        <div className="flex justify-center">
            <div>
           <h1 className="font-mono font-semibold text-yellow-200 text-5xl block mb-3">Full Stack</h1>
           <h1 className="font-mono font-semibold text-yellow-200 text-5xl">Developer .</h1>
           <p className="font-sans mt-5 text-white text-lg">
            I like to craft solid and scalable full stack products <br />
            with great user experiences
           </p>
           <div className="grid grid-cols-2 mt-20">
               <div className="font-sans mt-3 text-white ">
                   <p>
                    Highly Skilled at progressive <br />
                    enhancement,design system & <br />
                    UI Engineering
                   </p>
               </div>
               <div  className="font-sans mt-3 text-white text-left ml-5 ">
                <p>
                    Over adecade of experiences <br />
                    building products for clients <br />
                    across several Counteries
                </p>

               </div>
           </div>
           </div>
         
        </div>
        <div className="flex justify-center">
           <Profile />
           <Stipper />
        </div>
    </div>
    <svg  className="absolute bottom-20 left-[1048px] -z-0 " width="100px" height="100px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.25a1.25 1.25 0
   11-2.5 0 1.25 1.25 0 012.5 0zm11.5 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0
    012.5 0zm-1.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 4.5a1.25 
    1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM2.25 9.25a1.25 1.25 0 100-2.5 1.25 1.25 
    0 000 2.5zm7-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM8 15a1.25 1.25 0 
    100-2.5A1.25 1.25 0 008 15zM9.25 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5
     0zM2.25 15a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="#1d01ef"/>
</svg>
    </div>
  )
}
