import Profile from "../component/ui/Profile"


export default function Landing() {
  return (
    <div className="grid grid-cols-1 md:py-5 my-10  title ">
    <div className="flex flex-col justify-center ml-5 items-center -z-0 ">
           <Profile />
     </div>
        <div className="justify-center md:mt-10">
           <h1 className=" font-semibold text-green-600 text-3xl md:text-5xl block mb-3 text-center ">MRNE Stack Developer</h1>
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
                   <hr className="w-1 h-24 bg-green-600" />
               </div>
               <div  className=" mt-3 text-black md:text-white  ">
                <p>
                    Over adecade of experiences 
                    building products for clients 
                    across several Counteries
                </p>
               </div>
           </div>
           </div>
         
        </div>
  )
}
