import {EBox} from "../component/ui/Box"
import Study from "../assets/laptop-computer-coding-code-script-svgrepo-com.svg"

export default function Expriance() {
  return (
    <div className="mb-20">
    <h1 className="text-myblue font-bold title text-5xl mr-32  text-right">Expriance</h1>
    <div className="grid grid-cols-3 mx-10">
    <div className="flex justify-center items-center">
        <img src={Study} alt="study" className="h-[300px]" />
       </div>
       <div className="col-span-2 mx-5">
       <EBox /> 
       </div>
    </div>
     
    </div>
  )
}
