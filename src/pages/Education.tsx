import Box from "../component/ui/Box"
import Study from "../../public/study-student-svgrepo-com.svg"


export default function Education() {
  return (
    <div className="pb-40">
    <h1 className="text-myblue font-bold title text-5xl ml-32 mt-20">Education</h1>
    <div className="grid grid-cols-3 mx-10">
       <div className="col-span-2">
       <Box /> 
       </div>
       <div className="flex justify-center items-center">
        <img src={Study} alt="study" className="h-[300px]" />
       </div>
    </div>
     
    </div>
  )
}
