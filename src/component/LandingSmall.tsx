import Profile from "../component/ui/Profile"
import Stipper from "../component/ui/Stipper"

export default function Landing() {
  return (
    <div>
    <div className="grid grid-cols-1 py-5 my-10  title ">
    <div className="flex justify-center ml-5 items-center -z-0 ">
           <Profile />
           {/* <Stipper />  */}
     </div>
        <div className="justify-center mt-10">
           <h1 className=" font-semibold text-yellow-200 text-5xl block mb-3 text-center ">MRNE Stack</h1>
           <h1 className=" font-semibold text-yellow-200 text-5xl text-center">Developer .</h1>
           <p className="font-sans mt-5 text-white text-lg text-center">
            I like to craft solid and scalable full stack products <br />
            with great user experiences
           </p>
           <div className= "font-sans grid grid-cols-2 mt-10 mx-5">
               <div className=" mt-3 text-white ">
                   <p>
                    Highly Skilled at progressive <br />
                    enhancement,design system & <br />
                    UI Engineering
                   </p>
               </div>
               <div  className=" mt-3 text-white text-left ml-5 ">
                <p>
                    Over adecade of experiences <br />
                    building products for clients <br />
                    across several Counteries
                </p>
               </div>
           </div>
           </div>
         
        </div>
    </div>
  )
}
