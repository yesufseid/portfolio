import { GiDividedSquare } from "react-icons/gi";

export default function Arrow() {
  return (
    <div className='hidden md:flex flex-col justify-center w-fit ml-auto py-8  '>
    <div className='w-6 h-9 rounded-t-xl rounded-b-xl border-4 border-Brand2  ' >
      <hr className='h-3 w-1 bg-Brand2 rounded-lg  mt-1 mx-auto ' />
    </div> 
       {[1,2,3,4,5].map(()=>{
         return(
           <hr className='h-1 w-0.5 bg-black rounded-lg  mt-1 mx-auto ' />
         )
       })}
       <GiDividedSquare className='mx-auto text-black  ' />
    </div>
  )
}
